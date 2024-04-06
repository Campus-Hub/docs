import { defineConfig } from 'vitepress'
// import { generateSitemap } from '../build'
import { keywords, name } from '@/meta'
import { ImagePlugin, useCodeGroup, useCodeGroupItem } from '@/theme/components/markdown'
import { fileURLToPath } from "url";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";
import { unocssPlugin, unpluginComponents } from "@/build";
export const shareConfig = defineConfig({
    title: name,
    titleTemplate: ':title on CampusHub',

    base: '/web/',
    // srcDir: '/post/',
    assetsDir: './static',

    themeConfig: {
        siteTitle: name,
        // logo: {
        //     src: '/images/logo.png',
        //     alt: 'cz-git-logo',
        // },
        socialLinks: [
            { icon: "github", link: "https://github.com/Campus-Hub/web" },
            {
                icon: {
                    svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z\"/></svg>`
                },
                link: "mailto://anxiu.fyc@foxmail.com"
            }
        ],
    },

    lastUpdated: true,
    cleanUrls: true,
    // useWebFonts: false,
    appearance: 'dark',
    // buildEnd: async (siteConfig) => {
    //     await generateSitemap(siteConfig)
    // },

    markdown: {
        // code block settings.
        // add line numbers for each line of code.
        lineNumbers: process.env.NODE_ENV === 'development',
        // shiki code theme
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
        // options for markdown-it-toc
        // options for @mdit-vue/plugin-toc
        // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
        toc: { level: [1, 2] },

        // math equations support.
        // base on markdown-it-mathjax3.
        math: true,

        image: {
            // image lazy loading is disabled by default
            lazyLoading: true
        },

        container: {
            tipLabel: 'Tip',
            warningLabel: 'Warn',
            dangerLabel: 'Dangerous',
            infoLabel: 'Info',
            detailsLabel: 'Detail',
        },

        config: (md) => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
            md.use(require('markdown-it-mark'))
            md.use(useCodeGroup.container, useCodeGroup.type, { render: useCodeGroup.render })
            md.use(useCodeGroupItem.container, useCodeGroupItem.type, {
                render: useCodeGroupItem.render,
            })
            md.use(ImagePlugin)
        },
    },

    head: [
        // ['meta', { name: 'msvalidate.01', content: '365F08C27D779FB827D898B0C42683C7' }],
        ['meta', { name: 'keywords', content: keywords }],
        ['meta', { name: 'author', content: 'Zhengqbbb' }],
        // ['meta', { name: 'twitter:title', content: ogTitle }],
        // ['meta', { name: 'twitter:creator', content: '@zhengqbbb' }],
        // ['meta', { name: 'twitter:site', content: '@zhengqbbb' }],
        // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        // ['meta', { property: 'og:type', content: 'article' }],
        // ['meta', { name: 'application-name', content: name }],
        // ['meta', { name: 'apple-mobile-web-app-title', content: name }],
        // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

        ['link', { rel: 'stylesheet', href: '/dist/style.css'}],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        // ['link', { rel: 'mask-icon', href: '/images/safari-pinned-tab.svg', color: '#dd6954' }],
        // ['meta', { name: 'theme-color', content: '#dd6954' }],

        // To IPhone icon: https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/
        // ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-120x120.png' }],

        // // webfont
        // ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
        // ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
        // ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
        // ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
        // // page analytics
        // ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
    ],

    vite: {
        css: {
            postcss: {
                plugins: [tailwind(), autoprefixer()],
            },
        },
        plugins: [vue(), unpluginComponents, unocssPlugin],
        resolve: {
            alias: [
                { find: '@', replacement: fileURLToPath(new URL('D:\\Project\\campus-hub\\campus-hub-vitepress\\docs\\.vitepress', import.meta.url))}
            ],
            // "@": path.resolve(__dirname, "./docs/.vitepress")
        },
        server: {
            fs: {
                allow: ['..'],
            },
        },
    }
})