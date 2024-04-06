import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
    '/course/LinearAlgebra_ZJU/': [
        {
            text: 'Linear Algebra',
            collapsed: false,
            items: [
                { text: 'Chapter 1', link: 'Ch1' },
                { text: 'Chapter 2', link: 'Ch2' },
                { text: 'Chapter 3', link: 'Ch3' },
            ]
        },
    ],
    '/course/LinearAlgebra_MIT/': [
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
    ],
}
export default sidebar