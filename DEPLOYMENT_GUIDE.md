# Deployment Guide - Buzzcraft Studios

Complete guide to deploying both versions to popular hosting platforms.

## Table of Contents
1. HTML Version Deployment
2. Next.js Version Deployment
3. Platform-Specific Guides
4. Custom Domain Setup
5. SSL/HTTPS
6. Monitoring

---

## HTML Version - Deployment

### Requirements
- ✅ All three files: `index.html`, `styles.css`, `script.js`
- ✅ No build process needed
- ✅ Works anywhere

### Quick Deployment Checklist
- [ ] Test locally first
- [ ] Update company info
- [ ] Update social media links
- [ ] Set correct email
- [ ] Verify all links work
- [ ] Check mobile responsiveness

### File Validation
Before deploying, verify:
```bash
# Check files exist
ls -la *.html *.css *.js

# Or on Windows
dir index.html styles.css script.js
```

---

## Next.js Version - Deployment

### Build Process
```bash
cd nextjs

# Install dependencies fresh
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build

# Test production build locally
npm run start
```

### Production Checklist
- [ ] `npm run build` completes successfully
- [ ] `npm run start` works locally
- [ ] Test all functionality
- [ ] Check mobile responsiveness
- [ ] Verify API routes work
- [ ] Test email subscription

---

## Platform-Specific Guides

## 🚀 Vercel (Recommended for Next.js)

### Option 1: Git Integration (Easiest)
1. Push code to GitHub/GitLab/Bitbucket
2. Visit https://vercel.com
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! ✅

### Option 2: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd nextjs
vercel

# Production deployment
vercel --prod
```

**Vercel Next.js Benefits:**
- ✅ Automatic detection
- ✅ Zero config needed
- ✅ Optimizations included
- ✅ Preview deployments
- ✅ 100 Gbs bandwidth free
- ✅ Custom domains included

---

## 🎯 Netlify

### For HTML Version

**Option 1: Drag & Drop**
1. Visit https://netlify.com/drop
2. Drag all files to the area
3. Get live URL instantly ✅

**Option 2: Git Integration**
1. Push to GitHub
2. Connect repo to Netlify
3. Select folder: current directory
4. Click "Deploy"

### For Next.js Version

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd nextjs
netlify deploy --prod --functions=.next/functions
```

**Netlify Settings:**
- Build command: `next build`
- Publish directory: `.next`
- Functions directory: `.next/functions`

---

## 🌐 GitHub Pages (Free!)

### For HTML Version Only

1. Create GitHub repository
2. Push files to `main` branch
3. Go to repository Settings
4. Find "Pages" section
5. Set source to `main` branch
6. Set folder to `/ (root)`
7. Click "Save"
8. Your site: `https://username.github.io/repo-name`

**Note:** GitHub Pages serves static files only. HTML version works perfectly!

---

## 🔥 Firebase Hosting

### Installation
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting

# Choose your project
# Select public directory: `.` for HTML or `nextjs/.next` for Next.js
# Configure single-page app: No
```

### Deployment
```bash
# For HTML version
firebase deploy

# For Next.js, requires Firebase Functions setup
```

---

## ☁️ AWS S3 + CloudFront

### HTML Version via S3

1. Create S3 bucket
2. Upload `index.html`, `styles.css`, `script.js`
3. Enable static website hosting
4. Create CloudFront distribution
5. Point to S3 bucket
6. Add custom domain (Optional)

### AWS CLI Method
```bash
# Configure AWS CLI
aws configure

# Upload files
aws s3 cp . s3://your-bucket-name --recursive

# Create CloudFront distribution
# (via AWS Console)
```

---

## 🌍 Cloudflare Pages

### Git Integration
1. Push code to GitHub
2. Visit https://pages.cloudflare.com
3. Connect GitHub
4. Select repository
5. Configure build:
   - **Build command**: `npm run build`
   - **Build output**: `.next` (Next.js) or `.` (HTML)
6. Deploy! ✅

### Custom Domain
Connect your domain to Cloudflare nameservers.

---

## 💻 Traditional Web Hosting (cPanel)

### For HTML Version

1. **Via FTP/SFTP:**
   - Use FileZilla or similar
   - Connect to your hosting server
   - Upload all files to `public_html`
   - Visit your domain

2. **Via cPanel File Manager:**
   - Login to cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files
   - Visit your domain

### Required Files
```
public_html/
├── index.html
├── styles.css
└── script.js
```

---

## 🐳 Docker (Advanced)

### Dockerfile for HTML Version
```dockerfile
FROM nginx:alpine
COPY index.html styles.css script.js /usr/share/nginx/html/
EXPOSE 80
```

### Dockerfile for Next.js
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY nextjs/ .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Build & Run
```bash
docker build -t buzzcraft .
docker run -p 80:80 buzzcraft
```

---

## 💾 Database Integration

### For Email Subscriptions

#### MongoDB + Next.js
```bash
npm install mongoose
```

Edit `app/api/subscribe/route.ts`:
```typescript
import { connectDB } from '@/lib/db';
import Newsletter from '@/models/Newsletter';

export async function POST(request: NextRequest) {
  await connectDB();
  
  const { email } = await request.json();
  
  const subscriber = new Newsletter({ email });
  await subscriber.save();
  
  return NextResponse.json({ success: true });
}
```

#### Supabase (PostgreSQL)
```bash
npm install @supabase/supabase-js
```

Use Supabase REST API in your email subscription.

#### Firebase Firestore
```bash
npm install firebase-admin
```

Store emails in Firebase collection.

---

## 📊 Custom Domain Setup

### Step 1: Buy Domain
- GoDaddy
- Namecheap
- Google Domains
- Your hosting provider

### Step 2: Point to Hosting

**For Vercel:**
Add CNAME record:
```
www     CNAME     cname.vercel-dns.com
```

**For Netlify:**
Add CNAME record:
```
www     CNAME     your-site.netlify.app
```

**For GitHub Pages:**
Add CNAME record:
```
www     CNAME     username.github.io
```

### Step 3: Verify DNS
```bash
# Test DNS propagation
nslookup yourdomain.com
```

### Step 4: Set as Primary
Set your domain preference in hosting dashboard.

---

## 🔒 SSL/HTTPS

### Automatic (Recommended)
Most modern hosting includes free SSL:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Cloudflare: Automatic
- ✅ GitHub Pages: Automatic

### Manual Setup (If Needed)
1. Get certificate from Let's Encrypt (free)
2. Install via your hosting control panel
3. Or use Certbot:

```bash
sudo certbot certonly --standalone -d yourdomain.com
```

---

## 📈 Pre-Deployment Optimization

### For HTML Version
```bash
# Minify CSS (optional)
#Reduce file size

# Optimize images
# Use tools like ImageOptim or TinyPNG

# Test on mobile
# Use Chrome DevTools
```

### For Next.js Version
```bash
# Next.js automatically optimizes:
npm run build

# Test production build
npm run start

# Check bundle size
npm run build -- --analyze
```

---

## 🚨 Performance Monitoring

### Add Google Analytics

**HTML Version** - Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Next.js Version** - Edit `app/layout.tsx`:
```typescript
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads quickly
- [ ] All links work
- [ ] Countdown timer displays
- [ ] Email form works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Animations smooth
- [ ] No console errors
- [ ] Social links correct
- [ ] Analytics tracking
- [ ] SEO meta tags present
- [ ] SSL/HTTPS enabled
- [ ] Custom domain working
- [ ] Backup created
- [ ] Documentation updated

---

## 🔧 Troubleshooting

### Site Won't Load
- Check DNS propagation: https://dnschecker.org
- Verify files uploaded correctly
- Check file permissions (644 for files, 755 for directories)
- Review server error logs

### Styles Not Appearing
- Verify CSS file uploaded
- Check file path is correct
- Clear browser cache (Ctrl+Shift+Delete)
- Check CORS if loading from CDN

### Email Subscription Not Working
- Check API endpoint is live
- Verify email validation logic
- Test in browser console
- Check server logs

### Countdown Timer Broken
- Check JavaScript loaded
- Verify date format correct
- Check browser console
- Test in different browser

---

## 📞 Support

**Platform Support:**
- Vercel: https://vercel.com/support
- Netlify: https://support.netlify.com
- GitHub: https://support.github.com
- Firebase: https://firebase.google.com/support

**Contact:**
hello@buzzcraft.com

---

## 🎉 You're Live!

Congratulations! Your Buzzcraft Studios site is now live! 

**Next steps:**
1. Test thoroughly
2. Share on social media
3. Monitor analytics
4. Gather feedback
5. Plan launch event

---

**Made with ❤️ by Buzzcraft Studios**
