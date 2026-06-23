# chenpybara Blog

chenpybara 的个人博客，基于 [AstroPaper](https://github.com/satnaing/astro-paper) 开源主题搭建，适合部署到 Cloudflare Pages。

## 开发

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

## 构建

```bash
corepack pnpm build
```

构建产物在 `dist/`。

## 写文章

文章放在 `src/content/posts/`，支持 Markdown 和 MDX。示例 frontmatter：

```md
---
pubDatetime: 2026-06-23T10:00:00+08:00
title: "文章标题"
tags: ["标签"]
description: "文章摘要"
---
```

## Cloudflare Pages

在 Cloudflare Pages 连接 GitHub 仓库后，使用以下配置：

- Framework preset: `Astro`
- Build command: `corepack pnpm build`
- Build output directory: `dist`
- Node.js version: `24`

如果使用默认项目名，站点地址可以是 `https://chenpybara-blog.pages.dev/`。绑定自定义域名后，记得同步修改 `astro-paper.config.ts` 里的 `site.url`。

## 来源与许可证

本项目基于 MIT 许可证的 AstroPaper 主题定制。原项目许可证保留在 `LICENSE`。
