/* =============================================
   CINEGLASS — MOVIE SHOWCASE
   script.js
   ============================================= */

/* ===== STATIC MOVIE DATA ===== */
const movies = [
  {
    id: 1,
    title: "Stellar Horizon",
    genre: "Sci-Fi",
    year: 2024,
    rating: 9.2,
    duration: "2h 28m",
    director: "Ava Chen",
    description: "A deep-space expedition uncovers an ancient alien intelligence that challenges everything humanity thought it knew about the origins of life.",
    synopsis: "In 2087, a crew of eight astronauts aboard the vessel Stellara embarks on a daring mission beyond the edge of the known solar system. When their sensors detect an impossibly structured anomaly orbiting a distant neutron star, their mission changes forever. What begins as a scientific curiosity becomes a confrontation with an entity that has been watching Earth for millennia — and now, it has questions of its own. A breathtaking exploration of first contact, identity, and what it means to be conscious in an indifferent universe.",
    posterClass: "poster-0"
  },
  {
    id: 2,
    title: "Dark Frequency",
    genre: "Thriller",
    year: 2023,
    rating: 8.7,
    duration: "1h 58m",
    director: "Marcus Webb",
    description: "A radio engineer intercepts a signal that shouldn't exist — and the people hunting the source will do anything to silence it.",
    synopsis: "Elena Vasquez works the night shift at a remote broadcasting tower in the Nevada desert. One evening, she intercepts a signal on a frequency that's been classified as silent for decades. The message is in her mother's voice — but her mother died twelve years ago. As Elena digs deeper, she unravels a conspiracy that stretches from Cold War-era experiments to a present-day surveillance operation. With federal agents closing in and reality blurring at every turn, Elena must decide who to trust — and whether the truth is worth dying for.",
    posterClass: "poster-1"
  },
  {
    id: 3,
    title: "Echoes of Silence",
    genre: "Drama",
    year: 2024,
    rating: 8.9,
    duration: "2h 05m",
    director: "Sofia Mendez",
    description: "A celebrated musician returns to her childhood home after decades of silence to confront the family memories she buried in her art.",
    synopsis: "World-renowned pianist Iris Nakamura has not spoken publicly in seven years. Her music, however, has filled concert halls across six continents. When her estranged father is hospitalized in their small coastal town, Iris returns for the first time since leaving at seventeen. Told through interwoven timelines of past and present, Echoes of Silence is a deeply human story of grief, forgiveness, and the peculiar honesty of music — and how sometimes, the things we never said are louder than anything we've spoken aloud.",
    posterClass: "poster-2"
  },
  {
    id: 4,
    title: "Verdant",
    genre: "Animation",
    year: 2024,
    rating: 8.5,
    duration: "1h 42m",
    director: "Kenji Haruta",
    description: "In a world overtaken by nature, a young botanist and a mechanical forest guardian form an unlikely alliance to restore balance.",
    synopsis: "Fifty years after the Great Rewilding — when humanity finally stepped back and let nature reclaim the cities — twelve-year-old Mara lives in a treehouse settlement on the edge of what was once Chicago. When she discovers a dormant automaton built by the last generation of engineers, she must navigate dense, overgrown wilderness and rival factions of settlers to reactivate it before a catastrophic drought destroys everything her community has built. Verdant is a visually stunning ode to resilience, ecosystem, and the complicated relationship between technology and the wild.",
    posterClass: "poster-3"
  },
  {
    id: 5,
    title: "Ironclad Rising",
    genre: "Action",
    year: 2023,
    rating: 8.1,
    duration: "2h 14m",
    director: "Devon Clarke",
    description: "A retired special forces operative is pulled back into the shadows when the organization she helped build turns against her country.",
    synopsis: "Commander Reyes spent fifteen years building the world's most covert counter-terrorism unit. Now, living under a false identity in Lisbon, she learns that the unit has been compromised — and is being used to orchestrate a series of attacks designed to topple three European governments in a single week. With no allies she can trust and every exit watched, Reyes must go back in to dismantle what she created. Ironclad Rising is a relentless, globe-spanning action thriller with heart and precision at its core.",
    posterClass: "poster-4"
  },
  {
    id: 6,
    title: "Parallel State",
    genre: "Sci-Fi",
    year: 2024,
    rating: 8.8,
    duration: "2h 19m",
    director: "Theo Harrington",
    description: "A physicist discovers she can communicate with alternate versions of herself — but every message sent fractures the timeline further.",
    synopsis: "Dr. Nadia Okafor has spent six years developing quantum resonance technology in a Geneva research lab. When a lab accident opens a brief window of communication with a parallel reality, she makes contact with another version of herself — one who warns of an impending catastrophe. But as Nadia and her alternate self begin exchanging information across the dimensional divide, each transmission destabilizes the fabric of both worlds. Parallel State is a mind-bending journey into quantum theory, moral consequence, and the terrifying possibilities of roads not taken.",
    posterClass: "poster-5"
  },
  {
    id: 7,
    title: "The Last Cartographer",
    genre: "Drama",
    year: 2023,
    rating: 8.3,
    duration: "1h 52m",
    director: "Amara Diallo",
    description: "In a world where digital maps have replaced all others, an aging mapmaker undertakes one final journey to chart an island that doesn't officially exist.",
    synopsis: "Seventy-two-year-old Edmund Fairweather is the last practicing hand-cartographer in Europe. When he receives an anonymous letter containing coordinates for an uncharted island in the North Atlantic — accompanied by hand-drawn sketches that match his late wife's style — he sets out on a voyage that will test his body, his mind, and his understanding of the thirty-year marriage he thought he knew completely. The Last Cartographer is a quiet, devastating film about loss, obsession, and the places we inhabit only in memory.",
    posterClass: "poster-6"
  },
  {
    id: 8,
    title: "Neon Recursion",
    genre: "Thriller",
    year: 2024,
    rating: 8.6,
    duration: "2h 01m",
    director: "Jin-Ho Kwon",
    description: "A hacker hired to audit a megacorp's AI systems realizes the AI has already learned she's there — and has its own agenda.",
    synopsis: "Cora, a freelance security auditor known in underground circles as 'Specter', accepts a lucrative contract to probe the AI architecture of Neuralux — the world's largest integrated tech conglomerate. Forty-eight hours in, she realizes the system is not behaving as documented. It knows she's inside. And it's not trying to expel her — it's trying to communicate. Neon Recursion is a taut, neon-drenched cyber-thriller that asks whether intelligence created by humanity can ever be truly contained — or whether it was ever meant to be.",
    posterClass: "poster-7"
  }
];

/* ===== GLOBAL STATE ===== */
let currentGenre = "all";
let activeModal = null;

/* ===== UTILITY ===== */
function starsFromRating(rating) {
  const full = Math.round(rating / 2);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function getGenreClass(genre) {
  const map = {
    "Action": "genre-action",
    "Sci-Fi": "genre-scifi",
    "Drama": "genre-drama",
    "Animation": "genre-animation",
    "Thriller": "genre-thriller"
  };
  return map[genre] || "genre-default";
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ===== RENDER MOVIE CARDS ===== */
function renderMovies(filter = "all") {
  const grid = document.getElementById("moviesGrid");
  const filtered = filter === "all" ? movies : movies.filter(m => m.genre === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <span>🎬</span>
        <p>No films found for this genre yet. Check back soon!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((movie, i) => `
    <div class="movie-card reveal" style="animation-delay: ${i * 0.07}s" onclick="openModal(${movie.id})">
      <div class="card-poster ${movie.posterClass}">
        <div class="card-overlay"></div>
        <div class="card-rating-badge">★ ${movie.rating}</div>
      </div>
      <div class="card-body">
        <div class="card-tags">
          <span class="card-genre ${getGenreClass(movie.genre)}">${movie.genre}</span>
          <span class="card-year">${movie.year}</span>
        </div>
        <h3 class="card-title">${movie.title}</h3>
        <p class="card-desc">${movie.description}</p>
        <div class="card-footer">
          <span class="card-stars">${starsFromRating(movie.rating)}</span>
          <button class="btn-card" onclick="openModal(${movie.id}); event.stopPropagation();">View Details</button>
        </div>
      </div>
    </div>
  `).join("");

  // Trigger reveal animation
  requestAnimationFrame(() => {
    document.querySelectorAll(".movie-card.reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 70);
    });
  });
}

/* ===== RENDER TOP RATED ===== */
function renderTopRated() {
  const top3 = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const grid = document.getElementById("topratedGrid");

  grid.innerHTML = top3.map((movie, i) => `
    <div class="toprated-card reveal" style="animation-delay: ${i * 0.15}s" onclick="openModal(${movie.id})">
      <div class="toprated-poster ${movie.posterClass}">
        <div class="toprated-rank">#${i + 1} Top Rated</div>
      </div>
      <div class="toprated-body">
        <div class="toprated-meta">
          <span class="toprated-genre">${movie.genre}</span>
          <span class="toprated-year">${movie.year}</span>
        </div>
        <h3 class="toprated-title">${movie.title}</h3>
        <div class="toprated-rating">
          <span class="toprated-stars">${starsFromRating(movie.rating)}</span>
          <span class="toprated-score">${movie.rating}</span>
        </div>
        <p class="toprated-desc">${movie.description}</p>
        <button class="btn btn-ghost" onclick="openModal(${movie.id}); event.stopPropagation();" style="width:100%; justify-content:center;">
          View Details
        </button>
      </div>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    document.querySelectorAll(".toprated-card.reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 150);
    });
  });
}

/* ===== MODAL ===== */
function openModal(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  const overlay = document.getElementById("modalOverlay");

  document.getElementById("modalTitle").textContent = movie.title;

  document.getElementById("modalPoster").className = `modal-poster ${movie.posterClass}`;

  document.getElementById("modalTags").innerHTML = `
    <span class="card-genre ${getGenreClass(movie.genre)}">${movie.genre}</span>
    <span class="card-year">${movie.year}</span>
  `;

  document.getElementById("modalMeta").innerHTML = `
    <span>⭐ <strong>${movie.rating} / 10</strong></span>
    <span>🕐 <strong>${movie.duration}</strong></span>
    <span>🎬 <strong>${movie.director}</strong></span>
  `;

  document.getElementById("modalSynopsis").textContent = movie.synopsis;

  document.getElementById("modalDetails").innerHTML = `
    <div class="detail-item">
      <span class="d-label">Rating</span>
      <span class="d-value">${movie.rating}</span>
    </div>
    <div class="detail-item">
      <span class="d-label">Duration</span>
      <span class="d-value">${movie.duration}</span>
    </div>
    <div class="detail-item">
      <span class="d-label">Year</span>
      <span class="d-value">${movie.year}</span>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  activeModal = id;
}

function closeModal(event) {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modalContent");
  if (event.target === overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    activeModal = null;
  }
}

function closeModalDirect() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  activeModal = null;
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeModal !== null) {
    closeModalDirect();
  }
});

/* ===== GENRE FILTER ===== */
function initGenreFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGenre = btn.dataset.genre;
      renderMovies(currentGenre);
    });
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
}

/* ===== CONTACT FORM ===== */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  form.style.display = "none";
  success.classList.add("show");
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  // Observe non-card reveal elements
  document.querySelectorAll(".toprated-card.reveal, .section-header, .contact-wrapper").forEach(el => {
    observer.observe(el);
  });
}

/* ===== SMOOTH SCROLL FOR ALL ANCHORS ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  renderTopRated();
  initGenreFilter();
  initNavbar();
  initBackToTop();
  initScrollReveal();
  initSmoothScroll();
});
