import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

const isCI = process.env.CI === 'true' || process.env.NETLIFY === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Pre-rendering requires Puppeteer/Chrome — only available locally, not on Netlify CI
    ...(!isCI ? [prerender({
      routes: [
        '/',
        '/audit/what-we-built',
        '/audit/report',
        '/audit/threat-model',
        '/verification',
        '/about',
        '/license',
        '/learn/constitutional-ai',
        '/evidence/openclaw-governance',
        '/evidence/architectural-review',
        '/evidence/thesis-documents',
      ],
      renderer: new PuppeteerRenderer({
        renderAfterTime: 2000,
        headless: true,
      }),
      rendererOptions: {
        maxConcurrentRoutes: 1,
      },
    })] : []),
  ],
})
