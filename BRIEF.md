# Stray Dog Media — Content & Redesign Brief

Working document for the site refresh. Everything **confirmed** was pulled from
the current live site; everything **TODO** needs Stray's input before launch.

---

## 1. Brand (confirmed from live site)

- **Name:** Stray Dog Media (SDM)
- **Mark:** black-and-white camera icon with a paw print in the lens; "STRAY DOG"
  set vertically, "MEDIA" across the bottom. Monochrome, blocky, photography-forward.
  Pulled to `assets/brand/`.
- **Tagline:** **Capture. Create. Connect.**
- **Positioning (from meta description):** *"Stray Dog Media offers video marketing,
  photography & web design to help businesses stand out, connect with customers &
  grow online. Get noticed today!"*
- **Core services (3):** Video Marketing · Photography · Web Design
- **Location / voice:** Ormstown, Québec area. Community-focused, creative,
  storytelling-driven. Bilingual capable (EN primary).
- **Contact on file:** straydogmedia.ca@gmail.com

## 2. What could NOT be auto-pulled ⚠️

The current site is a **client-rendered SPA on a proprietary no-code builder**
(behind Cloudflare). Page copy loads from a signed API, so a clean scrape of the
full text/sections wasn't possible. The following need to be captured manually
(Stray can paste them, export from the builder, or we transcribe from the live site):

- [ ] Full **hero** copy (beyond the tagline)
- [ ] **About / story** section text
- [ ] Detailed **service** descriptions + any pricing/packages
- [ ] **Portfolio / work** items (videos, photos, case studies, links)
- [ ] **Testimonials / clients**
- [ ] **Contact** details beyond email (phone? form? address?)
- [ ] **Social links** (Instagram, Facebook, YouTube, etc.)
- [ ] Any **secondary pages** (the current sitemap lists only `/`)
- [ ] High-res **logo source** (SVG/AI) + brand photography library

## 3. Design decisions (locked)

- **Direction:** evolve the mark — see `design-system.html`.
- **Palette:** Ink `#101014`, Paper `#FAF8F3`, Signal Orange `#FF4A1C`, warm neutral ramp.
- **Type:** Space Grotesk (display) · Inter (body) · Space Mono (kickers/meta).
- **Themes:** light + dark, persisted, respects OS preference.
- **Hosting target:** static site on GitHub Pages (like strAI.ca), custom domain via `CNAME`.

## 4. Open questions for Stray

- [ ] Keep exactly three services, or add more (e.g. social media management, drone)?
- [ ] Single-page site or multi-page (Home / Work / Services / About / Contact)?
- [ ] Bilingual (EN/FR toggle like strAI.ca) or English only?
- [ ] Contact via `mailto:` or a real form (Formspree, like strAI.ca)?
- [ ] Font direction OK, or want a heavier/condensed display to echo the logo lettering?

## 5. Next steps

1. Stray reviews `design-system.html` → approve / adjust direction.
2. Gather the missing content from §2.
3. Build out real pages from the starter `index.html`.
4. Create GitHub remote + wire GitHub Pages + move DNS off the current builder.
