# Stray Dog Media — Content & Redesign Brief

Working document for the site build. Positioning was **repositioned** (2026-07-29)
from a general "video / photo / web design" agency to a focused **video & livestream
studio for the Haut-Saint-Laurent**, built as the **twin of strAI.ca**.

---

## 1. Positioning (current)

**Repositioned again 2026-07-31 (v0.4).** From "video & livestream studio for hire" to
**the video record of the Haut-Saint-Laurent** — an ongoing, publicly free archive of
community life, with the YouTube channel as the product and commercial work downstream.

- **What:** the authoritative video record of community life in the Haut-Saint-Laurent.
- **Why the change:** much of Stray's work is pro-bono. Framing the site as a services
  brochure undersold the real asset — the archive — and made "hire us" the only way in.
- **The ask changed:** primary CTA is now *invite us to your event*, not *talk about
  your project*. Municipalities and organizers should feel they can ask before they
  worry about budget. Pricing and packages live on `services.html` only.
- **Channel:** `@StrayDogMedia_ca` · channel_id `UCiURtAT2FjCeqf2WbwkcJSA`.
- **For:** event organizers · municipalities · OBNL · clubs · local businesses.
- **Tagline:** Capture. Create. Connect. / "Live and unleashed." (channel voice).
- **Twin:** strAI.ca — same team/region, cross-linked both ways.
- **Bilingual:** FR default, EN toggle. Every string needs a `data-fr`/`data-en` pair.
- **Contact on file:** straydogmedia.ca@gmail.com · 514-618-6185.

### YouTube integration (how it stays current)

YouTube's channel RSS feed sends **no CORS header**, so the browser cannot read it.
`.github/workflows/youtube-latest.yml` runs daily (and on demand), fetches the feed
server-side via `.github/scripts/fetch_youtube.py`, and commits
`assets/data/latest-videos.json`. The page reads that file same-origin. No API key,
no third-party service. If the fetch fails the script exits without writing, so a
stale list can never be replaced by an empty one.

## 2. Content still to finalize ⚠️

The current live site is a no-code SPA whose copy couldn't be auto-scraped. New copy
was **written fresh** for the reposition; confirm/adjust the following:

- [ ] Approve the new French + English copy on all pages (Stray's voice check).
- [ ] **Portfolio (`work.html`):** real projects — embedded YouTube/Vimeo, thumbnails, titles, client, category.
- [ ] Any **pricing / packages** to publish, or keep quote-only?
- [ ] Confirm **service list** (add drone? photography as its own line? podcast/multicam studio?).
- [ ] **Testimonials / client logos** (municipalities, businesses, OBNL).
- [ ] Confirm **coverage area** wording ("Haut-Saint-Laurent" + which nearby areas).
- [ ] High-res **logo source** (SVG/AI) + brand photo/video library for hero + cards.
- [ ] Dedicated email? (e.g. `hello@straydogmedia.ca`) vs the current gmail.

## 3. Contact method — recommendation ✅

**Recommended: a Formspree "project inquiry" form** (implemented on `contact.html`),
plus direct phone + email. Why:

- **Twin-consistent** — strAI.ca already uses Formspree; same no-backend, spam-filtered pattern.
- **Qualifies leads** — captures org type, service, and **event date** (critical for livestream
  scheduling) so you can quote fast without a back-and-forth.
- **Low friction / free tier**, works on static GitHub Pages, AJAX success state built in.

**Done:** SDM Formspree form wired in `contact.html` (`f/xqerjgop`, its own project,
submissions → straydogmedia.ca@gmail.com). Separate from strAI's `mjgpqgkz`.
*Note: Formspree's free tier is 50 submissions/mo — upgrade if volume grows.*

*Optional add-on:* a "book a discovery call" link (Calendly/Google Appointments) next to the
form for higher-intent municipal/business leads. Say the word and I'll wire it in.

## 4. Design decisions

**v0.3 — "refined but dangerous" (2026-07-31).** Realigned to the YouTube brand art:
black canvas, red bite, the dog mascot. See `design-system.html`. Not locked — this is
the pass to react to before Design formalizes it.

- Palette: Film Black `#0A0909`, Blood Red `#D72229`, Dried Blood `#7E0F14`,
  Hot Red `#F04148` (red-as-text on black), Bone `#F4F1EC`. Warm charcoal ramp, never blue-grey.
- Type: **Archivo** variable (display, caps, wght 800 / wdth 88%) · Inter (body) · Space Mono (kickers/meta).
- Shape: near-square radii (1–4px). Pills survive on chips and toggles only.
- Texture: fixed film-grain layer + vignette over every page; red bloom in the hero.
- Signature moves: `.slab` (word knifed out on red) · `.spec-row` (four-up capability strip)
  · `.band-red` (the closing bark) · `.stage` (forces film black in both themes).
- Dark is the CSS default, not a JS afterthought. Light theme = bone paper, black masthead.
- Sibling of strAI: shared class conventions, bilingual + theme toggles, GSAP reveals, cross-links.
  Red now sits opposite strAI's cyan — the pair reads as a deliberate set.
- Hosting target: static GitHub Pages, custom domain via `CNAME`.

**Blocked on assets** (site codes around them gracefully in the meantime):

- [ ] `assets/brand/mascot-dog.png` — transparent-background dog cutout. Drives the hero;
      it removes itself if absent, so the hero right side is empty until it lands.
- [ ] `assets/brand/logo-*.png` — the nav/footer mark is still the old monochrome camera-paw.
- [ ] `og:image` — the YouTube banner art, cropped 1200×630, for link previews.
- [ ] **Real figures for the `.stat-strip`** — events documented, hours streamed, years
      active, communities covered. The component is built and demoed in
      `design-system.html`, but it is **commented out of `index.html`** so no invented
      number ships. One message from Stray puts it live.
- [ ] Confirm the archive categories and whether YouTube playlists exist to link each to.

## 5. Next steps

1. Stray reviews all pages + copy → approve / adjust.
2. Create Formspree endpoint; add portfolio content.
3. Create GitHub remote + enable Pages.
4. DNS cutover off the current builder to GitHub Pages.
