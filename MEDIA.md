# Local Images Without R2

Use this folder for images that should be shipped with the site:

```text
client/public/media/
```

Recommended workflow:

1. Copy image files into `client/public/media/`.
2. Use lowercase ASCII filenames, for example:

```text
client/public/media/video-cover-001.jpg
client/public/media/channel-notes-2026-06.png
```

3. Commit and push the files to GitHub.
4. GitHub Actions will rebuild and deploy the site.
5. Use the public image path in Rin posts:

```md
![Video cover](/media/video-cover-001.jpg)
```

Rin can use the first image in a post as the post cover in listings.

This approach is best for blog images, thumbnails, screenshots, and small
static assets. Use embedded players for videos from YouTube, Bilibili, Vimeo,
or similar platforms. Add Cloudflare R2 later only if you want to upload media
directly from the editor or host large files.
