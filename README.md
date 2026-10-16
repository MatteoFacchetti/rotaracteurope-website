# Rotaract Europe website

Working copy of [rotaracteurope.eu](https://rotaracteurope.eu/) for the IT committee. The domain still serves WordPress. This repository is the draft that can replace it.

A page is a file under `src/pages`. Shared facts (board, countries, news) live in `src/data/content.ts`. Change the file, open a pull request, and the site rebuilds.

## Preview locally

```bash
npm install
npm run dev
```

## GitHub account

Publish this from **MatteoFacchetti**, not from matfac-lux. `github.com/rotaracteurope` is a user with no repositories, so this login cannot create the official remote yet. GitHub Pages on this preview will be:

https://matteofacchetti.github.io/rotaracteurope-website/

The pages send `noindex` until the domain cutover.

## Pointing rotaracteurope.eu here, later

1. Remove the `noindex` tag in `src/layouts/Base.astro`.
2. In `astro.config.mjs`, set `site` to `https://rotaracteurope.eu` and `base` to `/`.
3. Add a `CNAME` file containing `rotaracteurope.eu`.
4. In GitHub Pages, set the custom domain.
5. At the DNS host, point the apex at GitHub Pages and wait for the certificate.

Do that only when cookie consent, the contact address, and the conference links are accepted by the board. Ticket sales can stay on the host websites.
