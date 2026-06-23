# chenpybara Video Notes

A video-first personal blog built with [AstroPaper](https://github.com/satnaing/astro-paper). It is designed for curated embeds, watch notes, creator discoveries, and short video essays.

## Development

```bash
corepack pnpm install
corepack pnpm dev
```

## Build

```bash
corepack pnpm build
```

The production output is generated in `dist/`.

## Writing Video Posts

Posts live in `src/content/posts/` and can be Markdown or MDX.

Use this frontmatter pattern:

```md
---
pubDatetime: 2026-06-23T10:00:00+08:00
title: "Video title or essay title"
featured: true
tags: ["video", "curation"]
description: "A one sentence summary for cards, RSS, and SEO."
---
```

For embeds, wrap iframes in `.video-embed`:

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video title"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>
```

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with:

- Framework preset: `Astro`
- Build command: `corepack pnpm build`
- Build output directory: `dist`
- Root directory: leave empty
- Node.js version: `24`

If the Pages project uses the default name, the site URL can be `https://chenpybara-blog.pages.dev/`. If you bind a custom domain later, update `site.url` in `astro-paper.config.ts`.

## License

This site is customized from the MIT licensed AstroPaper theme. The original license is kept in `LICENSE`.
