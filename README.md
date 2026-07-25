# Yanjun Sheng — personal website

A single-page academic site with **full-screen tabbed sections**, built as static
HTML/CSS/JS and hosted on GitHub Pages. No build step, no dependencies — just open
`index.html`.

Each nav link (About, Research, Publications, Talks, Blog, Contact) swaps the whole
page to that section — one section is visible at a time. The page opens on **About**,
and the URL carries a `#hash` (e.g. `…/#research`) so individual sections are
shareable and the browser back/forward buttons work. The calligraphy name in the top
bar is always visible and doubles as the "home" link back to About.

## Files

| File | What it is |
|------|-----------|
| `index.html` | All page content (About, Research, Publications, Talks, Blog, Contact) |
| `styles.css` | All styling (colours, layout, responsive rules) |
| `script.js` | Tab switching + `#hash` routing, mobile menu, footer year |
| `images/` | Artwork cropped from the original mockup |
| `Personal_Website_style.png` | The original design mockup (reference only) |

## Preview locally

Just double-click `index.html`, or run a tiny server so paths behave exactly like on GitHub:

```bash
cd personal_website
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content

Everything you'll want to change is plain text in `index.html`:

- **Name / role** — the `.brand` block in the header (top of the file).
- **About** — the `#about` section (text + illustration).
- **Research blurb & the 3 pipeline captions** — the `#research` section.
- **Publications** — the `#publications` section. Each paper is a `<li class="pub">`.
  Put the real link (arXiv / journal / ADS) in the `href="#"` of each `pub-title`,
  and fix the "View all publications" link (e.g. to your ADS library).
- **Talks** — the `#talks` section. Duplicate a `<li class="talk">` per talk.
- **Blog** — the `#blog` section. Each post is an `<a class="blog-card">`. These are
  placeholders; point them at real posts (or a Medium/Substack) when you have them.
- **Contact** — the `#contact` section. Email, location, and GitHub link live there.

To add a whole new section, add a `<section id="…" class="panel">` with a matching
`<a href="#…" data-nav>` in the header nav — the tab wiring picks it up automatically.

To swap any illustration, drop a new file into `images/` with the same name.

## Deploy to GitHub Pages

1. Create a new **public** repo on GitHub. For a personal site at
   `https://<username>.github.io`, name it exactly `<username>.github.io`.
   (Any other name works too — it just lives at `https://<username>.github.io/<repo>/`.)
2. From this folder, push the files (see the commands your assistant gave you).
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `/ (root)`, **Save**.
4. Wait ~1 minute, then visit your URL.

### Custom domain (optional)

Add a file named `CNAME` containing just your domain (e.g. `yanjunsheng.com`), then set
the DNS records your registrar/GitHub docs specify.
