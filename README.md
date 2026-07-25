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

Content is synced to `CV.tex` (education, papers, talks, awards, skills). GitHub,
ORCID, ADS library, and arXiv links are all live.

## Things to fill in

- **CV PDF** — the "Download CV" button links to `cv.pdf`. Compile `CV.tex`
  (`pdflatex CV.tex`) and drop the resulting `cv.pdf` into this folder. LaTeX is not
  installed here, so I couldn't build it for you.
- **Avatar** — the sidebar shows the full `images/selfie.jpg`; the mobile header uses
  the square `images/avatar.jpg` crop. Swap either by replacing the file or editing
  `.avatar` / `.mh-avatar` in `styles.css`.
- **Greeting** — the home page shows a waving 👋 (`.greeting` / `.wave` in `styles.css`).

## Deploy to GitHub Pages

1. Create a **public** repo named `yanjunsheng.github.io`.
2. Push the files.
3. **Settings → Pages → Deploy from branch → `main` / root.**

```bash
cd /Users/sheng/Downloads/personal_website
git branch -M main
git remote add origin https://github.com/Yanjun-Sheng/Yanjun-Sheng.github.io.git
git push -u origin main
```

Then visit `https://yanjunsheng.github.io`.
