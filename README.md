# straydogmedia.ca

The Stray Dog Media website — being moved to a static, GitHub-hosted build with
a proper design system, mirroring the strAI.ca setup.

**Status:** `v0.1` — design-system starting point. Not yet live. The current
site still runs on its existing no-code builder until this replaces it.

## What's here

| Path | What it is |
|------|-----------|
| `design-system.html` | **Living style guide** — colors, type, spacing, components. The starting point for Design. Open this first. |
| `index.html` | Starter homepage applying the system to the current site's content. |
| `assets/css/tokens.css` | **Design tokens** — the single source of truth (color, type, space, radius, motion). Edit here to restyle everything. |
| `assets/css/base.css` | Reset + branded element defaults. |
| `assets/css/components.css` | Reusable UI (buttons, cards, nav, chips, hero, footer). |
| `assets/js/main.js` | Theme toggle + scroll reveal. |
| `assets/brand/` | Logo / favicon pulled from the current live site. |
| `BRIEF.md` | Content inventory + redesign brief (what to finalize before launch). |
| `CNAME` | `straydogmedia.ca` (for GitHub Pages when we go live). |

## Design direction

**Evolve the mark.** Keep the monochrome camera-and-paw heritage; modernize
with warm paper, deep ink, one signal-orange accent, a fluid type scale
(Space Grotesk / Inter / Space Mono), and light + dark themes. Full rationale
lives in the style guide.

## How to work in it

- **Restyle globally:** change a value in `tokens.css`.
- **Add a component:** add it to `components.css`, then showcase it in
  `design-system.html` so the guide stays complete.
- **Preview locally:** open `index.html` / `design-system.html` in a browser,
  or run any static server (e.g. `python3 -m http.server`) from the repo root.

## Not done yet

- Real copy + portfolio content (see `BRIEF.md`).
- GitHub remote — currently a **local repo only**; no remote created/pushed.
- Migration cutover (DNS is on Cloudflare today).
