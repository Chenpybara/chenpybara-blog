---
author: "chenpybara"
pubDatetime: 2026-06-23T10:00:00+08:00
title: "博客上线：从这里开始"
featured: true
tags: ["博客", "Cloudflare", "Astro"]
description: "第一篇文章，用来记录这个博客的开始，以及之后会写些什么。"
---

这是这个博客的第一篇文章。

我想把这里当成一个长期可维护的小空间：轻量、快速、可搜索，文章就放在仓库里，用 Markdown 写作。它现在基于 Astro 和 AstroPaper 主题搭建，适合部署到 Cloudflare Pages。

## 之后会写

- 技术学习和项目实践
- 工具、自动化和效率经验
- 阅读笔记与日常观察

## 写作方式

新增文章时，只需要在 `src/content/posts/` 目录下创建一个 `.md` 或 `.mdx` 文件，并在顶部写好 frontmatter：

```md
---
pubDatetime: 2026-06-23T10:00:00+08:00
title: "文章标题"
tags: ["标签"]
description: "文章摘要"
---
```

剩下的就是继续写。
