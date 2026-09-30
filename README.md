# Monkhood — 5 Days Advanced Mindful Manifestation Workshop

A high-converting, mobile-first landing page for Monkhood's **5 Days Advanced Mindful Manifestation Workshop** led by **Rahul Dongre** (Director, Monkhood • Buddhist Life Coach & Mindfulness Healer).

Built with **HTML5**, **Tailwind CSS**, and **Vite**, fully optimized for mobile devices, Git version control, and instant static deployment on **Cloudflare Pages**.

---

## 🌟 Features & Highlights

- **Mobile-First Experience:** 
  - Sticky bottom mobile enrollment bar for seamless one-thumb checkout.
  - Safe-area inset support (`env(safe-area-inset-bottom)`) for modern smartphones.
  - Compact header with truncated responsive layout on narrow displays (320px–414px).
  - Tactile active feedback states (`active:scale-95`) across all interactive touch targets.
- **Hero & Official Visuals:**
  - High-resolution workshop visual: `5 Days M2M.png`.
  - Rahul Dongre's official portrait (`IMG_8841.JPG`) with gold border, chest-level framing, and Director badge.
- **High-Converting Urgency & Scarcity:**
  - Dynamic countdown timer simulating workshop cohort closing.
  - Live animated seats counter (decrementing to 12 spots left).
- **Direct Integration:**
  - Razorpay payment links for ₹999 subsidized cohort access.
  - One-tap WhatsApp confirmation (+91 9545205982) pre-filled with seeker verification text.
- **Production Performance:**
  - Near-instant First Contentful Paint (<0.5s).
  - Cloudflare Pages caching rules via `_headers` and SPA fallback via `_redirects`.

---

## 📁 Repository Structure

```text
├── public/                     # Static files copied as-is into production build
│   ├── 5 Days M2M.png          # Official workshop banner
│   ├── IMG_8841.JPG            # Rahul Dongre's official mentor portrait
│   ├── rahul-dongre.jpg        # High-res mentor fallback
│   ├── _headers                # Cloudflare Pages security & caching headers
│   └── _redirects              # Cloudflare Pages routing & fallback
├── index.html                  # Main responsive landing page
├── vite.config.ts              # Modern Vite configuration (ESM dirname)
├── package.json                # Project scripts and dependencies
├── tsconfig.json               # TypeScript configuration
├── wrangler.toml               # Cloudflare Pages / Workers configuration
└── .gitignore                  # Git ignore rules for production
```

---

## 🚀 Local Development

To run the application locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone <your-git-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production files will be output to the `dist/` directory.

---

## 🐙 How to Push to Git

To push all your project files to your GitHub, GitLab, or Bitbucket repository:

1. **Initialize git (if not already done):**
   ```bash
   git init
   ```

2. **Stage all files:**
   ```bash
   git add .
   ```

3. **Create your initial commit:**
   ```bash
   git commit -m "feat: complete monkhood manifestation landing page ready for cloudflare pages"
   ```

4. **Set branch to `main`:**
   ```bash
   git branch -M main
   ```

5. **Link your remote repository:**
   *(Replace `<YOUR-REPO-URL>` with your actual Git remote URL)*
   ```bash
   git remote add origin <YOUR-REPO-URL>
   ```

6. **Push to GitHub / Git:**
   ```bash
   git push -u origin main
   ```

---

## ☁️ Deploying to Cloudflare Pages

Cloudflare Pages provides global CDN distribution, free SSL, and continuous deployment from Git.

### Option 1: Git Integration (Recommended — Auto-deploys on every `git push`)

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the sidebar, navigate to **Compute (Workers & Pages)** → **Create application** → **Pages** → **Connect to Git**.
3. Select your Git repository (GitHub / GitLab).
4. Under **Build settings**, configure:
   - **Framework preset:** `Vite` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` or `20` (default in Cloudflare)
5. Click **Save and Deploy**.
6. Cloudflare will automatically build the site and provide you with a live URL (e.g., `https://monkhood-manifestation.pages.dev`).

### Option 2: Deploying via Wrangler CLI

If you prefer deploying directly from your terminal:

1. Install Wrangler globally or use `npx`:
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=monkhood-manifestation
   ```

---

## 🔒 Cloudflare Headers & Cache Configuration

The `public/_headers` file is automatically deployed to `dist/_headers` by Vite during `npm run build`:
- **Long-term caching (1 year immutable)** for hashed assets in `/assets/*`.
- **Media caching (7 days)** for `.jpg`, `.png`, and `.webp` images.
- **Security headers**: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

© Monkhood. All Rights Reserved.
