# GitHub Pages — preview vs. launch

**Preview (now):** `CNAME` is parked as `CNAME.parked` so GitHub Pages serves at the
`*.github.io` URL and does **not** touch the live `straydogmedia.ca` domain/DNS.

**At launch / cutover:** rename `CNAME.parked` back to `CNAME`, commit & push, then
point DNS (currently on Cloudflare) at GitHub Pages. Only do this when ready to
replace the current live site.
