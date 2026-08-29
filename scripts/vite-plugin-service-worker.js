import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, posix, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const TEMPLATE_PATH = resolve(here, 'service-worker.js')
const PUBLIC_DIR = resolve(here, '..', 'public')

// Public files worth having before the first offline launch: the manifest and
// the icon set. Everything else in public/ (mascot art) is large and not on the
// critical path, so the worker's runtime cache picks it up on first use instead.
const PRECACHE_PUBLIC_DIRS = ['icons']
const PRECACHE_PUBLIC_FILES = ['manifest.webmanifest']

async function publicFilesToPrecache() {
  const files = [...PRECACHE_PUBLIC_FILES]
  for (const dir of PRECACHE_PUBLIC_DIRS) {
    const entries = await readdir(resolve(PUBLIC_DIR, dir), { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile()) files.push(posix.join(dir, entry.name))
    }
  }
  return files.map((file) => `/${file}`)
}

/**
 * Emits `dist/sw.js` from `scripts/service-worker.js`, with the build's hashed
 * asset list precached and a cache name derived from that list — so every build
 * that changes any asset gets a fresh cache, and the old one is dropped on
 * activate. Build-only: in dev the app runs without a service worker.
 */
export function serviceWorkerPlugin() {
  return {
    name: 'kana-quest-service-worker',
    apply: 'build',
    async generateBundle(_options, bundle) {
      const bundled = Object.keys(bundle)
        // Source maps aren't worth cache space, and every browser with a
        // service worker reads woff2 — the woff twins never get requested.
        .filter((fileName) => !fileName.endsWith('.map') && !fileName.endsWith('.woff'))
        .map((fileName) => `/${fileName}`)
      // The app shell isn't listed here — the worker caches `/` itself on
      // install (see precacheShell in scripts/service-worker.js).
      const precache = [...new Set([...bundled, ...(await publicFilesToPrecache())])].sort()
      const version = createHash('sha256').update(precache.join('\n')).digest('hex').slice(0, 12)

      const source = readFileSync(TEMPLATE_PATH, 'utf8')
        .replace('__CACHE_NAME__', `kana-quest-${version}`)
        .replace('__PRECACHE__', JSON.stringify(precache, null, 2))

      this.emitFile({ type: 'asset', fileName: 'sw.js', source })
    },
  }
}
