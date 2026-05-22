# 🎬 CineGlass Movie Showcase

> A futuristic, glassmorphism-powered cinematic showcase built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no backends, no API keys.

![CineGlass Preview](https://img.shields.io/badge/Status-Live-00e5cc?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📖 Deskripsi

**CineGlass** adalah sebuah landing page Movie Showcase modern yang menampilkan koleksi film dalam tampilan antarmuka glassmorphism dengan dark theme. Proyek ini sepenuhnya statis — semua data film disimpan langsung di dalam file JavaScript tanpa database, tanpa backend, dan tanpa API key apapun. Aman untuk di-push ke GitHub public repository dan di-deploy ke GitHub Pages.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🔮 Glassmorphism UI | Card transparan dengan efek blur dan border glass |
| 🌌 Aurora Background | Animasi gradient aurora yang bergerak di background |
| 🎬 8 Film Statis | Data film lengkap tersimpan di JavaScript tanpa database |
| 🔍 Genre Filter | Filter film berdasarkan genre tanpa reload halaman |
| 📊 Top Rated Section | Menampilkan 3 film dengan rating tertinggi |
| 🪟 Modal Detail | Pop-up glassmorphism untuk detail lengkap setiap film |
| 📱 Responsive | Tampilan optimal untuk desktop, tablet, dan mobile |
| 🍔 Hamburger Menu | Menu mobile dengan animasi smooth |
| ↑ Back to Top | Tombol kembali ke atas yang muncul saat scroll |
| ✉️ Contact Form | Form kontak statis dengan notifikasi sukses |
| 🎨 Glow Effects | Efek glow tosca, pink, dan biru pada elemen interaktif |

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, Glassmorphism, Animations
- **JavaScript (Vanilla)** — DOM manipulation, Event handling, Intersection Observer
- **Google Fonts** — Syne (display) + DM Sans (body)
- **Tanpa framework** — Tidak ada Bootstrap, Tailwind, React, dll.
- **Tanpa backend** — Tidak ada server, database, atau API
- **Tanpa API key** — Aman 100% untuk repository publik

---

## 📁 Struktur File

```
cineglass/
├── index.html      # Struktur HTML lengkap (navbar, hero, movies, modal, dll)
├── style.css       # Semua styling: glassmorphism, aurora, animasi, responsive
├── script.js       # Data film statis + semua interaksi JavaScript
└── README.md       # Dokumentasi proyek ini
```

---

## 🚀 Cara Menjalankan Proyek

### Opsi 1 — Buka Langsung (Paling Mudah)
```bash
# Clone repository
git clone https://github.com/username/cineglass.git

# Masuk ke folder
cd cineglass

# Buka file di browser
# Windows:
start index.html

# Mac:
open index.html

# Linux:
xdg-open index.html
```

### Opsi 2 — Live Server (Direkomendasikan untuk Development)
Jika menggunakan VS Code, install ekstensi **Live Server**, lalu klik kanan `index.html` → **Open with Live Server**.

### Opsi 3 — Python HTTP Server
```bash
cd cineglass

# Python 3
python -m http.server 8080

# Buka browser: http://localhost:8080
```

---

## 🌐 Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository di GitHub
1. Login ke [github.com](https://github.com)
2. Klik tombol **New Repository**
3. Beri nama, misalnya: `cineglass`
4. Set sebagai **Public**
5. Klik **Create Repository**

### Langkah 2 — Push Kode ke GitHub
```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "🎬 Initial commit: CineGlass Movie Showcase"

# Hubungkan ke repository GitHub
git remote add origin https://github.com/username/cineglass.git

# Push ke branch main
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages** (di sidebar kiri)
4. Di bawah **Source**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
5. Klik **Save**
6. Tunggu 1-2 menit

### Langkah 4 — Akses Website Live
Website akan tersedia di:
```
https://username.github.io/cineglass/
```

---

## 🎨 Palet Warna

| Nama | Hex | Kegunaan |
|------|-----|---------|
| Black | `#050508` | Background utama |
| Dark | `#0a0a12` | Background section |
| White | `#f0f0f8` | Teks utama |
| Tosca | `#00e5cc` | Aksen utama, glow, CTA |
| Pink | `#ff4fa0` | Aksen sekunder, badge |
| Blue | `#4f8cff` | Aksen tersier, gradient |

---

## 🔒 Keamanan

- ✅ Tidak ada API key
- ✅ Tidak ada database credentials
- ✅ Tidak ada .env file
- ✅ Tidak ada data sensitif
- ✅ Semua data 100% statis
- ✅ Aman di-push ke public repository

---

## 📝 Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan.

---

<div align="center">
  <p>Dibuat dengan 💙 menggunakan HTML, CSS, dan JavaScript murni</p>
  <p><strong>CineGlass</strong> — No databases. No API keys. Just glass and light.</p>
</div>
