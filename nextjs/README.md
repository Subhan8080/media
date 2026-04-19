# Buzzcraft Studios - Coming Soon Landing Page

A modern, high-converting "Coming Soon" landing page built with Next.js, TypeScript, and Tailwind CSS. Premium design with dark theme, vibrant accent colors, smooth animations, and full responsiveness.

## Features

✨ **Modern Design**
- Dark theme with vibrant purple and neon cyan accents
- Gradient overlays and glassmorphic components
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

🎯 **SEO Optimized**
- Meta tags and OpenGraph support
- Semantic HTML structure
- Fast performance with Next.js optimization

💌 **Email Subscription**
- Backend API route for email collection
- Email validation
- Duplicate prevention

📊 **Countdown Timer**
- Automatic countdown to launch date (60 days from now)
- Real-time updates

🎨 **Interactive Elements**
- Floating cards with hover effects
- Scroll animations
- Smooth transitions
- Service cards with feature lists

📱 **Full Sections**
- Navigation bar
- Hero section with CTA
- Coming soon badge
- Countdown timer
- About section with statistics
- 4 service cards
- Secondary CTA section
- Footer with social links

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Icons**: React Icons
- **Animations**: Tailwind CSS animations
- **Backend**: Next.js API Routes

## Getting Started

### Prerequisites
- Node.js 18+ or pnpm
- npm or yarn

### Installation

1. **Clone or extract the project**
```bash
cd nextjs
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── api/
│   └── subscribe/
│       └── route.ts          # Email subscription endpoint
├── components/
│   ├── Navigation.tsx        # Navbar component
│   ├── Hero.tsx              # Hero section
│   ├── ComingSoonBadge.tsx   # Badge section
│   ├── CountdownTimer.tsx    # Countdown timer
│   ├── About.tsx             # About section
│   ├── Services.tsx          # Services section
│   ├── CTA.tsx               # Call-to-action section
│   ├── Footer.tsx            # Footer
│   └── EmailForm.tsx         # Reusable email form
├── types/
│   └── index.ts              # TypeScript interfaces
├── globals.css               # Tailwind CSS + custom styles
├── layout.tsx                # Root layout
└── page.tsx                  # Home page

next.config.js              # Next.js config
tsconfig.json              # TypeScript config
tailwind.config.js        # Tailwind CSS config
postcss.config.js         # PostCSS config
package.json              # Dependencies
```

## Customization

### Change Colors
Edit `tailwind.config.js` in the `colors` section:
```javascript
colors: {
  primary: '#7c3aed',      // Purple
  accent: '#00d9ff',       // Cyan
  // Add more colors...
}
```

### Update Copy
Edit the component files:
- `Hero.tsx` - Main headline and tagline
- `Services.tsx` - Service descriptions
- `About.tsx` - About text and stats
- `Footer.tsx` - Footer information

### Change Launch Date
Edit `CountdownTimer.tsx`:
```typescript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 60); // Change 60 to your days
```

### Email Backend Integration
Replace the `api/subscribe/route.ts` with your email service:
```typescript
// Send to email service (SendGrid, Mailchimp, etc.)
// Save to database
// Send confirmation email
```

## Performance Optimizations

- ⚡ **Next.js Image Optimization** - Automatic image optimization
- 📦 **Code Splitting** - Automatic route-based splitting
- 🎯 **Tailwind CSS Purging** - Only loads used styles
- 🔄 **ISR** - Incremental Static Regeneration ready
- 📱 **Mobile-first** - Responsive by default

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Endpoints

### POST `/api/subscribe`
Subscribe to newsletter

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "message": "Successfully subscribed to our newsletter",
  "email": "user@example.com"
}
```

**Response (Error):**
```json
{
  "message": "Invalid email address" // or other error
}
```

## Environment Variables

Create a `.env.local` file if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Deployment

### Vercel (Recommended)
```bash
# Connect your repo and deploy
vercel
```

### Other Platforms
```bash
npm run build
# Deploy the .next folder
```

## SEO Metadata

Edit `app/layout.tsx` to customize:
- Page title
- Meta description
- OpenGraph tags
- Viewport settings

## Adding Custom Fonts

Fonts are already imported from Google Fonts in `globals.css`:
- Inter (body text)
- Poppins (headings)

To add more, update the CSS import URL.

## Development Tips

1. **Hot Reload** - Changes auto-reload while running `npm run dev`
2. **TypeScript** - Full type safety across components
3. **Tailwind Autocomplete** - Install "Tailwind CSS IntelliSense" extension
4. **Mobile Testing** - Use device mode in DevTools

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Build errors
```bash
npm run lint
npm run build
```

## Future Enhancements

- [ ] Newsletter database integration
- [ ] Email verification
- [ ] Analytics tracking
- [ ] Blog section
- [ ] Case studies
- [ ] Team member profiles
- [ ] Contact form
- [ ] Dark/light mode toggle

## License

MIT

## Support

For questions or issues, contact: hello@buzzcraft.com

---

**Made with ❤️ by Buzzcraft Studios**
