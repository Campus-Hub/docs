// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

export default withPwa(defineConfig({
    /* your VitePress options */
    /* Vite PWA Options */
    pwa: {}
}))