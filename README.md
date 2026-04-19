# D-Care24+ Website - Vanilla HTML/CSS/JS Version

🎉 **Pure HTML/CSS/JavaScript** - No build tools, no npm, no node_modules!

## 📁 File Structure

```
d-care24plus-vanilla/
├── index.html          # Main HTML file (all pages in one)
├── styles.css          # All custom styles
├── script.js           # All JavaScript (5-language system + interactions)
├── .htaccess          # Apache configuration (for SiteGround)
└── README.md          # This file
```

**Total Size:** < 500KB (without images)
**Dependencies:** Tailwind CDN only (loaded from CDN)

---

## ✨ Features

✅ **5-Language System** (DE/EN/SK/CZ/RU) - Fully functional
✅ **Hero Slider** - Auto-advance every 5 seconds
✅ **Sticky Header** - Appears on scroll
✅ **Price Calculator** - Real-time calculation
✅ **Contact Form** - Client-side validation
✅ **Legal Pages** - Impressum & Datenschutz (hash routing)
✅ **Smooth Animations** - Scroll effects & transitions
✅ **Fully Responsive** - Mobile, tablet, desktop
✅ **Medical Care Design** - Calm blue/teal color scheme

---

## 🚀 Deployment Options

### Option 1: SiteGround (or any cPanel hosting)

1. **Open cPanel File Manager**
2. Navigate to `public_html` folder
3. **Delete all old files** (if any)
4. **Upload these files:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.htaccess` ⚠️ **IMPORTANT!**

5. Done! Visit your domain.

### Option 2: Netlify

1. Drag & drop all files to Netlify
2. Done! Auto-deployed.

### Option 3: GitHub Pages

1. Create repo
2. Upload files
3. Enable GitHub Pages in Settings
4. Done!

### Option 4: Any Static Hosting

Just upload all 4 files. Works everywhere!

---

## 🌍 Language System

### How it works:

1. **Click language dropdown** in header (DE/EN/SK/CZ/RU)
2. **Instant translation** - all text updates immediately
3. **Saved preference** - uses localStorage
4. **URL support** - `?lang=en` works
5. **200+ translations** included

### Testing:

- Click `EN` → Should see English
- Click `SK` → Should see Slovak
- Click `CZ` → Should see Czech
- Click `RU` → Should see Russian
- Click `DE` → Back to German

**If not working:** Check browser console (F12) for errors.

---

## 🎨 Customization

### Change Colors:

Edit `styles.css` lines 8-13:

```css
:root {
    --primary-blue: #0891b2;    /* Main color */
    --secondary-teal: #14b8a6;  /* Accent color */
    --soft-gray: #f3f3f5;       /* Background */
    --dark-text: #1e293b;       /* Text color */
}
```

### Change Contact Info:

Edit `index.html` search for:
- `+43 732 123 456` (phone)
- `info@d-care24plus.at` (email)
- `Hauptstraße 123` (address)

### Add/Remove Languages:

Edit `script.js` → `translations` object (line 8)

---

## 🔧 Technical Details

### Browser Support:
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅
- IE11: ❌ (not supported)

### CDN Dependencies:
- Tailwind CSS 3.x (from cdn.tailwindcss.com)
- No jQuery required
- No React required
- No build step required

### Performance:
- Initial load: ~200KB (with CDN)
- Images: From Unsplash (external)
- No font files (system fonts)

---

## 📝 SEO Optimization

Already included in `index.html`:

```html
<meta name="description" content="...">
<meta name="keywords" content="Altenpflege, 24-Stunden-Pflege, ...">
<title>D-Care24+ | 24-Stunden-Pflege Oberösterreich</title>
```

**To improve:**
1. Add sitemap.xml
2. Add robots.txt
3. Enable SSL (HTTPS) in hosting
4. Submit to Google Search Console

---

## 🐛 Troubleshooting

### Language not changing?

1. Open browser console (F12)
2. Check for JavaScript errors
3. Try: `changeLanguage('en')` in console
4. If error → check `script.js` loaded correctly

### Legal pages (404)?

- **SiteGround:** Make sure `.htaccess` is uploaded!
- Check file permissions (should be 644)
- Test: Click "Impressum" in footer

### Slider not working?

- Check browser console for errors
- Make sure `script.js` is loaded
- Check internet connection (Unsplash images)

### Mobile menu not opening?

- Check `script.js` loaded
- Try different browser
- Clear cache

---

## 📞 Support

For issues or questions:
- Email: info@d-care24plus.at
- Phone: +43 732 123 456

---

## 📄 License

© 2024 D-Care24+. All rights reserved.

---

## 🎉 Changelog

**v1.0.0** (March 2024)
- ✅ Initial release
- ✅ 5-language system
- ✅ All features working
- ✅ Fully responsive
- ✅ No build tools needed

---

**Made with ❤️ for D-Care24+**
