// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { enConfig } from "@/config/en";
import { zhConfig } from "@/config/zh";
import { shareConfig } from "@/config/share";
// import { pwa } from "../build/plugins/pwa"

export default withPwa(defineConfig({
    ...shareConfig,
    locales: {
        root: {label: 'English', lang: 'en-US', ...enConfig},
        zh: {label: '简体中文', lang: 'zh-CN', ...zhConfig}
    },
    pwa: {}
}))