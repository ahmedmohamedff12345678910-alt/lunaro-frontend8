# Lunaro Premium Digital Agency Website

A static, Arabic-first, RTL-ready agency website built with semantic HTML, CSS and vanilla JavaScript. Includes six complete pages, a searchable/filterable portfolio with exactly 72 concept records, responsive styling, a crescent favicon, SEO metadata, robots.txt, sitemap.xml and an honest client-side contact fallback.

## Run locally

This project uses `fetch()` for the portfolio JSON, so serve it over HTTP rather than opening `index.html` directly.

### Python
```bash
python -m http.server 4173
```
Open `http://localhost:4173`.

### Node.js (optional)
```bash
npx serve .
```

There are no build dependencies. For deployment, upload the project root to a static host such as Vercel or Netlify. If deploying to Vercel, a minimal `vercel.json` can be added if route handling is needed; the current pages use explicit `.html` URLs.

## Included pages

- `index.html` — homepage, services overview, process, featured concepts, FAQ and CTA
- `about.html` — mission, vision, values and process
- `services.html` — six detailed service descriptions
- `portfolio.html` — all 72 project concepts with category filters, search and progressive display
- `contact.html` — validated inquiry form with a `mailto:` fallback; no fake server submission
- `privacy.html` — initial privacy policy draft requiring legal review

## Contact settings

Centralized in `assets/js/config.js`:
- Email: `ahmedmohamedstoer1234@gmail.com`
- WhatsApp: `201041961879`
- Domain: `https://lunaro-software.vercel.app` (provisional; verify the final production domain before launch)
- API base: empty by default

The contact form does **not** send data to a backend. It validates fields and creates a `mailto:` link so the visitor's mail application can be used. To enable reliable form delivery, implement a server-side endpoint and configure its URL in deployment settings; never place mail credentials or API secrets in browser JavaScript.

## Images — important verification limitation

Portfolio image URLs use distinct seeded photographic image URLs from Lorem Picsum. They have **not been downloaded or verified in this environment**, because outbound network/DNS access was unavailable during package creation. The service returns random photography and cannot guarantee that every image matches its project category; do not treat image availability, category relevance, or licensing as verified. Before production launch:

1. Open `portfolio.html` on a network-connected browser and inspect every image.
2. Check each image's original Unsplash source page and license/usage conditions.
3. Replace any unavailable or mismatched image URLs.
4. Prefer downloading optimized, appropriately licensed images into `assets/images/portfolio/` and update the data records to local paths.
5. Run an image/link check after doing so.

The current build does not include 72 downloaded photo files. The images are external seeded URLs, not locally bundled assets. This limitation is explicit rather than claiming those files were checked.

## SEO and production domain

Current canonical URLs, JSON-LD, Open Graph metadata and `sitemap.xml` use the known existing public domain `https://lunaro-software.vercel.app` as a **provisional value**. Confirm the final domain and update `assets/js/config.js`, all canonical/OG/schema URLs in the HTML heads, `robots.txt`, `sitemap.xml`, and the social preview image URL before submitting to Search Console. Do not claim Google indexing or verification until performed.

The current English toggle changes language direction and translates essential shared UI strings, but not every page body and all project descriptions are fully professionally translated. English indexing should remain disabled or be deferred until the English content is completed and dedicated stable English URLs with valid `hreflang` are implemented. No `hreflang` tags are currently emitted.

## Assets

- `assets/icons/favicon.svg` — custom crescent moon favicon
- `assets/icons/apple-touch-icon.svg` — scalable touch icon asset (SVG; generate a PNG touch icon if required by target devices)
- `assets/images/social-preview.svg` — Lunaro social-sharing preview artwork
- `assets/css/styles.css` — design system and responsive layout
- `assets/js/site.js` — shared header/footer, language toggle and motion
- `assets/js/portfolio.js` — project search/filter/pagination behavior
- `assets/js/contact.js` — client-side validation and mailto fallback

## Checks performed during packaging

- Exactly 72 project records generated in `assets/data/projects.json`.
- Six required HTML pages generated.
- Favicon, social preview, robots and sitemap files created.
- Portfolio IDs and data shape checked locally.
- JavaScript syntax and HTML link/image references checked locally where practical.
- Network-based image downloads, live browser rendering, backend API contract checks, Lighthouse, Search Console verification, and actual email delivery could not be verified in this environment.

## Before launch checklist

- [ ] Confirm production domain and HTTPS behavior.
- [ ] Verify and license-check all 72 image sources; preferably self-host optimized images.
- [ ] Complete the English translation and implement separate language URLs if English SEO is required.
- [ ] Connect a server-side contact endpoint if email delivery must be automatic.
- [ ] Generate PNG favicons and a PNG social-sharing image if required by platform previews.
- [ ] Validate JSON-LD, sitemap, canonical URLs and metadata after domain confirmation.
- [ ] Run Lighthouse and test on 320, 375, 768, 1024 and 1440px viewports.
- [ ] Review privacy policy legally and update it for real data flows.
