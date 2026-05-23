# 🎬 CineGlass — Marvel Movie Showcase

Landing page showcase film Marvel dengan desain glassmorphism minimalis, white theme, dan semua data statis (tanpa database, tanpa API key).

---

## Cara Menambahkan Poster Film

### Langkah 1 — Buat folder `images`
Di dalam folder project kamu, buat folder bernama `images`:
```
cineglass/
├── images/        ← buat folder ini
├── index.html
├── style.css
├── script.js
└── README.md
```

### Langkah 2 — Download poster film
Download poster tiap film (format JPG/PNG), lalu rename sesuai nama file berikut:

| Film | Nama File |
|------|-----------|
| Avengers: Endgame | `endgame.jpg` |
| Avengers: Infinity War | `infinity-war.jpg` |
| Spider-Man: No Way Home | `no-way-home.jpg` |
| Guardians of the Galaxy | `gotg.jpg` |
| Guardians of the Galaxy Vol. 3 | `gotg3.jpg` |
| Thor: Ragnarok | `ragnarok.jpg` |
| Iron Man | `iron-man.jpg` |
| Captain America: Civil War | `civil-war.jpg` |
| Captain America: The Winter Soldier | `winter-soldier.jpg` |
| Doctor Strange | `doctor-strange.jpg` |

### Langkah 3 — Taruh di folder `images`
```
cineglass/images/endgame.jpg
cineglass/images/infinity-war.jpg
... dst
```

### Langkah 4 — Push ke GitHub
```bash
git add .
git commit -m "feat: add movie posters"
git push
```

**Catatan:** Jika gambar tidak ditemukan, website tetap tampil dengan warna gradient otomatis sebagai fallback — jadi tidak ada yang rusak.

---

## Sumber Poster (Legal & Gratis)
- **TMDB** (themoviedb.org) — daftar gratis, download poster resmi
- **IMDb** — screenshot dari halaman film
- **Google Images** — filter "Labeled for reuse"

---

## Deploy ke GitHub Pages
1. `git push` semua file termasuk folder `images`
2. Settings → Pages → Branch: main → Save
3. Live di: `https://haikalalghiffari.github.io/cineglass/`

---

## Teknologi
- HTML5, CSS3, JavaScript Vanilla
- Google Fonts: Playfair Display + Outfit
- Tanpa framework, tanpa database, tanpa API key
