# Inupama Sandali — React Portfolio

Same look and feel as your original HTML portfolio, rebuilt in React.
Colors, fonts, animations, and layout are preserved exactly.

---

## 🚀 Run Locally

```bash
npm install
npm run dev
# → open http://localhost:5173
```

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← loads ScrollReveal + Typed.js (same as original)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx             ← mounts ScrollReveal after render
    ├── index.css           ← all original CSS + skills/contact additions
    └── components/
        ├── Navbar.jsx      ← sticky + active link + mobile menu
        ├── Home.jsx        ← Typed.js typing effect + floatImage animation
        ├── About.jsx       ← exact original layout
        ├── Skills.jsx      ← skill bars animate on scroll into view
        ├── Portfolio.jsx   ← original hover overlay + PM details + filter
        ├── Contact.jsx     ← original form layout
        └── Footer.jsx      ← exact original
```

---

## 🖼️ Add Your Images

Place these in the `public/` folder:
```
public/
  images/
    profiledp.png     ← home section photo
    secendpic.jpg     ← about section photo
    hardware.jpg      ← project 1
    trading.jpg       ← project 2
    e-commerce.jpg    ← project 3
    blog1.jpg         ← project 4
```

---

## 📬 Wire Up the Contact Form

Open `src/components/Contact.jsx` and replace the `submit` function:

### Option A — Formspree (free, easiest)
1. Sign up at https://formspree.io → create a form → copy your form ID
2. Replace the submit body:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setSent(true)
```

### Option B — EmailJS (sends directly from browser)
1. Sign up at https://emailjs.com
2. `npm install @emailjs/browser`
3. In Contact.jsx:
```js
import emailjs from '@emailjs/browser'
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  .then(() => setSent(true))
```

---

## 🌐 Deploy

### Vercel (recommended — free, automatic HTTPS)
1. Push to GitHub
2. Go to https://vercel.com → Import project → Deploy
3. Your URL: `yourname.vercel.app`

### Netlify
```bash
npm run build
# drag the dist/ folder to https://netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# add to package.json scripts:
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
npm run deploy
```

---

## 🎨 Update Your Details

| File | What to change |
|------|---------------|
| `Home.jsx` | Name, bio, social links, CV link |
| `About.jsx` | Bio text |
| `Skills.jsx` | Skill names + % levels |
| `Portfolio.jsx` | Project titles, descriptions, links |
| `Contact.jsx` | Form submission endpoint |
| `Footer.jsx` | Copyright year |
