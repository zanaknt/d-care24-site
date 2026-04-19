# 🚀 Deployment Guide - Netlify & Vercel

## 📦 Proje Export & Hosting Rehberi

Bu rehber D-Care24+ web sitesini **Netlify** veya **Vercel**'de yayınlamak için gerekli adımları içerir.

---

## ✅ Export Öncesi Checklist

### 1️⃣ **Proje Hazırlık**

- [x] Tüm componentler çalışıyor
- [x] 5 dil desteği aktif (EN/DE/SK/CZ/RU)
- [x] Responsive tasarım tamamlandı
- [x] Booking sistemi çalışıyor
- [x] Contact form validation aktif
- [x] Hero background slider eklendi
- [x] Logo placeholder hazır (değiştirilebilir)
- [x] Legal pages (Privacy, Terms, Imprint) hazır
- [x] SEO meta tags mevcut

### 2️⃣ **Güncellenecek İçerikler (Opsiyonel)**

Deploy etmeden önce güncellemeniz gerekenler:

**Logo Değiştirme:**
- Dosya: `/src/imports/svg-wf1b7c4c0a.tsx`
- Rehber: `/LOGO_INSTRUCTIONS.md`

**Calendly/Booking Sistemi:**
- Şu an: Email tabanlı sistem (mailto:)
- Gelişmiş: EmailJS veya backend API
- Rehber: `/BOOKING_SYSTEM_INFO.md`

**Email Adresleri:**
- Contact form: `office@d-care24.at`
- Booking system: `office@d-care24.at`
- Footer: `office@d-care24.at`

**Telefon Numaraları:**
- Primary: `+43 670 4047322`
- Alternative: `+43 670 4047322`

---

## 🌐 Deployment Seçenekleri

### **Option 1: Netlify (Önerilen - En Kolay)**
### **Option 2: Vercel**
### **Option 3: GitHub Pages**
### **Option 4: Custom Server (VPS)**

---

## 🟢 OPTION 1: NETLIFY DEPLOYMENT

### **Neden Netlify?**
- ✅ Ücretsiz SSL certificate
- ✅ Otomatik CDN
- ✅ Form handling built-in
- ✅ Deploy preview'ları
- ✅ Kolay domain bağlama

### **Adım 1: Netlify Hesabı Oluştur**

1. **https://netlify.com** adresine git
2. "Sign Up" tıkla
3. GitHub, GitLab veya email ile kayıt ol

### **Adım 2: Projeyi Hazırla**

Projeyi local'de test et:

```bash
# Dependencies yükle
npm install

# Local development test
npm run dev

# Production build test
npm run build
```

Build başarılı olmalı! `dist/` klasörü oluşacak.

### **Adım 3A: Netlify CLI ile Deploy (Hızlı)**

```bash
# Netlify CLI kur
npm install -g netlify-cli

# Netlify login
netlify login

# Build yap
npm run build

# Deploy et
netlify deploy --prod --dir=dist
```

Komut çalıştıktan sonra:
1. Create new site seç
2. Site name ver (örn: `dcare24plus`)
3. Deploy tamamlanınca URL alacaksın: `https://dcare24plus.netlify.app`

### **Adım 3B: Netlify Dashboard ile Deploy (Drag & Drop)**

1. **https://app.netlify.com** → "Add new site" → "Deploy manually"
2. Local'de `npm run build` çalıştır
3. `dist/` klasörünü Netlify'a sürükle-bırak
4. Deploy otomatik başlayacak (1-2 dakika)
5. Site URL'i alacaksın: `https://your-site-name.netlify.app`

### **Adım 3C: GitHub ile Otomatik Deploy (En İyi)**

1. Projeyi GitHub'a push'la:
```bash
git init
git add .
git commit -m "Initial commit - D-Care24+ website"
git branch -M main
git remote add origin https://github.com/your-username/dcare24plus.git
git push -u origin main
```

2. **Netlify Dashboard:**
   - "Add new site" → "Import an existing project"
   - "Deploy with GitHub" seç
   - Repository'yi seç: `dcare24plus`
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
     - **Node version:** 18 (veya üstü)
   - "Deploy site" tıkla

3. **Otomatik Deploy:**
   - Her GitHub push'unda otomatik deploy
   - Branch preview'ları
   - PR deploy preview'ları

### **Adım 4: Custom Domain Bağlama**

Domain'in varsa (örn: `www.d-care24.at`):

1. Netlify Dashboard → Site → "Domain management"
2. "Add custom domain" → `www.d-care24.at` gir
3. DNS ayarlarını yapılandır:

**Seçenek A: Netlify DNS (Önerilen)**
```
Nameservers:
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net
```

**Seçenek B: A Record**
```
Type: A
Host: @
Value: 75.2.60.5

Type: CNAME
Host: www
Value: your-site-name.netlify.app
```

4. SSL otomatik aktif olacak (Let's Encrypt)

### **Adım 5: Netlify Form Setup (Opsiyonel)**

Contact form'u Netlify Forms ile bağla:

**Dosya:** `/src/app/components/ContactSection.tsx`

Form tag'ine ekle:
```tsx
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* Mevcut form fields */}
</form>
```

Netlify Dashboard'da form submissions görünecek!

### **Netlify Ortam Değişkenleri (Environment Variables)**

Eğer API key'lerin varsa:

1. Netlify Dashboard → Site → "Site settings" → "Environment variables"
2. Yeni variable ekle:
   - `VITE_API_KEY` = `your-api-key`
   - `VITE_EMAIL_SERVICE_ID` = `your-emailjs-id`

Code'da kullan:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 🔷 OPTION 2: VERCEL DEPLOYMENT

### **Neden Vercel?**
- ✅ Next.js optimize
- ✅ Edge functions
- ✅ Analytics built-in
- ✅ Hızlı deploy
- ✅ Otomatik preview

### **Adım 1: Vercel Hesabı**

1. **https://vercel.com** adresine git
2. "Sign Up" → GitHub ile kayıt ol

### **Adım 2A: Vercel CLI ile Deploy**

```bash
# Vercel CLI kur
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### **Adım 2B: Vercel Dashboard ile Deploy**

1. GitHub'a projeyi push'la (yukarıdaki gibi)
2. **Vercel Dashboard:**
   - "Add New Project"
   - GitHub repository seç
   - Import
   - Build settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - "Deploy" tıkla

3. **URL alacaksın:**
   - `https://dcare24plus.vercel.app`

### **Adım 3: Custom Domain (Vercel)**

1. Vercel Dashboard → Project → "Settings" → "Domains"
2. `www.d-care24.at` ekle
3. DNS Records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **Vercel Environment Variables**

Vercel Dashboard → Project → "Settings" → "Environment Variables"

---

## 📋 BUILD KOMUTLARI & TROUBLESHOOTING

### **Build Test (Local)**

```bash
# 1. Dependencies kur
npm install

# 2. Build yap
npm run build

# 3. Build output kontrol et
ls -la dist/

# 4. Local preview
npx vite preview
```

Build başarılı olursa `dist/` klasöründe şunlar olmalı:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── ...
```

### **Common Build Errors & Çözümleri**

#### ❌ **Error: "Module not found"**
**Sebep:** Eksik dependency  
**Çözüm:**
```bash
npm install
# veya
npm ci  # Clean install
```

#### ❌ **Error: "Failed to resolve import"**
**Sebep:** Yanlış import path  
**Çözüm:** Import path'leri kontrol et (case-sensitive)

#### ❌ **Error: "Vite build failed"**
**Sebep:** TypeScript hatası  
**Çözüm:** TypeScript errors'ı düzelt

#### ❌ **Error: "Out of memory"**
**Sebep:** Node memory limit  
**Çözüm:**
```bash
# package.json'a ekle:
"scripts": {
  "build": "NODE_OPTIONS=--max-old-space-size=4096 vite build"
}
```

### **Node Version Uyumluluk**

Minimum Node version: **18.x**

Check Node version:
```bash
node --version
```

Update Node (eğer eski ise):
```bash
# nvm ile:
nvm install 18
nvm use 18

# veya https://nodejs.org indirip kur
```

---

## ⚙️ DEPLOYMENT CONFIGURATION FILES

### **Netlify Config**

**Dosya oluştur:** `/netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### **Vercel Config**

**Dosya oluştur:** `/vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔒 SECURITY & PERFORMANCE

### **Security Headers (Netlify)**

`netlify.toml` içine ekle:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

### **Performance Optimization**

**1. Image Optimization:**
- Unsplash görselleri zaten optimize
- Custom görseller eklersen: WebP format kullan

**2. Lazy Loading:**
- Zaten uygulanmış (React lazy, code splitting)

**3. Caching:**
- Netlify/Vercel otomatik CDN cache
- Static assets otomatik cache'lenir

**4. Compression:**
- Gzip/Brotli otomatik aktif (Netlify & Vercel)

---

## 📊 POST-DEPLOYMENT CHECKLIST

Deploy ettikten sonra test et:

### **Functionality Test:**
- [ ] Homepage yükleniyor mu?
- [ ] Navigation çalışıyor mu?
- [ ] Language switcher çalışıyor mu? (5 dil)
- [ ] Contact form çalışıyor mu?
- [ ] Booking calendar çalışıyor mu?
- [ ] Email links açılıyor mu? (mailto:)
- [ ] Phone links çalışıyor mu? (tel:)
- [ ] Legal pages açılıyor mu? (Privacy, Terms, Imprint)
- [ ] Hero background slider çalışıyor mu?
- [ ] Scroll animations smooth mu?

### **Mobile Test:**
- [ ] Mobile responsive mu?
- [ ] Touch interactions çalışıyor mu?
- [ ] Forms mobile'da kullanılabiliyor mu?
- [ ] Images yükleniyor mu?

### **Browser Test:**
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

### **Performance Test:**
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev
  - Target: 90+ mobile, 95+ desktop
- [ ] GTmetrix: https://gtmetrix.com
- [ ] WebPageTest: https://webpagetest.org

### **SEO Test:**
- [ ] Meta tags mevcut mu?
- [ ] Open Graph tags var mı?
- [ ] Sitemap gerekli mi? (isteğe bağlı)

---

## 🌍 CUSTOM DOMAIN SETUP (Detaylı)

### **Domain Registrar'da DNS Ayarları**

Eğer domain'in başka yerdeyse (GoDaddy, Namecheap, etc.):

#### **Netlify için:**

**A Record:**
```
Type: A
Host: @
Value: 75.2.60.5
TTL: Automatic (or 3600)
```

**CNAME Record:**
```
Type: CNAME
Host: www
Value: your-site-name.netlify.app
TTL: Automatic (or 3600)
```

#### **Vercel için:**

**A Record:**
```
Type: A
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**CNAME Record:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### **SSL Certificate**

- Netlify & Vercel otomatik SSL sağlar (Let's Encrypt)
- Deploy'dan 5-10 dakika sonra aktif olur
- `https://` otomatik çalışacak

---

## 📧 EMAIL SETUP (Contact Form)

### **Option 1: Netlify Forms (Ücretsiz)**

Netlify Forms kullanıyorsanız:

1. Netlify Dashboard → Site → "Forms"
2. Form submissions burada görünecek
3. Email notifications:
   - "Form notifications" → "Email notification"
   - `office@d-care24.at` ekle

### **Option 2: EmailJS (Daha Gelişmiş)**

EmailJS backend olmadan email gönderir:

1. **https://emailjs.com** → Hesap aç
2. Email service bağla (Gmail, Outlook, etc.)
3. Template oluştur
4. Code'a ekle:

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'office@d-care24.at',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      'YOUR_PUBLIC_KEY'
    );
    // Success handling
  } catch (error) {
    // Error handling
  }
};
```

4. Environment variables ekle (Netlify/Vercel):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

---

## 🔄 CI/CD & AUTOMATIC DEPLOYMENTS

### **GitHub Actions (Opsiyonel)**

Otomatik test + deploy için:

**Dosya oluştur:** `/.github/workflows/deploy.yml`

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

GitHub Secrets ekle:
- `NETLIFY_AUTH_TOKEN` (Netlify User Settings → Applications → Personal access tokens)
- `NETLIFY_SITE_ID` (Netlify Site Settings → Site details → API ID)

---

## 🌐 MULTI-LANGUAGE SEO

5 dil için SEO optimize etmek için:

### **Hreflang Tags Ekle**

`index.html` içine:

```html
<link rel="alternate" hreflang="en" href="https://www.d-care24.at/" />
<link rel="alternate" hreflang="de" href="https://www.d-care24.at/" />
<link rel="alternate" hreflang="sk" href="https://www.d-care24.at/" />
<link rel="alternate" hreflang="cs" href="https://www.d-care24.at/" />
<link rel="alternate" hreflang="ru" href="https://www.d-care24.at/" />
<link rel="alternate" hreflang="x-default" href="https://www.d-care24.at/" />
```

### **Google Search Console**

1. https://search.google.com/search-console
2. Property ekle: `www.d-care24.at`
3. Ownership verify et
4. Sitemap submit et (opsiyonel)

---

## 📈 ANALYTICS SETUP (Opsiyonel)

### **Google Analytics**

1. https://analytics.google.com → Property oluştur
2. Tracking ID al (G-XXXXXXXXXX)
3. `index.html` içine ekle:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **Vercel Analytics**

Vercel Dashboard → Project → "Analytics" → Enable

Otomatik çalışır, code değişikliği gerekmez!

---

## 🆘 TROUBLESHOOTING

### **Site 404 Error Veriyor**

**Sebep:** SPA routing problemi  
**Çözüm:** `netlify.toml` veya `vercel.json` ekle (yukarıda)

### **Images Yüklenmiyor**

**Sebep:** Unsplash rate limit veya CORS  
**Çözüm:** Production'da genelde çalışır, local'de değil

### **Contact Form Submit Olmuyor**

**Sebep:** CORS veya email client açılmıyor  
**Çözüm:** EmailJS kullan veya Netlify Forms

### **Build Time Çok Uzun**

**Sebep:** Büyük dependencies  
**Çözüm:** 
- `npm run build` optimize et
- Unused packages kaldır

### **Slow Page Load**

**Sebep:** Büyük images  
**Çözüm:**
- Unsplash images zaten optimize
- Lazy loading zaten aktif
- CDN cache kullan (otomatik)

---

## ✅ FINAL CHECKLIST - PRODUCTION READY

Tüm bunları yaptıysan **DEPLOY HAZIRSIN!** 🚀

- [x] Local build başarılı (`npm run build`)
- [x] Local preview çalışıyor (`npx vite preview`)
- [x] Logo güncellendi (opsiyonel)
- [x] Email adresleri doğru (`office@d-care24.at`)
- [x] Telefon numaraları doğru (`+43 670 4047322`)
- [x] Netlify veya Vercel hesabı oluşturuldu
- [x] Deploy yapıldı
- [x] Site açılıyor
- [x] Tüm functionality test edildi
- [x] Mobile responsive test edildi
- [x] Custom domain bağlandı (opsiyonel)
- [x] SSL aktif (https)
- [x] Google Analytics eklendi (opsiyonel)

---

## 🎉 CONGRATULATIONS!

**D-Care24+ artık live!** 🌐

**Yararlı Linkler:**
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Router Docs: https://reactrouter.com

**Support:**
- GitHub Issues: (eğer repo public ise)
- Email: office@d-care24.at

---

**Son Güncelleme:** March 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
