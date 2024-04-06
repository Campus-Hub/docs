import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionEN, ogImgCN, siteCN } from '@/meta'
import nav from "@/config/navbar/en";
import sidebar from "@/config/sidebar/en";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: descriptionEN,

    themeConfig: {
        nav,
        sidebar,
        docFooter: {
            prev: 'Last Page',
            next: 'Next Page',
        },
        returnToTopLabel: 'Return Top',
        outlineTitle: 'Navigation',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Archive',
        lastUpdatedText: 'Update at',
        editLink: {
            // pattern: `${github}/edit/main/docs/en/:path`,
            pattern: 'https://github.com/Campus-Hub/web/edit/main/docs/:path',
            text: 'Edit this page at Github',
        },
        // algolia: {
        //     appId: 'QC8EFXZNC3',
        //     apiKey: 'bf9a47e8561e6b8ffdda0bf8595a2f5d',
        //     indexName: 'campushub',
        //     placeholder: 'Search Document',
        //     translations: {
        //         button: {
        //             buttonText: 'Search Document',
        //         },
        //     },
        //     searchParameters: {
        //         facetFilters: ['lang:en-US'],
        //     },
        // },
        search: {
            provider: 'local',
            options: {
                locales: {
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
        footer: {
            message: 'Released under the <a herf="https://github.com/">CC BY-NC-SA 4.0</a> / <a c-orange-5 href="https://github.com/Campus-Hub/web/blob/main/LICENSE">MIT License</a>.\n',
            copyright: 'Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/Campus-Hub">CampusHub Online Contributors.</a>'

        },
    },

    head: [
        // ['meta', { name: 'twitter:description', content: descriptionEN }],
        // ['meta', { name: 'twitter:image', content: ogImgCN }],
        ['meta', { property: 'og:description', content: descriptionEN }],
        ['meta', { property: 'og:url', content: siteCN }],
        ['meta', { property: 'og:locale', content: 'zh_CN' }],
        ['meta', { property: 'og:image', content: ogImgCN }],
    ],
}