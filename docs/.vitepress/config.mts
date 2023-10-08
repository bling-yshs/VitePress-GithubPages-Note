import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/VitePress-GithubPages-Note/',
  title: "VPGPN",
  description: "一篇 VitePress 新手笔记",
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
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
          { text: '搭建环境和编写', link: '/vitepress/build-write' },
          { text: '部署到 Github Pages', link: '/vitepress/github-pages' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bling-yshs/VitePress-GithubPages-Note' }
    ],
    search: {
      provider: 'local',
    },
  }
})
