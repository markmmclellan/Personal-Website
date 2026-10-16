# Mark McLellan — Personal Website

My personal portfolio site, built with plain HTML, CSS, and JavaScript (no frameworks or build step).

**Live site:** https://markmmclellan.github.io/Personal-Website/

## Sections

A single scrolling page (`index.html`) with a sticky navbar that jumps to each section and highlights the one in view:

- **Home** — bio with an animated typewriter intro, glass-style skill pills and Credly badge popovers
- **Projects** — project write-ups, including an architecture diagram
- **Resume** — English and Japanese resume downloads
- **Contact** — email, LinkedIn and a message form

`project.html`, `resume.html` and `contact.html` are small redirect stubs that forward old links to the matching section.

## Features

- Frosted-glass ("glassmorphism") UI elements with 3D cursor-tilt hover effects
- Canvas-based particle background that reacts to mouse movement
- Scroll-spy navigation, staggered card reveals and cursor-following card glow
- Fully responsive layout
- Color scheme inspired by the Japanese "Running Man" emergency exit sign

## Tech

- HTML5 / CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no dependencies)

## Running locally

No build step required — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Structure

```
index.html
project.html, resume.html, contact.html   (redirects to index.html sections)
styles.css
typewriter.js
tilt.js
particles.js
cards.js
nav.js
sitemap.xml
resume.pdf
rirekisho.pdf
```
