# Desired IT Solutions: Visual Assets & Motion Spec

> **Design direction: B, Bold & Bright.** The site uses a light base (`#FAFAF7`), ink (`#0E1116`), cobalt accent (`#2B4BFF`) and lime highlight (`#D4FF3A`). Headings are set in Plus Jakarta Sans and body text in Inter. Pages are mostly light, with dark hero and call-to-action sections.

---

## 1. The "real, not AI" rules

Clean UIs look AI-generated when every section is a flat card with an icon. These rules break that pattern:

1. **Real people, real work.** Use photos of the actual team, real screens and real desks. Never use AI-generated faces or generic "handshake in a suit" stock.
2. **Use one colour grade on every photo.** It should be slightly warm, slightly desaturated, with a soft film grain. This makes mixed sources look like a single shoot.
3. **Add a studio scrapbook layer, used sparingly.** This means torn-paper edges, masking tape, sticky notes, polaroid frames and hand-drawn marker doodles, layered over the clean grid. Use one or two per section at most, so the site reads as made by humans while staying professional.
4. **Show real product work.** Use actual project screenshots inside device frames, not wireframe placeholders.
5. **Add texture.** A subtle paper grain on light sections and a noise overlay on dark sections remove the flat digital look.
6. **Include an Australian context.** Use the client's real city, a dotted map of Australia, and Australian business scenes. Only show what is actually true about the business.

---

## 2. Folder structure

```
public/
  brand/          logo, favicon, OG images
  photos/team/    portraits + candids
  photos/work/    workspace, workshops, meetings
  services/       one hero visual per service
  work/           case study screenshots + covers
  logos/clients/  client logos (SVG, mono)
  logos/tech/     tech stack logos (SVG)
  logos/partners/ partner badges
  textures/       paper, grain, tape, torn edges
  doodles/        hand-drawn SVG marks (animated)
  illustrations/  map, patterns, service icons
```

Naming convention: `kebab-case`, describing the image, e.g. `team-candid-whiteboard.jpg`.

---

## 3. Asset list

Priority key: **P1** is needed for launch. **P2** is strongly recommended. **P3** is nice to have.
Source key: **Client** = must come from the client. **Shoot** = brand photoshoot. **Stock** = Unsplash/Pexels (graded). **Make** = we design or generate it in-house.

### 3.1 Brand

| File | Format / size | Used on | Source | P |
|---|---|---|---|---|
| `brand/logo.svg` | SVG, full colour | Header, footer | Client | P1 |
| `brand/logo-white.svg` | SVG | Dark sections | Client / Make | P1 |
| `brand/logo-mark.svg` | SVG, icon only | Favicon, loader, social | Client / Make | P1 |
| `app/icon.svg` + `app/apple-icon.png` | SVG / 180×180 PNG | Browser tab, iOS | Make | P1 |
| `brand/og-home.png`, `og-about.png`, `og-services.png`, `og-contact.png` | 1200×630 PNG | Social share previews | Make | P2 |

### 3.2 Team & studio photography (the biggest trust driver)

| File | Format / size | Used on | Source | P |
|---|---|---|---|---|
| `photos/team/founder.jpg` | 1600×2000 JPG, portrait | About story, Contact ("who you'll talk to") | Shoot | P1 |
| `photos/team/{name}.jpg` × 4–6 | 1200×1500, same backdrop | About team grid | Shoot | P1 |
| `photos/team/team-group.jpg` | 2400×1350 | About hero | Shoot | P1 |
| `photos/work/candid-whiteboard.jpg` | 2000×1333 | Home "How we work", About | Shoot | P1 |
| `photos/work/candid-pair-coding.jpg` | 2000×1333 | Services (Software), About values | Shoot | P2 |
| `photos/work/candid-design-review.jpg` (laptop with Figma, sticky notes) | 2000×1333 | Services (UI/UX) | Shoot | P2 |
| `photos/work/client-meeting.jpg` | 2000×1333 | Contact "What happens next" | Shoot / Stock | P2 |
| `photos/work/desk-detail-01..03.jpg` (keyboard, notebook sketches, coffee + laptop) | 1600×1600 | Polaroid accents, section fillers | Shoot | P2 |
| `photos/work/office-exterior.jpg` or a city street shot | 2400×1350 | Contact, About "Proudly local" | Shoot / Stock | P3 |

> **Recommendation:** Book a half-day brand photoshoot (portraits plus candid work shots). It's the single biggest improvement for making the site feel real. If that isn't possible yet, use carefully chosen stock (candid, natural light, diverse, no posing at camera) and apply the colour grade.

### 3.3 Service visuals (8 services)

Each service gets one **composite visual**: a real photo or a device mockup, with a floating UI card and a doodle annotation. These are made in Figma and exported as WebP (1600×1200) plus an optional transparent PNG layer.

| File | Composition idea | Source | P |
|---|---|---|---|
| `services/web-design.webp` | Laptop showing a real client website, with a floating "+180% enquiries" stat card and a marker arrow | Make + real screenshot | P1 |
| `services/ecommerce.webp` | Phone showing a product page and checkout, with "Afterpay" and "Order shipped" notification cards | Make + real screenshot | P1 |
| `services/custom-software.webp` | Dashboard on a monitor, with chart and table UI and a sticky note saying "25 hrs/week saved" | Make + real screenshot | P1 |
| `services/mobile-apps.webp` | Hand holding a phone (photo), with app screens fanned out | Shoot / Stock + Make | P1 |
| `services/ui-ux.webp` | Figma canvas with wireframes, colour swatches, a torn paper sketch and a cursor | Make | P1 |
| `services/seo-marketing.webp` | Google results mock with the client at #1, a rising traffic graph, and a lime highlighter swipe | Make | P1 |
| `services/ai-automation.webp` | Flow diagram (form → CRM → Xero → email), with a chatbot bubble and a "Done in 2s" toast | Make | P1 |
| `services/care-plans.webp` | Uptime monitor at 99.99%, a security shield and an "Updated" badges list | Make | P1 |
| `illustrations/icons/service-{slug}.svg` × 8 | Custom duotone line icons (ink + cobalt + lime dot), animated on hover | Make | P1 |

### 3.4 Work / case studies

| File | Format / size | Used on | Source | P |
|---|---|---|---|---|
| `work/{project}/cover.webp` × 3–6 | 1600×1200 | Home "Results we're proud of" | Make from real project | P1 |
| `work/{project}/desktop.webp` | 2560×1600 screenshot | Inside a browser frame | Client project | P1 |
| `work/{project}/mobile.webp` | 1170×2532 screenshot | Inside a phone frame | Client project | P2 |
| `illustrations/frame-browser.svg` | SVG browser chrome | Wraps screenshots | Make | P1 |
| `illustrations/frame-phone.svg` | SVG phone bezel | Wraps screenshots | Make | P1 |
| `illustrations/frame-laptop.png` | Transparent PNG | Hero / services | Make / mockup kit | P2 |

### 3.5 Logos & badges

| File | Notes | Source | P |
|---|---|---|---|
| `logos/clients/*.svg` × 6–12 | Single-colour (ink), for the logo marquee. Written permission needed | Client | P1 |
| `logos/tech/*.svg` | Next.js, React, Node, Laravel, WordPress, Shopify, Flutter, AWS, Stripe, Xero, etc. from **Simple Icons** (CC0) | Make | P2 |
| `logos/partners/*.svg` | Google Partner, Shopify Partner, etc. **Only real ones** | Client | P2 |
| `logos/reviews/google.svg`, `clutch.svg` | Next to the rating in the trust strip | Make | P2 |

### 3.6 Textures & paper (the scrapbook layer)

| File | Format / size | Used on | Source | P |
|---|---|---|---|---|
| `textures/torn-edge-top-01..03.svg` | SVG, 1440 wide, `fill="currentColor"` | Dividers between light and dark sections (hero bottom, CTA band top) | Make: scan real torn paper and vectorise it, or draw in Figma | P1 |
| `textures/torn-edge-bottom-01..03.svg` | SVG | Same, flipped variants | Make | P1 |
| `textures/torn-paper-card.svg` | SVG shape with torn bottom | Testimonial and quote cards | Make | P2 |
| `textures/paper-grain.webp` | 512×512 seamless, ~20 KB | Light section background at 4–6% opacity | Make (scan) | P1 |
| `textures/noise.png` | 256×256 seamless | Dark section overlay at 6–8% opacity | Make | P1 |
| `textures/tape-01..03.png` | Transparent PNG, ~300×90 | Taping polaroids and screenshots to sections | Make (scan real masking tape) | P2 |
| `textures/sticky-note-yellow.svg`, `-lime.svg` | SVG with a slight curl shadow | Stats, "25 hrs saved" notes | Make | P2 |
| `textures/polaroid-frame.svg` | SVG | Team candid and desk photos | Make | P2 |
| `textures/crumpled-paper.webp` | 2400×1600, light | Behind the 404 page / lead magnet section | Make (scan) | P3 |

> **Tip:** Scanning *real* torn paper, tape and marker strokes, then vectorising them (Illustrator Image Trace or vectorizer.ai), gives an authenticity that generated shapes can't fake.

### 3.7 Hand-drawn doodles (SVG, animated)

All are single-path strokes (`stroke="currentColor"`, no fill), so they can be drawn on with `pathLength`.

| File | Used on |
|---|---|
| `doodles/underline-scribble.svg` | Under the hero keyword ("grow") |
| `doodles/circle-scribble.svg` | Around "results" in section headings |
| `doodles/arrow-curved-01..02.svg` | Pointing at the primary CTA and the "See our work" link |
| `doodles/star-burst.svg` | Next to the "Free" lead-magnet badge |
| `doodles/squiggle.svg` | Section dividers, footer |
| `doodles/check-hand.svg` | Bullet lists ("What's included"), form success |
| `doodles/highlighter-swipe.svg` | Lime marker behind key words |
| `doodles/sparkle.svg` | AI & Automation section |

> **Source:** Draw these by hand on an iPad (Procreate or Figma pencil) for real character, then simplify the paths. Keep each under 2 KB.

### 3.8 Illustrations & patterns

| File | Used on | P |
|---|---|---|
| `illustrations/hero-grid.svg` | Dark hero background: fine grid with travelling light pulses | P1 |
| `illustrations/australia-dot-map.svg` | Contact and About: dotted map of Australia, with a pulsing dot on [client city] | P1 |
| `illustrations/process-path.svg` | Home "How we work": the connecting line that draws on scroll | P1 |
| `illustrations/blob-cobalt.svg`, `blob-lime.svg` | Soft shapes behind service visuals | P3 |
| `illustrations/404.svg` | Torn paper with the "404" ripped out | P3 |

### 3.9 UI icons
- **Lucide React** for all functional UI icons (arrows, menu, mail, phone, check).
- The custom service icons (3.3) are the only "illustrated" icons. Don't mix in other icon sets.

---

## 4. Image technical specs

- **Delivery:** Always use `next/image`. It serves AVIF/WebP automatically. Upload sources at 2× display size.
- **Formats:** Use JPG/WebP for photos, SVG for logos, icons, doodles, edges and maps, and PNG only where transparency on a raster is needed (tape, laptop frame).
- **Weight budget:** Under 200 KB for hero images, under 120 KB for service visuals, and under 5 KB for SVG doodles.
- **LCP:** The hero image (if any) gets `priority`. Everything below the fold lazy-loads.
- **Alt text:** Describe the content ("Desired IT team planning a website on a whiteboard"). Decorative textures and doodles get `alt=""` / `aria-hidden`.
- **Colour grade:** Apply one Lightroom/Figma preset to every photo: warmth +5, saturation −10, slight fade and grain.

---

## 5. Motion spec

### 5.1 Principles
- **Purposeful:** Motion explains (draws attention to the CTA, shows progress, connects pages). It never just decorates.
- **Fast:** Micro-interactions take 150–250 ms, reveals 400–600 ms, page transitions 300–400 ms.
- **Single easing family:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) for entrances and `cubic-bezier(0.65, 0, 0.35, 1)` for movements.
- **Once only:** Scroll reveals play once, never on every scroll.
- **Performance:** Animate only `transform`, `opacity`, `clip-path` and `stroke-dashoffset`, so the site stays above 90 on PageSpeed.
- **Accessibility:** `prefers-reduced-motion: reduce` turns off reveals, parallax and transitions, leaving instant states. Doodles appear already drawn.
- **LCP-safe hero:** The H1 is visible on first paint. Only the subtitle, CTAs and doodles animate in, so the headline never waits on JavaScript.

### 5.2 Tooling
| Need | Tool | Why |
|---|---|---|
| Page transitions | **React `<ViewTransition>`** | Built into Next 16.4 / React 19.3. No config or extra library, and it uses the browser's native View Transitions API |
| Scroll reveals, hover, SVG path drawing | **Motion** (`motion/react`) | Small, declarative, and has `pathLength` for SVG drawing |
| Smooth scroll | **Lenis** | Premium feel. Keep native scroll on touch devices |
| Simple loops (grid pulses, map pings, marquee) | **Plain CSS keyframes** | Zero JavaScript |
| Complex scroll scenes (only if needed) | **GSAP + ScrollTrigger** | Free for commercial use. Only add it if a scene needs pinning or scrubbing |

### 5.3 Page transitions (Home ↔ About ↔ Services ↔ Contact)

**Recommended: "lift and fade" plus shared-element morphs.**

1. **Persistent chrome:** The header and footer are wrapped in a named `<ViewTransition name="site-header">`, so they stay still while only the content changes.
2. **Content swap:** The old page fades out and moves up 8 px (200 ms). The new page fades in from 16 px below (350 ms, ease-out-quint).
3. **Directional feel:** We use `addTransitionType('nav-forward' | 'nav-back')` based on nav order (Home → About → Services → Contact). Going forward lifts up, and going back drops down.
4. **Shared-element morphs (the "wow" moment):**
   - A Home service card's icon morphs into that service's heading icon on the Services page (`name="service-icon-{slug}"`), and the page scrolls to the section.
   - The "Book a strategy call" button morphs into the Contact form's submit area (`name="primary-cta"`).
   - The nav's active indicator (a lime underline) slides between links.
5. **Fallback:** Browsers without View Transitions support simply navigate instantly, with nothing broken.

*Rejected:* A full-screen branded "curtain" wipe or loader on every page. It looks impressive once, adds about 600 ms to every navigation, and hurts conversion and Core Web Vitals.

### 5.4 SVG animations

| Animation | Where | How |
|---|---|---|
| **Hand-drawn underline draws on** | Hero keyword "grow" | `motion.path` with `pathLength` 0→1, 700 ms, 300 ms after load |
| **Circle scribble** | Around "results" in the case study heading | Draws when in view, slightly imperfect timing so it feels hand-made |
| **Curved arrow to CTA** | Hero and CTA bands | Draws on, then the arrowhead "pops" (scale 0→1, spring) |
| **Hero grid pulses** | Dark hero background | Grid lines with small light pulses travelling along them (CSS `stroke-dashoffset` loop, staggered) |
| **Process path** | Home "How we work" | A line that draws as you scroll (`useScroll` → `pathLength`), and each step's dot fills cobalt as the line reaches it |
| **Service icons** | Service cards | On hover, the icon's line-art redraws and one element moves (cursor clicks, cart bounces, gear turns, chart rises) |
| **Torn paper edges** | Section dividers | Slight parallax (edge moves 10–20 px slower than the content), so it feels layered |
| **Australia dot map** | Contact, About | Dots fade in randomly. The client city dot pings (an expanding ring loop) |
| **Highlighter swipe** | Key words | A lime bar that wipes left to right (`clip-path` inset) when in view |
| **Check doodles** | "What's included" lists | Each check draws on with a 60 ms stagger |
| **Form success** | Contact | A hand-drawn check draws, then a little confetti of doodle sparkles appears |
| **Logo mark** | Footer and 404 | Strokes draw on when in view |

### 5.5 Other micro-interactions
- **Scroll reveal:** Elements fade up (16 px), with a 60–80 ms stagger for grids.
- **Stats:** Numbers count up when in view (1.2 s, ease-out). Sticky notes "slap" in with a slight rotation spring.
- **Logo marquee:** A continuous CSS loop that pauses on hover.
- **Primary button:** Magnetic pull (max 6 px), the arrow nudges 4 px, and the lime fill sweeps on hover.
- **Service cards:** A cursor-following cobalt spotlight on the border, and the card lifts 4 px.
- **Case study cards:** The image zooms (1.04) and the result stat slides up.
- **Polaroids and tape:** These rest at small rotations (−3° to 3°) and straighten on hover.
- **Services page:** The sticky chip nav highlights the active service as you scroll (scroll-spy) with a sliding pill.
- **Form fields:** The label floats, the focus ring is cobalt, and the budget and service chips toggle with a springy scale.

---

## 6. What we need from the client (asset checklist)

- [ ] Logo files (SVG/AI/EPS), or confirmation that we design one
- [ ] Brand photoshoot, or approval to use graded stock for v1
- [ ] Team names, roles and headshots
- [ ] 3–6 case studies: screenshots, results and client permission
- [ ] Client logos (with permission)
- [ ] Real partner badges and review profile links (Google, Clutch)
- [ ] Office city/address (for the map pin and the local copy)

---

## 7. Reference video analysis: premium motion to adopt

Source: `web design refence.mp4` (Vallora Estate, an editorial winery landing page, 34 s scroll-through).
What makes it feel premium: **scroll-driven storytelling**. Nearly every section changes as you scroll (it scales, masks, expands or pins) instead of fading in. It also mixes a large serif with *italic* accents, uses full-bleed photography, and scrolls smoothly with inertia.

| # | Effect in the reference | How we use it on our site | Page | Tech |
|---|---|---|---|---|
| 1 | **Hero image card with masked headline reveal.** Lines fade up with a blur-to-sharp effect, then the copy and button appear | Dark hero: the H1 reveals line by line with blur → sharp, and the CTA follows | Home, all heroes | Motion (`filter: blur` + `y`), H1 visible at first paint for LCP |
| 2 | **Hero card shrinks as you scroll.** The full-width image collapses into a rounded card, and the next section slides over it | The hero media (project mockup collage) scales from 100% to 92% with growing corner radius while the next section overlaps it | Home | `useScroll` → `scale`, `borderRadius` |
| 3 | **Editorial statement block.** A large text with an *italic* phrase, a red asterisk accent and a staggered photo collage | "At Desired IT, we believe a website is *more than a brochure*: it's your best salesperson." Lines stagger in, with 2–3 polaroid photos of the team at work | Home intro, About | Motion stagger |
| 4 | **Kinetic type on a curve.** Letters of a word laid out along an arc, rotating and drifting with scroll, with coloured dots bouncing around | The word **"Build"** or **"Launch"** on an SVG arc that straightens as you scroll. Lime and cobalt dots act as "pixels" | Home, between sections | SVG `<textPath>` + `useScroll` (`startOffset`) |
| 5 | **Converging image tiles → zoom-through.** Rounded image tiles scattered on black move toward the centre while the title grows, then one image expands to fill the screen | **"Inside our studio"**: 8–10 tiles (work screenshots, team shots) converge, "Ideas into products" scales up, and the centre tile zooms to full screen | Home (signature moment) | Sticky pinned section, 200–300 vh tall, scroll-scrubbed (Motion or GSAP ScrollTrigger) |
| 6 | **Arch / shape mask.** A full image clipped to an arch with text inside | Clip an image into a **rounded "browser window" or "app" shape** (more on-brand than an arch) that opens up on scroll | About, Services | `clip-path: inset(... round ...)` scrubbed |
| 7 | **Split panel with a draggable card stack.** Ticket-style info cards and "Drag to explore" | **Services overview:** left side shows the heading, right side is a stack of 8 service cards you can drag or swipe through | Home, Services | Motion `drag` + `AnimatePresence` |
| 8 | **Giant marquee headline.** "Made with patience", with speed linked to scroll velocity | "Designed. Built. ***Grown.***" as huge text that scrolls sideways, speeding up when you scroll faster | Home, About | `useVelocity` + `useScroll` |
| 9 | **Bento image grid → tile expands to full bleed.** Cards with arrow icons, and one image grows to fill the viewport | **Work bento:** project tiles with hover arrows. Scrolling expands the featured project to full width | Home | Pinned section + `scale`/`clip-path` |
| 10 | **Testimonial switcher.** Avatar column, a 01/06 counter, and the quote and photo crossfade | Same pattern | Home, About | `AnimatePresence` crossfade |
| 11 | **Two-column dark FAQ accordion** | FAQs in a dark band with smooth height animation and a rotating plus icon | Home, Services | CSS `grid-template-rows` transition |
| 12 | **Full-bleed final CTA → footer curtain reveal.** The CTA scrolls away to reveal a sticky footer with a **giant wordmark** | The final CTA lifts away to reveal the footer, with a huge **"Desired"** wordmark in the background | All pages | Sticky footer + `z-index` layering |
| — | **Smooth inertia scrolling** | Lenis on desktop, native scrolling on touch | Global | Lenis |

### Typography adjustment inspired by the reference
The reference's premium feel comes largely from **serif + italic accents**. We keep Direction B but add one accent face:
- Headings: **Plus Jakarta Sans** (bold, tight tracking)
- Accent word per headline: **Instrument Serif *Italic*** (e.g. "We build digital products that *grow* your business")
- Body: **Inter**
The lime highlighter is still used, but only on one or two words per page.

### Performance guardrails
- Effects 5 and 9 (pinned scroll scenes) run **only on desktop and tablet**. On mobile they become simple stacked reveals.
- All scenes respect `prefers-reduced-motion`.
- Images in pinned scenes are 800–1200 px wide, lazy-loaded and served as AVIF.

---

## 8. Image sourcing plan (no real project images yet)

**Licence-safe sources only:** **Unsplash** and **Pexels**, which allow free commercial use with no attribution required. Don't take images from Google Images, Pinterest, Dribbble or Behance (copyrighted). AI-generated people are also out, since they make the site look fake.

### 8.1 What we need to source

| Slot | Qty | Search terms (Unsplash/Pexels) | Notes |
|---|---|---|---|
| Hero collage | 4–6 | "web developer laptop code", "designer figma screen", "startup team office", "mobile app hand" | Cool or neutral tones that suit the cobalt palette |
| Team at work (candid) | 6–8 | "team meeting whiteboard", "pair programming", "designers sticky notes", "office collaboration laptop" | Natural light, not posed at the camera |
| Team portraits | 4–6 | "professional portrait neutral background" | **Placeholder only.** Replace with the real team |
| Studio / workspace | 4 | "modern office desk laptop", "coffee laptop workspace" | For polaroids and the zoom-through tiles |
| Services (8) | 8 | "website on laptop", "online shopping phone", "dashboard monitor", "hand holding phone app", "wireframe sketch", "analytics graph laptop", "automation workflow screen", "server room" | Used as the base photo, with our UI cards layered on top |
| Australian context | 2–3 | "Sydney CBD", "Sydney harbour aerial", "Australian small business owner" | About and Contact |
| Testimonial avatars | 3–6 | "smiling business owner portrait" | **Placeholder only.** Real testimonials need real people |

### 8.2 Project / case study images (we have no real projects)

Showing fake client results as real would be misleading under Australian Consumer Law. Instead:

1. **Build 3 "concept projects"** for fictional brands, e.g. *"Harbour & Co." (café e-commerce)*, *"FieldPro" (trades job-management app)*, *"Kinetic Physio" (clinic booking site)*. Design real screens for them, screenshot them, and place them in device mockups.
2. **Label them honestly:** call the section "Featured concepts", or tag each card "Concept". Use outcome-style copy without fake client metrics.
3. **Device mockups:** use free Figma Community device kits, or shots.so / mockuuups.
4. **Swap in real case studies** as soon as the client has them.

### 8.3 Processing pipeline
1. Download at about 2400 px wide. Record each image's source URL and photographer in `public/photos/CREDITS.md`.
2. Apply the single colour grade preset (warm +5, saturation −10, slight grain).
3. Crop to slot ratios (16:9 hero, 4:5 portraits, 1:1 polaroids, 4:3 services).
4. Export as WebP. `next/image` serves AVIF automatically.
