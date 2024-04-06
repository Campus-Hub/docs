import { watchEffect } from 'vue'
import Theme from "vitepress/theme";
import "vitepress-markdown-timeline/dist/theme/index.css";
import { inBrowser, useData } from 'vitepress'
import { EnhanceAppContext } from "vitepress";
// @ts-ignore
import CardFeed from "@/theme/components/CourseFeed.vue";
import { createMediumZoomProvider } from "@/theme/components/composables";

if (inBrowser)
    import('./pwa')

export default {
    ...Theme,
    enhanceApp({app, router}: EnhanceAppContext) {
        app.component('CardFeed', CardFeed)
        createMediumZoomProvider(app, router)
    },
    setup() {
        const { lang } = useData()
        watchEffect(() => {
            if (typeof document !== 'undefined')
                document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`
        })
    },
}