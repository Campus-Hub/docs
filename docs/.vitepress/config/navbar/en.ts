import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
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
export default nav