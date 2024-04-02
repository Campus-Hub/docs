import {DefaultTheme, defineConfig} from 'vitepress';
import timeline from 'vitepress-markdown-timeline';
// FIXME yarn add markdown-it-wikilinks failed since Make Command.
// import wikilinks from 'markdown-it-wikilinks'
// import { alertPlugin } from "markdown-it-github-alert";
// import markdownItAnchor from 'markdown-it-anchor'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({

    title: 'CampusHub-Online',
    // allows customizing each page's title suffix or the entire title.
    titleTemplate: ':title on CampusHub',
    // description for the site. This will render as a `<meta>` tag in the page HTML.
    description: 'Online education resources sharing and management with MLOps, build by vite-press.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: '/dist/style.css'}]
    ],


    base: '/web/',
    // srcDir: '/post/',
    assetsDir: './static',

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        siteTitle: "Campus Hub Online",
        // logo: "",
        // set navigation in navbar.
        nav: nav(),
        socialLinks: [
            { icon: "github", link: "https://github.com/Campus-Hub/web" },
            {
                icon: {
                    svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z\"/></svg>`
                },
                link: "mailto://anxiu.fyc@foxmail.com"
            }
        ],
        // TODO 异步调用后端检查可用课程列表进行配置。
        sidebar: {
            '/course/LinearAlgebra_ZJU/': { base: '/course/LinearAlgebra_ZJU/', items: sidebarLinearAlgebraZJU() },
            '/course/LinearAlgebra_MIT/': { base: '/course/LinearAlgebra_MIT/', items: sidebarLinearAlgebraMIT() },
        },
        // Search Config in Vitepress
        // https://vitepress.dev/reference/default-theme-search
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    },
                    en: {
                        translations: {
                            button: {
                                buttonText: 'Search Document',
                                buttonAriaLabel: 'Search Document'
                            },
                            modal: {
                                noResultsText: 'Cannot find relative content',
                                resetButtonTitle: 'Remove query conditions',
                                footer: {
                                    selectText: 'Select',
                                    navigateText: 'Switch'
                                }
                            }
                        }
                    }
                }
            }
        },
        editLink: {
            pattern: 'https://github.com/Campus-Hub/web/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面',
        },
        // docFooter: { prev: '上一篇', next: '下一篇' },
        footer: {
            message: 'Released under the <a herf="https://github.com/">CC BY-NC-SA 4.0</a> / <a href="https://github.com/Campus-Hub/web/blob/main/LICENSE">MIT License</a>.\n',
            copyright: 'Copyright © 2023 <a href="https://github.com/Campus-Hub">CampusHub Online Contributors.</a>'
        },
    },

    markdown: {
        // options for markdown-it-anchor
        // anchor: { permalink: false },
        // options for markdown-it-anchor
        // https://github.com/valeriangalliat/markdown-it-anchor#usage
        // FIXME 以下可能存在一个导致标题内容渲染错误为空的问题
        // anchor: {
        //     // permalink: markdownItAnchor.permalink.headerLink()
        //     // https://github.com/vuejs/vitepress/issues/1927
        //     // customize how anchors are generated
        //     // slugify: str => encodeURIComponent(str)
        // },

        // options for markdown-it-toc
        // options for @mdit-vue/plugin-toc
        // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
        toc: { level: [1, 2] },

        // code block settings.
        // add line numbers for each line of code.
        lineNumbers: true,

        // math equations support.
        // base on markdown-it-mathjax3.
        math: true,

        image: {
            // image lazy loading is disabled by default
            lazyLoading: true
        },

        container: {
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          infoLabel: '信息',
          detailsLabel: '详情',
        },

        config: (md) => {
            // https://github.com/HanochMa/vitepress-markdown-timeline
            // https://www.npmjs.com/package/vitepress-markdown-timeline
            md.use(timeline);
            // https://github.com/ByPikod/markdown-it-github-alert
            // https://www.npmjs.com/package/markdown-it-github-alert
            // md.use(alertPlugin);
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Course",
            link: '/course/',
            activeMatch: '/course',
        },
        {
            text: "About us",
            items: [
                {
                    text: 'Team Member',
                    // TODO: set the Team Member link
                    link: '/about/team-member',
                },
                {
                    text: 'Changelog',
                    link: '/about/changelog',
                },
                {
                    text: 'FAQ',
                    link: '/about/faq',
                }
            ],
        },

    ]
}

function sidebarLinearAlgebraZJU(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Linear Algebra',
            collapsed: false,
            items: [
                { text: 'Chapter 1', link: 'Ch1' },
                { text: 'Chapter 2', link: 'Ch2' },
                { text: 'Chapter 3', link: 'Ch3' },
            ]
        },
        // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
    ]
}

function sidebarLinearAlgebraMIT(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Syllabus',
            collapsed: false,
            items: [
                // { text: 'Introduction', link: 'index' },
                { text: 'Instructor Insights', link: 'InstructorInsights' },
            ],
        },
        {
            text: 'Unit I',
            collapsed: false,
            items: [
                { text: 'Unit I', link: 'unit1/index' },
                { text: 'Session I-1', link: 'unit1/session1-1' },
            ],
        },
        // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
    ]
}
