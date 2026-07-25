# Yanjun Sheng — personal website

A minimalist multi-page academic site: a sticky sidebar (avatar + nav + links), a
big typographic hero with a cycling multilingual greeting, pill buttons, and a
light/dark toggle that remembers your choice. Static HTML/CSS/JS — no build step.

The visual style is adapted from the layout of
[zezhenwu.com](https://zezhenwu.com) (Albert Sans, `#111`/`#fff` with an indigo
accent and a blue name gradient).

## Pages

| File | Nav item |
|------|----------|
| `index.html` | Home — hero + short intro |
| `about.html` | About — bio, education, interests |
| `research.html` | Research — themes + interests |
| `publications.html` | Publications — paper list |
| `cv.html` | CV — snapshot + PDF download |
| `styles.css` | Shared styles (all pages) |
| `script.js` | Theme toggle, cycling greeting, footer year |
| `images/avatar.jpg` | The circular avatar (cropped from `selfie.jpg`) |

`images/selfie.jpg` is the original full photo. The other files in `images/`
(researcher, galaxy, landscape, research thumbnails) are left over from an
earlier design and are no longer referenced — safe to delete.

## Preview locally

```bash
cd personal_website
python3 -m http.server 8000     # then open http://localhost:8000
```

## Things to fill in

- **Avatar** — `images/avatar.jpg`, a square crop of your hiking selfie. To
  re-crop or swap it, replace that file (or change `background-image` in `.avatar`
  and `.mh-avatar` in `styles.css`).
- **Scholar link** — the sidebar/mobile "Scholar" link is `href="#"`; point it at
  your Google Scholar profile (search for `<!-- TODO` in the HTML).
- **Publication links** — each title is `href="#"`; add arXiv / ADS URLs. Also set
  the "Full list on NASA ADS" link on `publications.html`.
- **CV** — drop a `cv.pdf` into the folder to enable the download button on `cv.html`.
- **Greeting languages** — edit the `greetings` array in `script.js`.

## Deploy to GitHub Pages

1. Create a **public** repo named `yanjunsheng.github.io`.
2. Push the files.
3. **Settings → Pages → Deploy from branch → `main` / root.**

```bash
cd /Users/sheng/Downloads/personal_website
git branch -M main
git remote add origin https://github.com/yanjunsheng/yanjunsheng.github.io.git
git push -u origin main
```

Then visit `https://yanjunsheng.github.io`.
