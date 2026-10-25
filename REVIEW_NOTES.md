# Review Notes – pre-launch pass (October 2026)

## Still waiting on Pastor Morgan

All of these live in one file: `src/data/church.ts`.

1. **Mission statement** – `church.mission` is empty, so the Mission line is hidden
   in the footer and on the About page. Paste the wording in and it appears everywhere.
2. **PLUG & Discipleship schedule** – shown without a time. Add a day/time to `plug`
   once confirmed.
3. **Pastor bio and photo** – `pastorProfile.bio` (one string per paragraph) and
   `pastorProfile.photo` (e.g. `/images/pastor-morgan.jpg`). Until then the About page
   shows his initials and "profile coming soon".
4. **Prayer request WhatsApp number** – `prayer-hub.astro` sends to 260962219190,
   while the site's call number is +260 962 216 561. Confirm which is right.
5. **Domain** – `site` in `astro.config.mjs` is the Netlify address for now. Change it
   when the real domain is live; the QR code and link previews follow automatically.
6. **Children's photos** – confirm parents are happy with the Next Generation photo.

## What changed in this pass

**Pastor's corrections**
- Removed the Garage (Youth) 11:30 service.
- "Emerging Generation" renamed "Next Generation".
- Saturday Intercession and the new Sunday 20:00 prayer marked Online.
- Vision now shows the correct statement (it was labelled Mission before).
- PLUG time removed until confirmed; it now links to the Connect form instead.

**Structure**
- `src/data/church.ts` is the single source for service times, vision/mission,
  contacts and the pastor profile. The footer and Plan Your Visit page used to
  list services separately and had drifted apart.
- New **About** page (`/about`) with Meet Our Pastor and the Vision. Added to the
  nav; the homepage "Learn More About Us" button now goes there.
- New **404** page.

**Mobile and layout fixes**
- Ministry cards no longer overflow phone screens (the grid minimum was wider than
  most phones).
- Desktop nav now only appears from 1280px; below that the menu button is used,
  so links no longer squash on tablets and small laptops. Escape closes the menu.
- Nav shows only the logo mark; the full logo's small text was unreadable at 48px.
- Homepage hero title scales down on phones; QR code is hidden on phones (you can't
  scan your own screen) and the button now reads "Fill in the Connect form" instead
  of showing a raw URL.
- Partner page shows the payment details first, poster beside them; copy buttons
  fall back gracefully on older phones.
- Prayer form says it opens WhatsApp. Form fields support phone autofill.
- Plan Your Visit phone number is tappable and there's an "Open in Google Maps" link.
- Times use one format everywhere (24-hour, e.g. 18:00), matching how Pastor writes them.

**Launch basics**
- Photos resized and compressed: ~6.6 MB → ~0.9 MB total. Phone metadata
  (including GPS location) stripped.
- Favicon and home-screen icon from the logo mark.
- Page titles and descriptions on every page; Open Graph tags so WhatsApp and
  Facebook show a proper preview card (`og-share.jpg`, `og-partner.jpg`).
- Accessibility: skip link, titled iframes, consistent heading order, active page
  marked in the nav.
