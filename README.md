# Yanjun Sheng — personal website

A single-page academic homepage, built as static HTML/CSS/JS and hosted on GitHub Pages.
No build step, no dependencies — just open `index.html`.

## Files

| File | What it is |
|------|-----------|
| `index.html` | All page content (About, Research, Publications, Talks, Blog, Contact) |
| `styles.css` | All styling (colours, layout, responsive rules) |
| `script.js` | Mobile menu, scroll-spy nav highlight, footer year |
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

- **Name / role** — the `.hero` section near the top.
- **About** — the `#about` article.
- **Research blurb & the 3 pipeline captions** — the `#research` article.
- **Publications** — the `#publications` article. Each paper is a `<li class="pub">`.
  Put the real link (arXiv / journal / ADS) in the `href="#"` of each `pub-title`,
  and fix the "View all publications" link (e.g. to your ADS library).
- **Talks** — the `#talks` section. Duplicate a `<li class="talk">` per talk.
- **Blog** — the `#blog` section. Each post is an `<a class="blog-card">`. These are
  placeholders; point them at real posts (or a Medium/Substack) when you have them.
- **Contact** — the footer. Email, location, and GitHub link live there.

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
