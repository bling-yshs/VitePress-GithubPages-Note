# VitePress-GithubPages-Note

VitePress-GithubPages-Note，搭建 VitePress 并部署到 Github Pages 的新手踩坑笔记
> 教程所用版本 `1.0.0-rc.20`

## 前言

这节课太无聊了，逃回宿舍整点好玩的。本来想搭建 VuePress 的，结果发现 VuePress 出了 v2 版本，然后看了看它的仓库，居然更推荐 VitePress，索性就部署 VitePress 得了，VitePress 使用 Vue3，正好 Vue3 我也更熟悉

## 搭建

### 查阅官方文档

英文文档

```bash
https://vitepress.dev/guide/getting-started
```

> 中文文档 =>=>=> 居然没有？？？我靠作为一个国人项目居然没有官方中文文档，实在是令我震惊，算了用翻译软件凑活下吧

### 在线预览

官方有一个 [在线预览](https://vitepress.new/) 的地址，我先看一眼

> 这个地址居然对浏览器版本有要求，我用 102 的内核居然会崩溃

试了一下暗色模式切换很丝滑，就是内置的条目只有一条，这演示个啥呀，鉴定为不会写演示的

不管了还是自己上手试一下吧

### 环境

Node18+

### 安装

创建文件夹

```bash
mkdir vitepress-test
```

进入

```bash
cd vitepress-test
```

安装 vitepress

```bash
pnpm add -D vitepress
```

运行初始化程序

```bash
pnpm dlx vitepress init
```

> `Where should VitePress initialize the config?`

这，直接当前目录把，他默认也是 `./`

> `Site title:`

网站标题，就这篇笔记吧，那就 VitePress-Note

> `Site description:`

感觉不重要，直接随便写点吧 A VitePress Note By Yshs

>  ```bash
>  Theme:
>  ● Default Theme (Out of the box, good-looking docs)
>  ○ Default Theme + Customization
>  ○ Custom Theme
> ```

主题的话，就默认推荐的吧

> `Use TypeScript for config and theme files?`

TypeScript，那肯定要加上
