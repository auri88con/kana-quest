// Rasterises public/icons/icon.svg into the PNG icon set the manifest points at.
// One-off tool — the generated PNGs are committed, so this only needs re-running
// when the icon artwork changes.
//
//   npm i -D playwright && node scripts/generate-icons.mjs
//
// (Chromium is used purely as the renderer: it gives us the same rounded-square
// gradient + kana glyph as the SVG favicon, at every size a PWA install asks for.)
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const svg = await readFile(resolve(root, 'public/icons/icon.svg'), 'utf8')
const svgUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`

// `inset` leaves room for the circular safe zone Android crops maskable icons to.
const TARGETS = [
  { file: 'icon-192.png', size: 192, inset: 0 },
  { file: 'icon-512.png', size: 512, inset: 0 },
  { file: 'icon-maskable-192.png', size: 192, inset: 0.14 },
  { file: 'icon-maskable-512.png', size: 512, inset: 0.14 },
  { file: 'apple-touch-icon.png', size: 180, inset: 0.06 },
]

const browser = await chromium.launch()
const page = await browser.newPage()

for (const { file, size, inset } of TARGETS) {
  const art = Math.round(size * (1 - inset * 2))
  await page.setViewportSize({ width: size, height: size })
  await page.setContent(`<!doctype html><style>
    html,body{margin:0;padding:0;width:${size}px;height:${size}px;overflow:hidden}
    body{display:grid;place-items:center;background:linear-gradient(135deg,#ff8fae 0%,#e8567f 55%,#4a4fcf 100%)}
    img{width:${art}px;height:${art}px;display:block}
  </style><img src="${svgUrl}">`)
  await page.waitForLoadState('networkidle')
  const buffer = await page.screenshot({ type: 'png' })
  await writeFile(resolve(root, 'public/icons', file), buffer)
  console.log(`wrote public/icons/${file} (${size}×${size})`)
}

await browser.close()
