# Review Notes

## Where things live

- **`src/data/church.ts`**: every church detail shown on the site: vision, mission,
  values, tagline, service times, discipleship levels, contacts and the pastor's
  profile. Change a detail there and it updates on every page.
- **`src/styles/global.css`**: site-wide styles that utilities can't express: heading
  font, the homepage hero scene, card tilt, the discipleship "step" blocks, and the
  reduced-motion rules.
- **`tailwind.config.mjs`**: brand colours (`navy`, `navy-dark`, `gold`, `gold-dark`)
  and the two layered shadows (`shadow-depth`, `shadow-lift`).

## Still needed from Pastor Morgan

1. **Photo** for the About page: a portrait about 800px wide, saved as
   `public/images/pastor-morgan.jpg`, then set `pastorProfile.photo` in `church.ts`.
   Until then the page shows his initials.
2. **Prayer request WhatsApp number**: `prayer-hub.astro` sends to 260962219190, while
   the site's call number is +260 962 216 561. Confirm which is right.
3. **Domain**: `site` in `astro.config.mjs` is the Netlify address for now. Change it
   when the real domain is live; the QR code and link previews follow automatically.
4. **Children's photos**: confirm parents are happy with the Next Generation photo.
5. **PLUG**: Pastor's reply described the two discipleship levels under the heading
   "PLUG & Discipleship", but not what PLUG itself is or when it meets.

## November 2026 pass

**Pastor Morgan's information (his exact wording)**
- Vision, Mission and the ten Values on the new About page and in the footer.
- Tagline: "Transforming lives to transform the world."
- PLUG & Discipleship section on Get Connected (`/ministries#discipleship`):
  Days of Rain (level 1) and Equip (level 2). Plan Your Visit and the Spiritual
  Foundation card link to it.
- "Who is Morgan Bwalya?" profile in his own words on the About page.

**Depth and motion**
- Homepage hero is a layered Mount Zion scene taken from the logo: congregation photo
  at the back, a rising sun disc in the middle, the logo's hill arcs in front. Layers
  move at different speeds on scroll (and with the mouse on desktop). The sun rises
  once on load.
- Service times sit on a card that overlaps the bottom of the hero.
- Navigation turns to frosted glass when content scrolls under it.
- Layered navy-tinted shadows replace flat grey ones.
- Ministry cards and the homepage poster tilt toward the mouse (max 5°, mouse only).
- Discipleship levels are drawn as solid blocks, with Equip standing a step higher.
- No libraries: about 2 KB of script. People who set "reduce motion" on their device
  get a still page, and everything works without JavaScript.

**Fixes**
- The Playfair Display heading font had never applied: the rule was in a scoped
  `<style>` block in the layout, which Astro limits to the layout's own elements.
  It now lives in `global.css`, so headings show in Playfair as intended.
- Service card on phones no longer wraps "Wednesday 18:00" awkwardly.
- Ministry cards say "Learn more" / "Show less" instead of "Tap to…" on desktop.
- Discipleship lists keep their bullets and numbers.

## Checks run

- Strict TypeScript on every page's frontmatter, the data file and each client script.
- Every image reference resolves; every internal link and `#anchor` resolves; no
  skipped heading levels.
- Every page rendered and screenshotted at 390px, 820px and 1440px: no sideways
  scrolling, no script errors. Tilt, accordion, parallax, glass nav, phone menu and
  reduced motion tested in Chromium.
- The screenshots used a local stand-in renderer (Astro can't be installed in the
  review sandbox); the real build runs on Netlify.
