/** basic site info */
export const name = 'CampusHub-Online'
export const site = 'https://campushub.online'
export const siteCN = 'https://campushub.online/zh/'
export const logo = 'https://campushub.online/images/logo.png'
export const keywords = 'online learning, e-learning, course resource, mooc'
export const descriptionEN
    = 'Campus-hub online open-resource project is dedicated to providing open source course services for a wide range of users, aiming to create an open and inclusive learning platform.'
export const descriptionCN
    = 'Campus-hub online 开源项目致力于为广大用户提供开源课程服务，旨在打造一个开放、包容的学习平台。'

/** social links */
export const ogTitle = 'Campus-hub online | E-Learning Platform'
export const ogImg = 'https://campushub.online/images/og.png'
export const ogImgCN = 'https://campushub.online/images/og-zh.png'
export const github = 'https://github.com/Campus-Hub/web'
// export const npm = 'https://www.npmjs.com/package/Campus-Hub'
// export const twitter = 'https://twitter.com/Anxiu0101'

/** package info */
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
export const { version } = require('campushub.online/package.json')

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
