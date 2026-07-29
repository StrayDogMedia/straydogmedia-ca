# straydogmedia.ca

The Stray Dog Media website — a static, GitHub-hosted, **bilingual (FR/EN)**
multi-page site with its own design system. Built as the **twin of strAI.ca**:
same conventions and cross-links, its own orange brand.

**Positioning:** the **video & livestream studio of the Haut-Saint-Laurent** —
for local businesses, non-profits, municipalities and community events.
Tagline: *Capture. Create. Connect.*

**Status:** `v0.2` — full multi-page scaffold with real bilingual copy.
Placeholder portfolio + a Formspree endpoint to wire up. Not yet live.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — hero, services, who-it's-for, strAI twin band, CTA |
| `services.html` | Videography · Livestreaming · Event coverage + process |
| `work.html` | Portfolio (placeholder cards — swap in real projects) |
| `about.html` | Story, values, twin-to-strAI |
| `contact.html` | Project-inquiry form + phone/email |
| `design-system.html` | **Living style guide** — the design starting point |

## Design system

| Path | What it is |
|------|-----------|
| `assets/css/tokens.css` | **Single source of truth** — color, type, space, radius, motion. Dark is default; light + dark both defined. |
| `assets/css/base.css` | Reset + branded element defaults. |
| `assets/css/components.css` | Reusable UI, sharing strAI's class conventions (`.eyebrow`, `.btn-primary/.btn-ghost`, `#nav`, `.gs-reveal`, forms). |
| `assets/js/main.js` | Sibling of strAI's `app.js`: bilingual toggle, theme, nav, mobile menu, GSAP reveals, Formspree submit. |
| `assets/brand/` | Logo / favicon pulled from the current live site. |

- **Palette:** Ink `#101014`, Paper `#FAF8F3`, Signal Orange `#FF4A1C` + warm neutral ramp.
- **Type:** Space Grotesk (display) · Inter (body) · Space Mono (eyebrows/meta).
- **Bilingual:** FR default; `data-fr` / `data-en` attributes, `#lang-btn` toggles, persists via `localStorage`.
- **Twin to strAI:** every page cross-links strAI.ca (strAI already links back to SDM).

## Before launch (see BRIEF.md)

1. **Create the SDM Formspree form** and replace `YOUR_FORM_ID` in `contact.html`
   (⚠️ do NOT reuse strAI's endpoint — leads would go to the wrong inbox).
2. Add real portfolio content to `work.html`.
3. Fill remaining copy gaps (BRIEF §2).
4. Create GitHub remote + Pages; move DNS off the current builder.

## Preview locally

Open any `.html` in a browser, or run `python3 -m http.server` from the repo root.
