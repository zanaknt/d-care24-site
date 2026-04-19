# 📅 Booking System - Özel Takvim & Randevu Sistemi

## ✅ TAMAMEN ÇALIŞIR DURUMDA!

Calendly yerine **kendi özel booking sistemimiz** geliştirildi ve projeye entegre edildi.

---

## 🎨 Önemli Not: Background Slider

**Background slider artık Hero section'da!**  
Arka plan görselleri (24-saat bakım fotoğrafları) **ilk ana bölümde** (Hero section) gösteriliyor.  
- 3 profesyonel care görseli  
- 5 saniye otomatik değişim  
- Daha belirgin görünüm (65-75% overlay)  
- Smooth fade + zoom animasyonları

Booking section temiz ve sade kaldı (sadece decorative elements).

---

## 🎯 Sistem Özellikleri

### ✨ Müşteri Deneyimi (3 Adımlı Süreç)

#### **Adım 1: Tarih Seçimi**
- 📅 Otomatik oluşturulan 30 günlük takvim
- 🚫 Hafta sonları otomatik atlanır (sadece hafta içi)
- ✅ "Today" badge ile bugünü vurgular
- 📱 Responsive grid layout (mobile uyumlu)

#### **Adım 2: Saat Seçimi**
- ⏰ Çalışma saatleri: 09:00 - 17:30
- 📊 30 dakikalık time slot'lar
- 🔄 Geri dönme seçeneği (← Change Date)
- 🎨 Hover efektleri ve animasyonlar

#### **Adım 3: İletişim Bilgileri**
- 👤 Ad Soyad (zorunlu)
- 📧 Email (zorunlu + validation)
- 📞 Telefon (zorunlu + validation)
- 💬 Ek notlar (opsiyonel)
- ✅ Form validation

#### **Başarı Ekranı**
- ✅ Konfirmasyon mesajı
- 📋 Seçilen tarih/saat özeti
- 🔄 "Book Another Appointment" butonu

---

## 📧 Email Sistemi

### Nasıl Çalışır?

Müşteri "Confirm Booking" butonuna tıkladığında:

1. **Mailto: Link Açılır**
   - Kullanıcının default email client'ı açılır (Gmail, Outlook, Apple Mail, etc.)
   - Email otomatik olarak doldurulur:
     - **To:** `office@d-care24.at`
     - **Subject:** `New Consultation Booking - [Müşteri Adı]`
     - **Body:** Tüm randevu bilgileri formatlanmış şekilde

2. **Email İçeriği**
```
New Consultation Booking Request

Date: Montag, 25. März 2026
Time: 14:00

Client Information:
- Name: Max Mustermann
- Email: max@example.com
- Phone: +43 123 456789
- Message: Ich brauche Pflege für meine Mutter

Please confirm this appointment with the client.
```

3. **Müşteri Email Gönderir**
   - Müşteri email'i kontrol edip "Send" tuşuna basar
   - Email doğrudan `office@d-care24.at` adresine gönderilir

4. **Başarı Ekranı**
   - Kullanıcı success mesajı görür
   - 24 saat içinde yanıt verileceği belirtilir

---

## 🔧 Teknik Detaylar

### Tarih Oluşturma (generateAvailableDates)
```typescript
// Sonraki 30 iş günü oluşturur
// Cumartesi ve Pazar atlanır
const dates: Date[] = [];
const today = new Date();
// ... weekend skip logic
```

### Saat Slot Oluşturma (generateTimeSlots)
```typescript
// 09:00 - 17:30 arası, 30 dakikalık aralıklar
['09:00', '09:30', '10:00', ... '17:00', '17:30']
```

### Email Oluşturma
```typescript
const emailSubject = `New Consultation Booking - ${formData.name}`;
const emailBody = `...formatlanmış bilgiler...`;

window.location.href = `mailto:office@d-care24.at?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
```

---

## 🎨 UI/UX Özellikleri

### Step Indicator (İlerleme Göstergesi)
```
[1] Date  →  [2] Time  →  [3] Info
```
- Tamamlanan adımlarda ✓ check mark
- Aktif adım cyan renkte vurgulanır
- Responsive (mobile'da sadece numaralar)

### Animasyonlar
- ✅ Motion/Framer animations
- ✅ Hover effects
- ✅ Smooth transitions
- ✅ Success confetti effect (scale animation)

### Custom Scrollbar
```css
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  background: rgba(0, 188, 212, 0.5);
}
```

---

## 📱 Mobile Responsive

### Breakpoints:
- **Mobile:** 2 column tarih grid
- **Tablet:** 3 column tarih grid
- **Desktop:** 4 column tarih grid

### Time Slots:
- **Mobile:** 3 columns
- **Tablet:** 4 columns
- **Desktop:** 5 columns

### Form:
- Full width responsive
- Touch-friendly input fields
- Keyboard popup uyumlu

---

## ⚙️ Özelleştirme Seçenekleri

### Çalışma Saatlerini Değiştirme

**Dosya:** `/src/app/components/BookingSection.tsx` (satır ~47-58)

```typescript
// Şu anki: 09:00 - 17:30
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let hour = 9; hour <= 17; hour++) {  // ← Başlangıç ve bitiş saati
    for (let minute = 0; minute < 60; minute += 30) {  // ← Interval (30 dk)
      // ...
    }
  }
  return slots;
};
```

**Örnek Değişiklikler:**
```typescript
// 08:00 - 20:00 çalışma saati:
for (let hour = 8; hour <= 19; hour++) {

// 15 dakikalık slot'lar:
for (let minute = 0; minute < 60; minute += 15) {

// 1 saatlik slot'lar:
for (let minute = 0; minute < 60; minute += 60) {
```

### Takvim Gün Sayısını Değiştirme

**Dosya:** `/src/app/components/BookingSection.tsx` (satır ~28)

```typescript
while (daysAdded < 30) {  // ← 30 gün gösterir
```

**Değiştirin:**
```typescript
while (daysAdded < 60) {  // 60 gün gösterir
while (daysAdded < 14) {  // 14 gün gösterir
```

### Hafta Sonlarını Dahil Etme

**Dosya:** `/src/app/components/BookingSection.tsx` (satır ~38-40)

```typescript
// Şu anki: Weekend'leri atla
if (dayOfWeek !== 0 && dayOfWeek !== 6) {
  dates.push(date);
}
```

**Değiştirin:**
```typescript
// Weekend'leri dahil et:
dates.push(date);  // if condition'ı kaldır
```

### Email Alıcısını Değiştirme

**Dosya:** `/src/app/components/BookingSection.tsx` (satır ~114)

```typescript
window.location.href = `mailto:office@d-care24.at?subject=...`;
```

**Değiştirin:**
```typescript
// Farklı email:
window.location.href = `mailto:info@dcare24.at?subject=...`;

// CC ile kopyala:
window.location.href = `mailto:office@d-care24.at?cc=manager@dcare24.at&subject=...`;

// BCC ile gizli kopya:
window.location.href = `mailto:office@d-care24.at?bcc=admin@dcare24.at&subject=...`;
```

---

## 🚀 Backend Entegrasyonu (Gelişmiş)

Şu anda **mailto:** kullanıyor (frontend only). Eğer otomatik email göndermek isterseniz:

### Seçenek 1: EmailJS (Ücretsiz)

1. **EmailJS Hesabı:** https://emailjs.com
2. **Template Oluştur**
3. **Kodu Güncelle:**

```typescript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validate() && selectedDate && selectedTime) {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'office@d-care24.at',
          client_name: formData.name,
          client_email: formData.email,
          client_phone: formData.phone,
          booking_date: formatDate(selectedDate),
          booking_time: selectedTime,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );
      setStep('success');
    } catch (error) {
      console.error('Email failed:', error);
    }
  }
};
```

### Seçenek 2: Backend API

**Create API Endpoint:**
```typescript
// POST /api/bookings
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validate() && selectedDate && selectedTime) {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: selectedDate,
        time: selectedTime,
        ...formData
      })
    });
    
    if (response.ok) {
      setStep('success');
    }
  }
};
```

### Seçenek 3: Supabase (Database + Email)

1. Supabase projesi oluştur
2. `bookings` table oluştur
3. Email trigger ayarla
4. Kodu güncelle

---

## 📊 Database Schema (Opsiyonel)

Eğer randevuları database'e kaydetmek isterseniz:

```sql
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## ✅ Test Checklist

Booking sistemini test edin:

### Desktop Test:
- [ ] Tarih seçimi çalışıyor mu?
- [ ] Saat seçimi çalışıyor mu?
- [ ] Form validation çalışıyor mu?
- [ ] Email client açılıyor mu?
- [ ] Success ekranı görünüyor mu?
- [ ] "Book Another" reset yapıyor mu?
- [ ] Step indicator doğru çalışıyor mu?
- [ ] Hover effects çalışıyor mu?

### Mobile Test:
- [ ] Touch scroll çalışıyor mu?
- [ ] Grid responsive mu?
- [ ] Form inputları keyboard popup yapıyor mu?
- [ ] Animasyonlar smooth mu?
- [ ] Email app açılıyor mu? (Gmail, etc.)

### Edge Cases:
- [ ] Boş form submit edilemiyor mu?
- [ ] Email validation çalışıyor mu?
- [ ] Telefon validation çalışıyor mu?
- [ ] Geri butonu state'i sıfırlıyor mu?

---

## 🐛 Sorun Giderme

### Email Client Açılmıyor:
**Sebep:** Default email client ayarlı değil  
**Çözüm:** Gmail, Outlook veya Apple Mail kurulu ve default olmalı

### Mobile'da Email Açılmıyor:
**Sebep:** Mailto: link mobile browser'da çalışmıyor  
**Çözüm:** EmailJS veya backend API kullanın

### Tarihler Yanlış Gösteriliyor:
**Sebep:** Timezone farkı  
**Çözüm:** 
```typescript
// Europe/Vienna timezone kullan:
const formatDate = (date: Date) => {
  return date.toLocaleDateString('de-AT', { 
    timeZone: 'Europe/Vienna',
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
```

---

## 🎯 Gelecek Geliştirmeler (Opsiyonel)

### Kolay:
- [ ] Calendar view (aylık takvim gösterimi)
- [ ] Time zone selector
- [ ] Multi-language support (tarih formatları)

### Orta:
- [ ] Email notification sistemi (EmailJS)
- [ ] Admin panel (randevuları görüntüleme)
- [ ] Google Calendar entegrasyonu

### Gelişmiş:
- [ ] Database integration (Supabase/PostgreSQL)
- [ ] SMS notification (Twilio)
- [ ] Video call integration (Zoom/Meet)
- [ ] Payment gateway (opsiyonel deposit)

---

## 📚 Kod Yapısı

**Dosya:** `/src/app/components/BookingSection.tsx`  
**Satır Sayısı:** ~600 lines  
**Dependencies:** Motion, Lucide React, LanguageContext

**State Management:**
```typescript
const [step, setStep] = useState<'date' | 'time' | 'info' | 'success'>('date');
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const [selectedTime, setSelectedTime] = useState<string | null>(null);
const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
const [errors, setErrors] = useState<{ [key: string]: string }>({});
```

---

## 💡 Kullanım İpuçları

### Office Email'de:
1. Gmail kullanıyorsanız, filtre oluşturun:
   - From: contains "consultation"
   - Label: "Bookings"
   - Star it

2. Template yanıt hazırlayın:
   ```
   Merhaba [Müşteri Adı],

   Randevu talebiniz alınmıştır:
   Tarih: [Tarih]
   Saat: [Saat]

   Randevunuz onaylanmıştır. 15 dakika önce hazır olmanızı rica ederiz.

   İyi günler,
   D-Care24+ Team
   ```

### Müşteri Deneyimi İçin:
- Email confirmation template'i hazırlayın
- 24 saat içinde yanıt verin
- SMS reminder gönderin (Twilio)

---

**Son Güncelleme:** March 2026  
**Geliştirme:** D-Care24+ Custom Booking System  
**Durum:** ✅ Production Ready