import path from "path"
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import { unocssPlugin, unpluginComponents } from './docs/.vitepress/build'

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [vue(), unpluginComponents, unocssPlugin],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./docs/.vitepress")
        },
    },
    server: {
        fs: {
            allow: ['..'],
        },
    },
})
