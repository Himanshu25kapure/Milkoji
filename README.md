# Milkoji - Premium Desi Ghee Website

A highly professional, modern, business-ready static website for Milkoji, a local Indian desi ghee brand. Built with pure HTML, CSS, and JavaScript for instant loading and optimal performance.

## 🎯 Project Overview

This is a production-grade, single-page static website designed to showcase premium quality and build trust with potential customers. The site features advanced interactions, smooth animations, and a sophisticated Indian aesthetic that stands out from generic templates.

## ✨ Key Features

### Design & Aesthetics
- **Premium Indian Aesthetic**: Warm earthy colors (cream, brown, saffron, gold)
- **Professional Typography**: Playfair Display + Inter font pairing
- **Smooth Animations**: Intersection Observer for scroll-triggered effects
- **Micro-interactions**: Hover effects, button feedback, smooth transitions
- **Responsive Design**: Mobile-first approach, perfect on all devices

### Sections & Content
1. **Hero Section**: High-impact introduction with trust badge
2. **Why Milkoji**: 6 trust-building feature cards
3. **Products**: Professional product cards with WhatsApp ordering
4. **Process Timeline**: Visual 5-step production process
5. **Testimonials**: Auto-sliding customer reviews
6. **FAQ**: Accordion-style frequently asked questions
7. **Contact**: Information cards + embedded Google Maps
8. **Footer**: Complete with branding and links

### Interactive Features
- ✅ Sticky navigation with scroll effects
- ✅ Mobile-responsive hamburger menu
- ✅ Smooth scroll to sections
- ✅ FAQ accordion (expand/collapse)
- ✅ Auto-playing testimonial slider with controls
- ✅ Floating WhatsApp button with pulse animation
- ✅ Scroll-triggered animations
- ✅ Active section highlighting

### Technical Excellence
- ✅ 100% Static (HTML, CSS, JavaScript only)
- ✅ No backend, no database required
- ✅ Instant loading with optimized code
- ✅ SEO-friendly semantic HTML
- ✅ LocalBusiness schema markup (JSON-LD)
- ✅ Lazy-loaded images
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Cross-browser compatible

## 📁 File Structure

```
milkoji/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete CSS with custom properties
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in your browser:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just double-click index.html
```

### 2. Deploy to Netlify

1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop the project folder
3. Done! Your site is live.

**OR via Git:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Then connect repository in Netlify dashboard.

### 3. Deploy to Cloudflare Pages

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect repository
4. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy!

### 4. Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from branch
4. Branch: `main`, folder: `/ (root)`
5. Save and wait for deployment

## 🎨 Customization Guide

### Update Contact Information

Replace all instances of `+919876543210` with your phone number:

```html
<!-- In nav header -->
<a href="tel:+919876543210">

<!-- In WhatsApp links -->
<a href="https://wa.me/919876543210?text=...">

<!-- In contact section -->
<!-- In footer -->
```

**Find and replace**: `+919876543210` → `YOUR_NUMBER`

### Update Business Address

```html
<!-- Contact section -->
<p class="info__text">123 Dairy Farm Road<br>Pune, Maharashtra 411001</p>

<!-- Footer -->
<span>Pune, Maharashtra 411001</span>

<!-- Schema markup in <head> -->
```

### Update Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in the Contact section

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-cream: #FFF8E7;        /* Background */
    --color-saffron: #FF9933;      /* Primary brand color */
    --color-brown: #8B4513;        /* Text and accents */
    --color-gold: #D4AF37;         /* Highlights */
    /* ... */
}
```

### Add/Remove Products

Duplicate a `.product__card` in the Products section:

```html
<div class="product__card">
    <!-- Product content -->
</div>
```

Update:
- Product image
- Product name
- Size
- Description
- WhatsApp link message

### Modify Testimonials

Edit testimonial cards in the Testimonials section:

```html
<div class="testimonial__card">
    <div class="testimonial__rating">★★★★★</div>
    <p class="testimonial__text">...</p>
    <div class="testimonial__author">
        <div class="author__avatar">XX</div>
        <div class="author__info">
            <h4 class="author__name">Name</h4>
            <p class="author__location">Location</p>
        </div>
    </div>
</div>
```

## 📱 WhatsApp Integration

### Pre-filled Messages

The website uses custom WhatsApp messages for different products:

```javascript
// Format:
https://wa.me/PHONE?text=MESSAGE

// Example:
https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20Milkoji%20Pure%20Desi%20Ghee%20500ml
```

**URL Encoding:**
- Space: `%20`
- Comma: `%2C`
- Line break: `%0A`

### Customizing Messages

Update the `text=` parameter in WhatsApp links:

```html
<a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20Milkoji%20Pure%20Desi%20Ghee%20500ml.%20Please%20share%20the%20price%20and%20delivery%20details.">
```

## 🔍 SEO Optimization

The site includes:

- ✅ Semantic HTML5 elements
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags (social sharing)
- ✅ Structured data (LocalBusiness schema)
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ Alt text for all images
- ✅ Fast loading times

### Update SEO Meta Tags

In `<head>`:

```html
<meta name="description" content="YOUR DESCRIPTION">
<meta name="keywords" content="YOUR, KEYWORDS">
<meta property="og:title" content="YOUR TITLE">
<meta property="og:description" content="YOUR DESCRIPTION">
```

### Update Schema Markup

Edit the JSON-LD in `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Milkoji",
  "address": { ... },
  "telephone": "+919876543210",
  ...
}
```

## 🎯 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+

### Optimization Features:
- CSS custom properties (no preprocessor needed)
- Minimal JavaScript (< 5KB gzipped)
- Lazy-loaded images
- Debounced scroll handlers
- No external dependencies (except fonts)

## 🌐 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📸 Adding Your Own Images

Replace placeholder images with your product photos:

```html
<!-- Current -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Replace with -->
<img src="images/ghee-jar.jpg" alt="Milkoji Desi Ghee">
```

### Recommended Image Sizes:
- **Hero image**: 800×1000px
- **Product images**: 600×600px
- **About image**: 600×700px
- **Optimized format**: WebP or JPEG
- **Compression**: Use tools like TinyPNG

## 🔧 Troubleshooting

### Mobile menu not working?
Check that all IDs match:
- `navToggle` → `id="navToggle"`
- `navMenu` → `id="navMenu"`
- `navClose` → `id="navClose"`

### WhatsApp button not showing?
Verify the WhatsApp float button HTML is at the bottom of `<body>`

### Animations not working?
Ensure `script.js` is loaded at the bottom of `<body>`

### Google Maps not loading?
Check:
1. iframe `src` URL is valid
2. No browser content blockers
3. Internet connection

## 📞 Support

For questions about customization or deployment:
1. Check this README first
2. Review code comments in each file
3. Test in different browsers

## 📄 License

This website template is provided as-is for Milkoji. Feel free to customize and deploy.

---

**Built with ❤️ for Milkoji - Pure Desi Ghee**

*A premium, production-ready website that impresses customers and drives sales.*
