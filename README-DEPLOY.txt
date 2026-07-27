SHARKBAIT WEBSITE - DEPLOYMENT PACKAGE
======================================

This folder contains the production build of the Sharkbait Website Design & Marketing landing page.

Contents
--------
- dist/client/   : Static site files (HTML, CSS, JS, images). Upload this to any static host.
- dist/server/   : Serverless SSR worker files for TanStack Start / Cloudflare Workers.

Quick Static Deploy
-------------------
1. Upload the contents of dist/client/ to your web host (Netlify, Vercel, Cloudflare Pages, AWS S3, etc.).
2. The homepage is index.html.
3. All assets are hashed and ready for caching.

Full SSR / Edge Deploy
----------------------
For the server-rendered version, deploy dist/server/ as a Cloudflare Worker or use the TanStack Start / Nitro deployment flow.

No build tools are needed on the server for the static deploy.
