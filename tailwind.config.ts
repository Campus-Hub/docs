/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
    './docs/.vitepress/dist/index.html',
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './docs/.vitepress/**/*.js',
      './docs/.vitepress/**/*.vue',
      './docs/.vitepress/**/*.ts',
    ],
    options: {
      safelist: ['html', 'body'],
    },
  },
}
