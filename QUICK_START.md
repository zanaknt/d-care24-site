# ⚡ Quick Start Guide - D-Care24+ Website

## 🚀 5 Dakikada Deploy Et!

### **Seçenek 1: Netlify (En Kolay)**

```bash
# 1. Netlify CLI kur
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Build yap
npm run build

# 4. Deploy et
netlify deploy --prod --dir=dist
```

✅ **Tamam!** URL alacaksın: `https://your-site.netlify.app`

---

### **Seçenek 2: Vercel (Hızlı)**

```bash
# 1. Vercel CLI kur
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

✅ **Tamam!** URL alacaksın: `https://your-site.vercel.app`

---

### **Seçenek 3: Drag & Drop (En Basit)**

1. **Local'de build yap:**
```bash
npm install
npm run build
```

2. **Netlify'ye git:**
   - https://app.netlify.com
   - "Add new site" → "Deploy manually"
   - `dist/` klasörünü sürükle-bırak

3. **Veya Vercel'e git:**
   - https://vercel.com
   - "Add New Project" → "Upload"
   - `dist/` klasörünü yükle

✅ **Tamam!** Site live!

---

## 📋 Deploy Öncesi Checklist (5 Dakika)

### ✅ **Zorunlu:**
- [ ] `npm install` çalıştır
- [ ] `npm run build` test et
- [ ] Build başarılı mı kontrol et

### 🔧 **Opsiyonel (Sonra da yapabilirsin):**
- [ ] Logo değiştir (rehber: `/LOGO_INSTRUCTIONS.md`)
- [ ] Email adresi kontrol et (`office@d-care24.at`)
- [ ] Telefon kontrol et (`+43 670 4047322`)
- [ ] Custom domain bağla (rehber: `/DEPLOYMENT_GUIDE.md`)

---

## 🌐 Custom Domain Bağlama (5 Dakika)

### **Netlify:**
1. Dashboard → "Domain management" → "Add custom domain"
2. DNS'e ekle:
```
A Record: @ → 75.2.60.5
CNAME: www → your-site.netlify.app
```

### **Vercel:**
1. Dashboard → "Settings" → "Domains" → Add
2. DNS'e ekle:
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

⏱️ **DNS propagation:** 5-30 dakika sürer

---

## 🐛 Sorun Giderme

### **Build hatası alıyorum:**
```bash
# Dependencies temiz kur:
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Site 404 veriyor:**
- `netlify.toml` veya `vercel.json` dosyası var mı kontrol et
- Zaten oluşturuldu, repo'da mevcut!

### **Images yüklenmiyor:**
- Production'da çalışacak (local dev'de yüklenmeyebilir)
- Unsplash CDN kullanılıyor

---

## 📞 Support

**Detaylı rehber:** `/DEPLOYMENT_GUIDE.md` (60+ sayfa)

**Sorun mu var?**
- Email: office@d-care24.at
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

---

## ✅ Deploy Sonrası Test

Site live olduktan sonra test et:

- [ ] Ana sayfa açılıyor mu?
- [ ] Dil değiştirici çalışıyor mu? (5 dil)
- [ ] Contact form çalışıyor mu?
- [ ] Booking calendar çalışıyor mu?
- [ ] Mobile responsive mu?
- [ ] HTTPS aktif mi?

---

## 🎉 TAMAM!

**Site live!** 🌐

Şimdi ne yapabilirsin:
1. ✅ Custom domain bağla
2. ✅ Logo değiştir
3. ✅ Google Analytics ekle
4. ✅ SEO optimize et

**Proje tamamen production ready!** 🚀

---

**Versiyon:** 1.0.0  
**Son Güncelleme:** March 2026  
**Durum:** ✅ Ready to Deploy
