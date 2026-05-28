# 🚀 Developer Portfolio — Next.js + Framer Motion

A modern, premium developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion animations.

---

## ✨ Features

- **Dark theme** with cyan/blue accent palette
- **Framer Motion** scroll-triggered and entrance animations
- **Responsive** mobile-first layout
- **7 sections**: Hero, About, Skills, Projects, Experience, Education, Contact
- **Glassmorphism** cards with hover effects
- **Cursor glow** effect on desktop
- **Animated skill progress bars**
- **Interactive contact form** (ready for Formspree integration)
- **Vercel-ready** static export

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, custom fonts, utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Footer.tsx        # Minimal footer with social links
│   ├── ui/
│   │   ├── CursorGlow.tsx       # Mouse-follow glow effect
│   │   ├── GridBackground.tsx   # Ambient dot-grid background
│   │   ├── SectionWrapper.tsx   # Scroll-triggered fade wrapper
│   │   └── SectionHeading.tsx   # Reusable section title component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── EducationSection.tsx
│       └── ContactSection.tsx
├── lib/
│   ├── data.ts           # ← ALL YOUR CONTENT LIVES HERE
│   └── utils.ts          # Animation variants + cn helper
├── public/
│   └── cv.pdf            # ← Place your CV here
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 🛠 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

```bash
# 1. Clone or extract the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customisation

**All content is centralised in `lib/data.ts`** — edit this one file to update:

- Your name, email, GitHub, LinkedIn URLs
- Skills and proficiency levels
- Project descriptions and links
- Work experience entries

**Other things to update:**
1. Replace `public/cv.pdf` with your actual CV
2. Add real GitHub and Live Demo URLs to each project in `data.ts`
3. Update email address in `PERSONAL.email`

---

## 📧 Contact Form

The form currently uses a simulated submission. To make it functional:

**Option A — Formspree (easiest, free tier):**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. In `ContactSection.tsx`, replace the `setTimeout` with:

```typescript
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setStatus('sent');
```

---

## 🚀 Deployment on Vercel

### Method 1 — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel --prod
```

### Method 2 — GitHub Integration (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `your-project.vercel.app` within minutes

### Method 3 — Static Export + Any Host

```bash
npm run build
# Output is in the /out folder — upload to any static host
```

---

## 🎨 Design Customisation

Edit `tailwind.config.js` to change:
- `accent-cyan`: `#00E5FF` — primary accent colour
- `accent-teal`: `#00BFA5` — secondary accent
- `accent-blue`: `#2979FF` — tertiary accent
- `bg-primary`: `#080B12` — page background

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | React framework |
| Framer Motion | 11+ | Animations |
| Tailwind CSS | 3.4+ | Styling |
| TypeScript | 5+ | Type safety |
| Lucide React | 0.383+ | Icons |

---

## 💡 Tips to Improve Your Portfolio

1. **Add real project screenshots** — replace the placeholder visuals in `ProjectImagePlaceholder`
2. **Integrate Formspree** for a working contact form
3. **Add a blog section** using Next.js MDX
4. **Connect Google Analytics** by adding a `<Script>` tag in `layout.tsx`
5. **Add a theme toggle** — the Tailwind dark mode class is already set up
6. **Add project filtering** by category in the Projects section
7. **Set up a custom domain** on Vercel for a professional URL

---

## 📄 License

MIT — free to use and modify for personal portfolio use.
