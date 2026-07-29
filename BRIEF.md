# Stray Dog Media — Content & Redesign Brief

Working document for the site build. Positioning was **repositioned** (2026-07-29)
from a general "video / photo / web design" agency to a focused **video & livestream
studio for the Haut-Saint-Laurent**, built as the **twin of strAI.ca**.

---

## 1. Positioning (current)

- **What:** video & livestream studio of the Haut-Saint-Laurent (MRC), Québec.
- **For:** local businesses · non-profits (OBNL) · municipalities · community events · sports/clubs.
- **Services:** ① Videography ② Livestreaming ③ Event coverage.
- **Tagline:** Capture. Create. Connect.
- **Twin:** strAI.ca (AI tools for Quebec non-profits) — same team/region, cross-linked both ways.
- **Bilingual:** FR default, EN toggle.
- **Contact on file:** straydogmedia.ca@gmail.com · 514-618-6185 (shared with strAI).

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

## 4. Design decisions (locked)

- Direction: evolve the mark — see `design-system.html`.
- Palette: Ink `#101014`, Paper `#FAF8F3`, Signal Orange `#FF4A1C`, warm neutral ramp.
- Type: Space Grotesk · Inter · Space Mono. Dark default, light + dark.
- Sibling of strAI: shared class conventions, bilingual + theme toggles, GSAP reveals, cross-links.
- Hosting target: static GitHub Pages, custom domain via `CNAME`.

## 5. Next steps

1. Stray reviews all pages + copy → approve / adjust.
2. Create Formspree endpoint; add portfolio content.
3. Create GitHub remote + enable Pages.
4. DNS cutover off the current builder to GitHub Pages.
