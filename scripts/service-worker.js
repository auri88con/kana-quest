/* eslint-env serviceworker */
// Kana Quest service worker.
//
// Source template — `scripts/vite-plugin-service-worker.js` stamps the build's
// hashed asset list and cache name into the two placeholders below and emits
// the result as `dist/sw.js`. Keep this file dependency-free plain JS: it is
// copied verbatim, never bundled.
//
// Strategy:
//   navigations      -> cache-first on the app shell (instant, works offline),
//                       falling back to the network for a cold cache
//   same-origin GETs -> cache-first, then network with a runtime cache write,
//                       so anything not precached (mascot art, fonts added
//                       later) becomes available offline after its first load.
//                       HTML is never written under a non-navigation URL: a
//                       host with an SPA fallback answers a missing asset with
//                       the app shell and a 200, and caching that would poison
//                       the URL for good
//   everything else  -> straight to the network

const CACHE_NAME = '__CACHE_NAME__'
const PRECACHE_URLS = __PRECACHE__
const APP_SHELL_URL = '/'

// The shell is cached by hand rather than through addAll: a host that redirects
// (say `/index.html` -> `/`) hands back a response flagged as redirected, and
// handing one of those to a navigation throws. Rebuilding the response drops
// the flag.
async function precacheShell(cache) {
  const response = await fetch(APP_SHELL_URL, { cache: 'reload' })
  if (!response.ok) return
  const body = await response.blob()
  await cache.put(APP_SHELL_URL, new Response(body, { status: 200, headers: response.headers }))
}

// Cached one request at a time rather than with addAll, which is atomic: a
// single 404 would reject the whole install, leaving the app with no offline
// support at all and no clue why. A partial cache is worth having.
async function precacheAssets(cache) {
  const results = await Promise.allSettled(
    PRECACHE_URLS.map((url) => cache.add(new Request(url, { cache: 'reload' }))),
  )
  const failed = results.filter((result) => result.status === 'rejected').length
  if (failed) {
    console.warn(`[kana-quest] ${failed} of ${PRECACHE_URLS.length} assets failed to precache.`)
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.all([precacheAssets(cache), precacheShell(cache)]))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

function isCacheable(request, response) {
  // Opaque/error responses are never worth persisting.
  if (!response.ok || response.type !== 'basic') return false
  // An SPA fallback answers "/assets/gone.js" with the app shell at 200. Cache
  // that and the URL serves HTML forever, so the script can never load again.
  const isHtml = (response.headers.get('content-type') || '').includes('text/html')
  return !isHtml || request.mode === 'navigate'
}

async function cacheFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request, { ignoreSearch: true })
  if (cached) return cached
  try {
    const response = await fetch(request)
    if (isCacheable(request, response)) cache.put(request, response.clone())
    return response
  } catch (err) {
    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl)
      if (fallback) return fallback
    }
    throw err
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    // Every in-app route is served by the same shell (history-API routing), so
    // a deep link opened offline still boots the app.
    event.respondWith(
      caches
        .open(CACHE_NAME)
        .then((cache) => cache.match(APP_SHELL_URL))
        .then((cached) => cached || cacheFirst(request, APP_SHELL_URL)),
    )
    return
  }

  event.respondWith(cacheFirst(request))
})
