# 🎨 Logo Ekleme Rehberi - D-Care24+

## 📌 Mevcut Durum

Şu anda proje **geçici SVG logo component** kullanıyor. Bu logo, kodda React component olarak tanımlanmış durumda (`/src/app/components/Logo.tsx`).

Kendi logo dosyanızı eklemek için aşağıdaki adımları izleyin.

---

## 🚀 Adım Adım Logo Ekleme

### **Yöntem 1: Public Klasörü (EN KOLAY - ÖNERİLEN)**

#### 1️⃣ Logo dosyanızı hazırlayın
- **Format**: SVG (en iyi), PNG veya WebP
- **Renk**: Beyaz/açık renkli (koyu arka plan için)
- **Boyut**: Yükseklik 48-80px arası
- **Şeffaflık**: PNG için transparan arka plan kullanın

#### 2️⃣ Logo dosyasını `/public/` klasörüne ekleyin
```
/public/
  ├── dcare-logo.svg    ← Logo dosyanızı buraya
  └── dcare-logo.png    ← veya PNG formatında
```

#### 3️⃣ Navbar componentini güncelleyin
**Dosya:** `/src/app/components/Navbar.tsx`

**Bulun (satır 76-83):**
```tsx
<Logo 
  className="h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105" 
  variant="light"
/>
```

**Değiştirin:**
```tsx
<img 
  src="/dcare-logo.svg" 
  alt="D-Care24+" 
  className="h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
/>
```

#### 4️⃣ Footer componentini güncelleyin
**Dosya:** `/src/app/components/Footer.tsx`

**Bulun (satır 36):**
```tsx
<Logo className="h-12 md:h-14 lg:h-16 mb-4" variant="light" />
```

**Değiştirin:**
```tsx
<img 
  src="/dcare-logo.svg" 
  alt="D-Care24+" 
  className="h-12 md:h-14 lg:h-16 mb-4 w-auto"
/>
```

---

### **Yöntem 2: Assets Klasörü (Import Ederek)**

#### 1️⃣ Assets klasörü oluşturun ve logoyu ekleyin
```
/src/
  └── assets/
      └── dcare-logo.svg
```

#### 2️⃣ Navbar'da import edin
**Dosya:** `/src/app/components/Navbar.tsx`

**En üste ekleyin:**
```tsx
import logo from '../../assets/dcare-logo.svg';
```

**Logo kısmını değiştirin:**
```tsx
<img 
  src={logo} 
  alt="D-Care24+" 
  className="h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
/>
```

---

### **Yöntem 3: Dış URL (Hızlı Test İçin)**

Sadece test için harici bir URL kullanabilirsiniz:

```tsx
<img 
  src="https://your-domain.com/images/logo.png" 
  alt="D-Care24+" 
  className="h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
/>
```

⚠️ **Uyarı:** Production'da mutlaka yerel dosya kullanın!

---

## 🎨 Logo Boyut Ayarları

Logo boyutu Tailwind CSS class'ları ile kontrol edilir:

### Navbar (Üst Menü)
```tsx
className="h-14 md:h-16 lg:h-20"
```
- **Mobile**: 56px (h-14)
- **Tablet**: 64px (h-16)  
- **Desktop**: 80px (h-20)

### Footer (Alt Kısım)
```tsx
className="h-12 md:h-14 lg:h-16"
```
- **Mobile**: 48px (h-12)
- **Tablet**: 56px (h-14)
- **Desktop**: 64px (h-16)

### Boyutu değiştirmek için:
```tsx
// Daha küçük logo
className="h-10 md:h-12 lg:h-14"

// Daha büyük logo
className="h-16 md:h-20 lg:h-24"
```

---

## 🛠️ Sunucuya Deploy Sonrası

### FTP/cPanel ile:
1. Projeyi build edin: `npm run build` veya `pnpm build`
2. `dist/` klasörü oluşur
3. Logo dosyanızı `dist/` klasörünün içine kopyalayın
4. `dist/` klasörünü sunucuya yükleyin (`public_html/` veya `www/`)

### Vercel/Netlify:
- `public/` klasöründeki dosyalar otomatik olarak deploy edilir
- Sadece `public/dcare-logo.svg` ekleyin, build sırasında otomatik kopyalanır

---

## 🎯 Logo Formatları ve Öneriler

| Format | Boyut | Kalite | Kullanım |
|--------|-------|--------|----------|
| **SVG** ✅ | En küçük | En iyi (vektör) | **ÖNERİLEN** |
| **PNG** ✅ | Orta | İyi (transparan) | Alternatif |
| **WebP** ✅ | Küçük | İyi (modern) | Alternatif |
| JPG ❌ | Orta | Kötü (arka plan) | Kullanmayın |

---

## 🔧 Koyu Logo İçin Çözüm

Eğer logonuz koyu renkliyse ve arka plan da koyu ise:

### CSS Filter ile:
```tsx
<img 
  src="/dcare-logo.svg" 
  alt="D-Care24+" 
  className="h-14 md:h-16 lg:h-20 w-auto invert brightness-100"
/>
```

### Veya logo dosyasını düzenleyin:
1. Figma, Illustrator veya Inkscape'te açın
2. Siyah/koyu renkleri beyaza çevirin (#FFFFFF)
3. "logo-light.svg" olarak kaydedin

---

## ✅ Test Checklist

Logo eklendikten sonra kontrol edin:

- [ ] Navbar'da logo görünüyor mu?
- [ ] Footer'da logo görünüyor mu?
- [ ] Mobile cihazda logo boyutu uygun mu?
- [ ] Tablet'te logo boyutu uygun mu?
- [ ] Desktop'ta logo boyutu uygun mu?
- [ ] Logo'nun kontrast oranı yeterli mi?
- [ ] Logo hover efekti (scale) çalışıyor mu?
- [ ] Logo tıklandığında ana sayfaya gidiyor mu?

---

## 🆘 Sorun Giderme

### Logo görünmüyor:
```tsx
// Browser console'da (F12) kontrol edin:
// 404 hatası var mı?
// Path doğru mu?
```

### Logo çok büyük/küçük:
```tsx
// Tailwind class'ları değiştirin:
className="h-10 md:h-12 lg:h-14"  // Küçült
className="h-16 md:h-20 lg:h-24"  // Büyült
```

### Logo bulanık:
- Yüksek çözünürlüklü dosya kullanın (min 2x boyut)
- Mümkünse SVG formatına geçin

---

## 📁 Düzenlenecek Dosyalar

Logo değişimi için bu 2 dosyayı düzenleyin:

1. **`/src/app/components/Navbar.tsx`** - Satır ~76-83
2. **`/src/app/components/Footer.tsx`** - Satır ~36

---

## 💡 İpucu

Logo component'ini tamamen kaldırmak isterseniz:

```bash
# Logo.tsx dosyasını silebilirsiniz (opsiyonel)
# Artık kullanılmıyor
/src/app/components/Logo.tsx
```

---

**Son Güncelleme:** March 2025  
**Hazırlayan:** D-Care24+ Development Team
