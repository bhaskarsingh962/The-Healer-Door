# The Healer Door

Premium frontend website for **The Healer Door — Yoga & Mat Pilates with Kanishka Solanki**.

Built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## 1. Install

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## 2. Production build

```bash
npm run build
```

## 3. Preview production build

```bash
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── ImageReveal.jsx
│   ├── Loader.jsx
│   ├── MagneticButton.jsx
│   ├── Navbar.jsx
│   ├── Reveal.jsx
│   ├── ScrollProgress.jsx
│   ├── SectionHeading.jsx
│   └── WhatsAppButton.jsx
├── data/
│   ├── classes.js
│   ├── faqs.js
│   ├── images.js
│   ├── navigation.js
│   └── testimonials.js
├── sections/
│   ├── AboutKanishka.jsx
│   ├── Benefits.jsx
│   ├── Booking.jsx
│   ├── BrandIntro.jsx
│   ├── Classes.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Instagram.jsx
│   ├── Journey.jsx
│   └── Testimonials.jsx
├── utils/
│   ├── email.js
│   └── whatsapp.js
├── App.jsx
├── index.css
└── main.jsx
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Images

The project uses remote Unsplash demo images through `src/data/images.js`.

To use Kanishka's real photos later, replace the URLs in that single file or replace them with local paths such as:

```js
hero: "/images/hero.jpg"
```

Then place the images inside `public/images/`.

## Editable content

Update:
- `src/data/classes.js`
- `src/data/testimonials.js`
- `src/data/faqs.js`
- `src/data/navigation.js`
- `src/data/images.js`

No backend is used.

## Booking behavior

The booking form does not claim to store or automatically confirm appointments. It prepares the submitted information and gives the visitor two choices:
- Send via WhatsApp
- Send via Email

## Deployment

### Vercel
Import the repository. Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

### Netlify
Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```

### Render Static Site
Build command:

```bash
npm install && npm run build
```

Publish directory:

```text
dist
```

## Important

Replace the placeholder/demo testimonials before launch and replace the demo photography with the brand's approved real photos.
