# Quick Reference Card

## 📦 What You Have

### HTML Version (Production Ready!)
```
index.html          Main page (all sections)
styles.css          All styling & animations
script.js           Countdown timer & interactions
README.md           Full documentation
```

**Start:** Open `index.html` in browser ✅

### Next.js Version (Modern Stack)
```
nextjs/
├── app/
│   ├── components/  React components
│   ├── api/        Backend API routes
│   ├── page.tsx    Homepage
│   └── globals.css Tailwind styles
├── package.json    Dependencies
└── README.md       Documentation
```

**Start:** `cd nextjs && npm install && npm run dev` ✅

---

## 🎨 Design Details

**Color Palette:**
- Primary: `#7c3aed` (Purple)
- Accent: `#00d9ff` (Cyan)
- Dark BG: `#0f0f1e`

**Fonts:**
- Body: Inter (Google Fonts)
- Headings: Poppins (Google Fonts)

**Sections:**
1. Navigation bar
2. Hero section
3. Coming soon badge
4. Countdown timer
5. About section
6. 4 Service cards
7. CTA section
8. Footer

---

## ⚡ Quick Start Commands

### HTML Version
```bash
# Open in browser
open index.html

# Or run local server
python -m http.server 8000
# Visit: http://localhost:8000
```

### Next.js Version
```bash
cd nextjs
npm install
npm run dev
# Visit: http://localhost:3000
```

---

## ✏️ Edit Your Copy

### Brand Name
`index.html` or `app/components/*.tsx`
Search for "Buzzcraft Studios"

### Service Cards
`index.html` (HTML) or `app/components/Services.tsx` (Next.js)

### Colors
`styles.css` (HTML) or `tailwind.config.js` (Next.js)

### Launch Date
`script.js` line ~15 or `app/components/CountdownTimer.tsx`

---

## 🚀 Deploy

### HTML Version
1. Upload all 3 files to any host
2. Visit your domain
3. Done! ✅

### Next.js Version
```bash
cd nextjs
npm run build
npm run start
# Or deploy to Vercel/Netlify
```

---

## 🔗 Popular Hosting

| Platform | HTML | Next.js | Free | Cost |
|----------|------|---------|------|------|
| Vercel | ✅ | ✅✅ | ✅ | Low |
| Netlify | ✅ | ✅ | ✅ | Low |
| GitHub Pages | ✅ | ❌ | ✅ | Free |
| Firebase | ✅ | ⚠️ | ✅ | Low |
| AWS S3 | ✅ | ⚠️ | ⚠️ | Pay-as-go |
| Shared Hosting | ✅ | ❌ | ⚠️ | Low |

**Recommended:** Vercel (Next.js) or Netlify (both)

---

## 📋 Customization Checklist

- [ ] Brand name updated
- [ ] Color scheme applied
- [ ] Services descriptions updated
- [ ] About section written
- [ ] Social media links added
- [ ] Contact email updated
- [ ] Launch date set
- [ ] Logo added (optional)
- [ ] Custom domain purchased
- [ ] Analytics configured

---

## 🔧 Database for Emails

### Option 1: LocalStorage (Default)
- No setup needed
- Works immediately
- Emails stored locally

### Option 2: Backend API
- Create account on:
  - MongoDB Atlas
  - Firebase
  - Supabase
- Connect in `api/subscribe/route.ts` (Next.js)
- Replace `saveEmailToLocalStorage()` (HTML)

---

## 📞 Key Files to Edit

### HTML Version
```
index.html  → Brand, copy, sections
styles.css  → Colors, fonts, animations
script.js   → Countdown date, email handling
```

### Next.js Version
```
app/page.tsx                       → Main layout
app/components/*.tsx               → Individual sections
app/api/subscribe/route.ts        → Email API
tailwind.config.js                → Colors & theme
app/globals.css                   → Global styles
```

---

## 🎯 Email Integration Tips

### DIY Solution
Use Formspree or Basin:
```html
<form action="https://formspree.io/f/FORM_ID" method="POST">
  <input type="email" name="email">
</form>
```

### Email Service
- Mailchimp (free)
- SendGrid (free tier)
- ConvertKit (paid)
- ActiveCampaign (paid)

### Next.js + Service
```typescript
// In api/subscribe/route.ts
const result = await sendToMailchimp(email);
```

---

## 📲 Mobile Testing

**Test on:**
- iPhone Safari
- Android Chrome
- Tablet browsers
- Using device emulation (F12)

**Check:**
- ✅ Text readable
- ✅ Buttons clickable
- ✅ Images load
- ✅ Forms work
- ✅ Animations smooth

---

## 🔒 Security Basics

### For Email Capture
- ✅ Validate email format
- ✅ Check for duplicates
- ✅ Use HTTPS always
- ✅ Don't expose API keys
- ✅ Rate limit submissions

### Add to env (Next.js)
```
NEXT_PUBLIC_API_URL=https://yourdomain.com
DATABASE_URL=your_database_url (keep secret!)
```

---

## 📊 Analytics

Add Google Analytics:
1. Create account at https://google.com/analytics
2. Get tracking ID
3. Add to your site (see DEPLOYMENT_GUIDE.md)
4. Track important actions

---

## ✨ Enhancements Possible

- Blog section
- Case studies
- Testimonials
- Team members
- FAQs
- Contact form
- Newsletter archive
- Video backgrounds
- Dark/light mode
- Multiple languages

---

## 🆘 Need Help?

| Issue | Solution |
|-------|----------|
| Styles not loading | Clear cache, refresh |
| Timer not working | Check console, verify date |
| Email not saving | Check API, permissions |
| Responsive broken | Check viewport meta tag |
| Deploy fails | Check requirements, logs |

**Contact:** hello@buzzcraft.com

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| README.md | Full feature guide |
| SETUP_GUIDE.md | Installation & setup |
| DEPLOYMENT_GUIDE.md | How to deploy |
| This file | Quick reference |

**Read first:** SETUP_GUIDE.md

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| HTML version setup | 30 sec |
| Next.js setup | 5 min |
| Customize content | 15 min |
| Deploy HTML | 10 min |
| Deploy Next.js | 15 min |
| Add custom domain | 30 min |
| Full launch | 2 hours |

---

## 🎉 Launch Checklist

- [ ] All content updated
- [ ] Colors customized
- [ ] Links verified
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] Timer working
- [ ] Email form working
- [ ] Analytics configured
- [ ] SEO tags updated
- [ ] Deployed live
- [ ] Domain configured
- [ ] SSL/HTTPS working
- [ ] Backup created
- [ ] Share on social media
- [ ] Tell the world! 🚀

---

**Version:** 1.0
**Updated:** 2026-04-19
**Status:** Production Ready ✅

---

**Made with ❤️ by Buzzcraft Studios**
