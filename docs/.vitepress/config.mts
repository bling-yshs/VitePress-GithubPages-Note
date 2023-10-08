import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/VitePress-GithubPages-Note/',
  title: "VPGPN",
  description: "一篇 VitePress 新手笔记",
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  head: [['link', { rel: 'icon', href: '/VitePress-GithubPages-Note/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'VitePress', link: '/vitepress' }
    ],
    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '介绍', link: '/introduce/introduce' },
        ]
      },
      {
        text: 'VitePress',
        collapsed: false,
        items: [
          { text: '搭建和编写', link: '/vitepress/build-write' },
          { text: '部署到 Github Pages', link: '/vitepress/github-pages' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bling-yshs/VitePress-GithubPages-Note' },
      {
        icon: {
          svg: '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg id="ic_pc_zhuzhan" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path fill="#24b8f2" d="M210.41 8.42 q14.03 -8.42 29.46 -8.42 q15.43 0 29.46 8.42 q18.23 9.82 36.47 29.45 l143.08 131.86 l102.4 0 l143.08 -131.86 q18.23 -19.63 36.47 -29.45 q26.65 -4.21 43.49 -3.51 q16.83 0.7 33.66 9.12 q28.05 18.23 36.47 54.7 q0 28.06 -18.24 47.7 l-47.69 47.69 l89.78 0 q63.12 1.4 108.01 47.69 q22.44 22.45 35.07 50.5 q12.63 28.06 12.63 63.13 l0 430.64 q0 18.23 -0.7 33.66 q-0.7 15.43 -4.91 32.27 q-9.82 32.26 -27.35 61.01 q-17.54 28.75 -45.59 47 q-16.84 12.62 -38.58 18.23 q-21.74 5.61 -44.19 5.61 l-670.5 0 q-18.24 0 -33.67 -0.7 q-15.43 -0.7 -32.26 -4.91 q-32.27 -8.41 -58.22 -27.35 q-25.95 -18.94 -44.18 -51.2 q-12.63 -18.24 -18.24 -39.28 q-5.61 -21.04 -5.61 -43.48 l0 -490.96 q11.22 -56.11 50.5 -93.29 q39.28 -37.17 93.98 -38.57 l95.39 0 q-8.42 -5.61 -18.24 -16.13 q-9.82 -10.52 -23.84 -20.34 q-12.63 -12.63 -18.24 -27.36 q-5.61 -14.72 -5.61 -31.56 q4.21 -18.23 13.32 -34.36 q9.12 -16.13 23.15 -25.95 ZM197.79 301.59 q-43.49 8.42 -60.32 53.3 l0 389.96 q1.4 26.66 13.33 47.7 q11.92 21.04 35.76 29.46 q8.42 4.2 14.74 5.61 q6.31 1.4 14.72 0 l591.96 0 q22.44 0 40.67 -11.23 q18.24 -11.23 32.26 -29.45 q4.21 -14.03 4.91 -24.55 q0.7 -10.52 0.7 -24.55 l0 -364.71 q-11.22 -35.07 -47.69 -53.31 q-9.82 -12.62 -22.45 -15.43 q-12.63 -2.81 -25.25 -2.81 l-593.36 0 ZM311.41 420.82 q26.65 0 54.71 18.24 q12.62 9.82 18.23 25.95 q5.61 16.13 5.61 34.37 l0 77.15 q0 29.45 -18.23 47.69 q-14.03 14.03 -30.87 22.44 q-16.84 8.42 -35.07 7.72 q-18.23 -0.7 -34.36 -11.22 q-16.13 -10.52 -25.95 -24.55 q-9.82 -26.65 -11.22 -53.31 l0 -78.55 q8.41 -26.65 27.35 -43.49 q18.94 -16.83 49.8 -22.44 ZM701.37 420.82 q14.03 0 28.75 4.91 q14.73 4.91 24.54 13.33 q12.63 9.82 18.24 25.25 q5.61 15.43 5.61 29.45 l0 77.16 q0 14.02 -1.4 27.35 q-1.4 13.32 -11.22 25.95 q-8.42 18.23 -24.55 27.35 q-16.13 9.12 -34.37 9.12 q-18.24 0 -34.37 -9.12 q-16.13 -9.12 -25.96 -27.35 q-8.41 -12.63 -10.51 -25.95 q-2.11 -13.33 -0.7 -27.35 l0 -77.16 q0 -28.05 18.94 -47.69 q18.94 -19.64 46.99 -25.25 Z"/></svg>'
        },
        link: 'https://space.bilibili.com/54987969'
      }
    ],
    search: {
      provider: 'local',
    },
  }
})
