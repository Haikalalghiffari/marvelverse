/* =============================================
   CINEGLASS — script.js
   Data film Marvel + semua interaksi
   ============================================= */

/* ===== DATA FILM ===== */
const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genres: ["Action", "Sci-Fi"],
    year: 2019,
    rating: 8.4,
    duration: "3h 1m",
    director: "Anthony & Joe Russo",
    description: "Para Avengers yang tersisa berusaha mengembalikan seluruh kehidupan yang hilang melalui misi berbahaya melibatkan perjalanan waktu.",
    synopsis: "Setelah kekalahan besar akibat ulah Thanos, para Avengers yang tersisa berusaha mengembalikan seluruh kehidupan yang hilang melalui misi berbahaya yang melibatkan perjalanan waktu. Film ini menjadi penutup epik dari Infinity Saga dan dipenuhi momen emosional, aksi spektakuler, serta perpisahan dengan beberapa karakter ikonik Marvel.",
    poster: "images/endgame.jpg",
    posterGradient: "linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 40%, #4a3080 70%, #6b1a40 100%)"
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    genres: ["Action", "Sci-Fi"],
    year: 2018,
    rating: 8.4,
    duration: "2h 29m",
    director: "Anthony & Joe Russo",
    description: "Thanos berusaha mengumpulkan enam Infinity Stones untuk menghapus setengah populasi alam semesta. Para superhero Marvel bersatu.",
    synopsis: "Thanos berusaha mengumpulkan enam Infinity Stones untuk mendapatkan kekuatan tak terbatas dan menghapus setengah populasi alam semesta. Para superhero Marvel bersatu dalam pertarungan terbesar yang pernah terjadi untuk menghentikan rencananya.",
    poster: "images/infinity-war.jpg",
    posterGradient: "linear-gradient(160deg, #0d1a2e 0%, #1a3050 40%, #0e4a6b 70%, #1a1a3e 100%)"
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    genres: ["Action", "Fantasy"],
    year: 2021,
    rating: 8.2,
    duration: "2h 28m",
    director: "Jon Watts",
    description: "Identitas Peter Parker terungkap kepada publik. Sihir Doctor Strange yang salah membuka multiverse dan menghadirkan musuh dari dimensi lain.",
    synopsis: "Setelah identitas Peter Parker sebagai Spider-Man terungkap kepada publik, kehidupannya menjadi kacau. Ia meminta bantuan Doctor Strange, tetapi kesalahan dalam sihir membuka multiverse dan menghadirkan musuh serta pahlawan dari dimensi lain.",
    poster: "images/no-way-home.jpg",
    posterGradient: "linear-gradient(160deg, #0a1a3e 0%, #1a3a6b 40%, #0e2a80 70%, #3a1a60 100%)"
  },
  {
    id: 4,
    title: "Guardians of the Galaxy",
    genres: ["Action", "Comedy"],
    year: 2014,
    rating: 8.0,
    duration: "2h 1m",
    director: "James Gunn",
    description: "Peter Quill bersama Rocket, Groot, Gamora, dan Drax melindungi artefak berbahaya yang dapat menghancurkan galaksi.",
    synopsis: "Peter Quill bersama Rocket, Groot, Gamora, dan Drax harus bekerja sama untuk melindungi sebuah artefak berbahaya yang dapat menghancurkan galaksi. Film ini terkenal karena humornya yang segar dan soundtrack musik klasik yang ikonik.",
    poster: "images/gotg.jpg",
    posterGradient: "linear-gradient(160deg, #1a0a2e 0%, #3d1060 40%, #5a0a7a 70%, #8a1a40 100%)"
  },
  {
    id: 5,
    title: "Guardians of the Galaxy Vol. 3",
    genres: ["Action", "Comedy"],
    year: 2023,
    rating: 7.9,
    duration: "2h 30m",
    director: "James Gunn",
    description: "Para Guardians menghadapi ancaman baru sambil berusaha menyelamatkan Rocket Raccoon dan mengungkap masa lalunya yang tragis.",
    synopsis: "Para Guardians menghadapi ancaman baru sambil berusaha menyelamatkan Rocket Raccoon. Film ini mengungkap masa lalu Rocket yang tragis dan menghadirkan perpaduan antara aksi, humor, dan emosi yang sangat kuat.",
    poster: "images/gotg3.jpg",
    posterGradient: "linear-gradient(160deg, #0a1a3e 0%, #1a4a6b 40%, #0e6a5a 70%, #1a3a2e 100%)"
  },
  {
    id: 6,
    title: "Thor: Ragnarok",
    genres: ["Action", "Comedy"],
    year: 2017,
    rating: 7.9,
    duration: "2h 10m",
    director: "Taika Waititi",
    description: "Thor kehilangan Mjolnir dan bertarung di arena gladiator melawan Hulk, sementara harus menghentikan Hela yang ingin menghancurkan Asgard.",
    synopsis: "Thor kehilangan palu Mjolnir dan harus bertarung di arena gladiator luar angkasa melawan Hulk. Sementara itu, ia harus menghentikan Hela yang ingin menghancurkan Asgard. Film ini dikenal sebagai salah satu film Marvel terlucu dan paling menghibur.",
    poster: "images/ragnarok.jpg",
    posterGradient: "linear-gradient(160deg, #1a0a0a 0%, #4a1a0a 40%, #8a3010 70%, #6a1a3a 100%)"
  },
  {
    id: 7,
    title: "Iron Man",
    genres: ["Action", "Sci-Fi"],
    year: 2008,
    rating: 7.9,
    duration: "2h 6m",
    director: "Jon Favreau",
    description: "Tony Stark, miliarder jenius pembuat senjata, menciptakan baju zirah berteknologi tinggi yang menjadi identitas superhero Iron Man.",
    synopsis: "Tony Stark, seorang miliarder jenius pembuat senjata, diculik oleh kelompok teroris. Untuk melarikan diri, ia menciptakan baju zirah berteknologi tinggi yang kemudian menjadi identitas superhero Iron Man. Film ini merupakan awal dari Marvel Cinematic Universe.",
    poster: "images/iron-man.jpg",
    posterGradient: "linear-gradient(160deg, #1a0a0a 0%, #5a1a0a 40%, #c04a10 70%, #8a2010 100%)"
  },
  {
    id: 8,
    title: "Captain America: Civil War",
    genres: ["Action", "Sci-Fi"],
    year: 2016,
    rating: 7.8,
    duration: "2h 27m",
    director: "Anthony & Joe Russo",
    description: "Perbedaan pendapat soal pengawasan superhero menyebabkan perpecahan besar. Iron Man dan Captain America memimpin dua kubu yang berhadapan.",
    synopsis: "Perbedaan pendapat mengenai pengawasan pemerintah terhadap para superhero menyebabkan perpecahan besar di antara Avengers. Iron Man dan Captain America memimpin dua kubu yang saling berhadapan.",
    poster: "images/civil-war.jpg",
    posterGradient: "linear-gradient(160deg, #0a0a1a 0%, #1a1a4a 40%, #0a2a6a 70%, #4a0a1a 100%)"
  },
  {
    id: 9,
    title: "Captain America: The Winter Soldier",
    genres: ["Action", "Thriller"],
    year: 2014,
    rating: 7.7,
    duration: "2h 16m",
    director: "Anthony & Joe Russo",
    description: "Steve Rogers menemukan konspirasi besar di dalam S.H.I.E.L.D. saat menghadapi pembunuh misterius bernama Winter Soldier.",
    synopsis: "Steve Rogers menemukan konspirasi besar di dalam organisasi S.H.I.E.L.D. saat menghadapi seorang pembunuh misterius bernama Winter Soldier. Film ini menggabungkan aksi superhero dengan nuansa thriller mata-mata yang menegangkan.",
    poster: "images/winter-soldier.jpg",
    posterGradient: "linear-gradient(160deg, #0a0a1a 0%, #0a1a3a 40%, #0a2a5a 70%, #1a1a2e 100%)"
  },
  {
    id: 10,
    title: "Doctor Strange",
    genres: ["Action", "Fantasy"],
    year: 2016,
    rating: 7.5,
    duration: "1h 55m",
    director: "Scott Derrickson",
    description: "Stephen Strange, ahli bedah terkenal yang kehilangan kemampuan tangannya, menemukan dunia sihir dan dimensi lain yang mengubah hidupnya.",
    synopsis: "Stephen Strange adalah seorang ahli bedah terkenal yang kehilangan kemampuan tangannya akibat kecelakaan. Dalam pencarian kesembuhan, ia menemukan dunia sihir, dimensi lain, dan kekuatan yang mengubah hidupnya selamanya.",
    poster: "images/doctor-strange.jpg",
    posterGradient: "linear-gradient(160deg, #0a0a2a 0%, #1a0a4a 40%, #2a0a6a 70%, #4a0a8a 100%)"
  }
];

/* ===== HELPERS ===== */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function starsHTML(rating) {
  const n = Math.round(rating / 2);
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function posterHTML(movie, height) {
  return `
    <img
      src="${movie.poster}"
      alt="${movie.title}"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      style="width:100%;height:100%;object-fit:cover;display:block;"
    />
    <div class="poster-fallback" style="display:none;width:100%;height:${height}px;background:${movie.posterGradient};align-items:center;justify-content:center;">
    </div>
  `;
}

/* ===== RENDER CARDS ===== */
function renderMovies(filter = "all") {
  const grid = document.getElementById("moviesGrid");
  const filtered = filter === "all"
    ? movies
    : movies.filter(m => m.genres.includes(filter));

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">No films found for this genre.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((m, i) => `
    <div class="movie-card reveal" style="transition-delay:${i * 0.05}s" onclick="openModal(${m.id})">
      <div class="card-poster">
        ${posterHTML(m, 190)}
        <div class="card-rating">★ ${m.rating}</div>
      </div>
      <div class="card-body">
        <div class="card-meta">
          ${m.genres.map(g => `<span class="card-genre-tag">${g}</span>`).join("")}
          <span class="card-year-tag">${m.year}</span>
        </div>
        <h3 class="card-title">${m.title}</h3>
        <p class="card-desc">${m.description}</p>
        <div class="card-footer">
          <button class="btn-detail" onclick="openModal(${m.id}); event.stopPropagation();">Details →</button>
        </div>
      </div>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    grid.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 50);
    });
  });
}

/* ===== RENDER TOP RATED ===== */
function renderTopRated() {
  const top5 = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const list = document.getElementById("topratedList");

  list.innerHTML = top5.map((m, i) => `
    <div class="toprated-item reveal" style="transition-delay:${i * 0.08}s" onclick="openModal(${m.id})">
      <div class="tr-rank">${String(i + 1).padStart(2, "0")}</div>
      <div class="tr-poster">
        ${posterHTML(m, 60)}
      </div>
      <div class="tr-info">
        <div class="tr-title">${m.title}</div>
        <div class="tr-meta">${m.genres.join(", ")} · ${m.year}</div>
      </div>
      <div class="tr-score">${m.rating}</div>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    list.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  });
}

/* ===== MODAL ===== */
let activeModal = null;

function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;

  document.getElementById("modalTitle").textContent = m.title;

  // Poster
  const posterEl = document.getElementById("modalPoster");
  posterEl.style.background = m.posterGradient;
  posterEl.innerHTML = `
    <img src="${m.poster}" alt="${m.title}"
      onerror="this.style.display='none'"
      style="width:100%;height:100%;object-fit:cover;display:block;" />
  `;

  document.getElementById("modalTags").innerHTML =
    m.genres.map(g => `<span class="card-genre-tag">${g}</span>`).join("") +
    `<span class="card-year-tag">${m.year}</span>`;

  document.getElementById("modalMeta").innerHTML = `
    <span>★ ${m.rating} / 10</span>
    <span>· ${m.duration}</span>
    <span>· ${m.director}</span>
  `;

  document.getElementById("modalSynopsis").textContent = m.synopsis;

  document.getElementById("modalStats").innerHTML = `
    <div class="stat-box"><span class="s-label">Rating</span><span class="s-value">${m.rating}</span></div>
    <div class="stat-box"><span class="s-label">Duration</span><span class="s-value">${m.duration}</span></div>
    <div class="stat-box"><span class="s-label">Year</span><span class="s-value">${m.year}</span></div>
  `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  activeModal = id;
}

function closeModal(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  activeModal = null;
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && activeModal) closeModalDirect();
});

/* ===== GENRE FILTER ===== */
function initFilter() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMovies(btn.dataset.genre);
    });
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });

  // Active link
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const pos = window.scrollY + 120;
    sections.forEach(sec => {
      const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (!link) return;
      const inView = pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight;
      link.classList.toggle("active", inView);
    });
  });
}

/* ===== BACK TO TOP ===== */
function initBackTop() {
  const btn = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
}

/* ===== CONTACT FORM ===== */
function handleForm(e) {
  e.preventDefault();
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formSuccess").classList.add("show");
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".section-head, .contact-wrap, .contact-left, .contact-right").forEach(el => {
    el.classList.add("reveal");
    obs.observe(el);
  });
}

/* ===== SMOOTH SCROLL ===== */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const target = document.querySelector(a.getAttribute("href"));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  renderTopRated();
  initFilter();
  initNavbar();
  initBackTop();
  initReveal();
});
