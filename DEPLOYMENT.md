# Deploy chenpybara Rin Blog on Cloudflare

This repository uses the open-source [Rin](https://github.com/openRin/Rin) project.
It deploys a dynamic blog to Cloudflare using Workers, static assets, D1, Queues,
Workers AI, and optional R2/S3-compatible storage.

## Defaults in this repo

The GitHub Actions workflow already defaults to:

```text
Site name: chenpybara Video Notes
Worker name: chenpybara-rin-server
D1 database: chenpybara_rin
Cache storage mode: database
```

`database` cache mode is the easiest free-tier setup for a video-curation blog
that mainly embeds videos from other platforms. You can add R2 later if you
want to upload and host your own media files.

## Required GitHub secrets

Open:

`GitHub repo -> Settings -> Secrets and variables -> Actions -> New repository secret`

Add these secrets:

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
ADMIN_USERNAME
ADMIN_PASSWORD
JWT_SECRET
```

Use a strong admin password and a long random `JWT_SECRET`.

## Cloudflare API token permissions

Create a custom Cloudflare API token for the same account as
`CLOUDFLARE_ACCOUNT_ID`.

The token needs edit access for the Cloudflare resources Rin creates and
updates, including Workers, D1, Queues, and Workers AI. If you later enable R2
uploads, add R2 edit access too.

## Optional GitHub variables

Open:

`GitHub repo -> Settings -> Secrets and variables -> Actions -> Variables`

You can override these, but you do not have to:

```text
NAME = chenpybara Video Notes
DESCRIPTION = A dynamic video-first blog by chenpybara, powered by Rin and Cloudflare.
WORKER_NAME = chenpybara-rin-server
DB_NAME = chenpybara_rin
CACHE_STORAGE_MODE = database
RSS_ENABLE = true
PAGE_SIZE = 6
```

## Deploy

1. Open the repo on GitHub.
2. Go to `Actions`.
3. Choose `Build`.
4. Run the workflow on `main`.
5. After Build succeeds, the `Deploy` workflow should run automatically.

You can also open `Actions -> Deploy` and run it manually if needed.

## After deploy

The deploy log prints the app URL. Open it, then go to the admin area and log
in with `ADMIN_USERNAME` and `ADMIN_PASSWORD`.

For video posts, use Rin's editor to write notes and embed videos from YouTube,
Vimeo, Bilibili, or any platform that gives you an embed URL.

## Optional R2 media hosting

If you later want Rin to host uploaded images, audio, or video files directly on
Cloudflare R2, create an R2 bucket and set these GitHub variables/secrets:

```text
R2_BUCKET_NAME
S3_ACCESS_KEY_ID
S3_SECRET_ACCESS_KEY
```

Then set:

```text
CACHE_STORAGE_MODE = s3
```
