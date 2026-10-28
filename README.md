# Kindling

A responsive, frontend-only editorial blog built with React. **Kindling** is a fictional personal journal about slow travel, cold-weather walks, home rituals and small joys. The name comes from the small sticks that start a fire: little things that get something warm going.

The author, stories and photographs are sample content created for demonstration.

## Features

- Home page with an editorial hero, featured story, latest stories, topic tiles, author introduction, newsletter form and photo strip
- Journal page with live search, topic filter, tag filter, pagination and an empty state; filters are kept in the URL so they can be shared
- Article pages with readable typography, byline, reading time, pull quotes, lists, figures, tags, copy-link button, author box, previous/next navigation and related stories
- Short "note" articles with a compact image layout for smaller photographs
- Comment form that previews a comment on the page only (nothing is saved)
- Newsletter, comment and contact forms with inline validation and clearly simulated feedback
- Header search, responsive navigation, keyboard-friendly controls, visible focus states and reduced-motion support

## Technologies

React 18, React Router 6 (`HashRouter`), Vite 5, plain CSS, Fontsource fonts. No backend, database, CMS or API; posts live in `src/data/posts.js`.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, PostCard, Pagination, Newsletter, Comments, Article, shared pieces
  pages/        Home, Journal, Article, About, Contact, Credits, NotFound
  data/         Posts, site details, topics (edit these to add or change content)
  assets/images Photography
  lib.js        Date formatting, reading time and post-body parser
  styles.css    Design tokens and styles
```

## Adding a post

Add an object to the `raw` array in `src/data/posts.js` with a `slug`, `title`, `excerpt`, `cat`, `date`, `img` and `body`. Body lines starting with `## ` become headings, `> ` quotes, `- ` lists (items separated by `|`), and `img:` figures.

## Deploy to Netlify

The site uses hash-based routes (for example `/#/journal/my-fall-in-love-story`), so pages work on direct visits and refreshes without redirect rules. `netlify.toml` already sets the build command (`npm run build`) and publish directory (`dist`).

1. Push the project to a GitHub repository.
2. In Netlify choose **Add new site, Import an existing project**, then connect the repository.
3. Confirm the build command `npm run build` and publish directory `dist`, then deploy.

## Credits and licences

Third-party attributions are listed in [ATTRIBUTION.md](ATTRIBUTION.md) and on the website's Credits page.
