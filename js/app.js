/* ==========================================================================
   SEJARAH NUSANTARA - MAIN APPLICATION CONTROLLER
   ========================================================================== */

import { ERAS, EVENTS, FIGURES, MAP_LOCATIONS, HISTORIC_DOCS } from './data.js';
import { CURRICULUM_DATA } from './curriculum-data.js';
import { PHASE_DOCUMENTS_DATA } from './documents-data.js';
import { TimelineController } from './timeline.js';
import { HistoryQuiz } from './quiz.js';
import { CurriculumController } from './curriculum.js';
import { DocumentsController } from './documents.js';
import { soundManager } from './audio.js';
import { adminService } from './admin-service.js';
import { AdminUI } from './admin-ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialise Submodules
  const curriculum = new CurriculumController('#curriculum-modules-container', '#curriculum-tabs-container', '#curriculum-header-box');
  const documents = new DocumentsController('#phase-docs-container', '#doc-filter-tabs-container');
  const timeline = new TimelineController('#timeline-events-container', '#era-tabs-container');
  const quiz = new HistoryQuiz('#quiz-interactive-mount');
  
  window.curriculumInstance = curriculum;
  window.documentsInstance = documents;

  // 1b. Initialise Administrator Controller
  window.adminService = adminService;
  window.adminUI = new AdminUI(curriculum);



  // 2. Setup Theme (Dark / Light)
  initTheme();

  // 3. Setup Global Detail Modal
  initDetailModal();

  // 4. Setup Tokoh Bangsa Cards
  renderTokohCards('all');
  initTokohFilters();

  // 5. Setup Historic Documents
  renderHistoricDocuments();

  // 6. Setup Global Search Modal (Ctrl + K)
  initGlobalSearch();

  // 7. Setup Mobile Drawer & Smooth Navigation
  initNavigation();

  // 8. Setup Hero Dashboard Slideshow
  initHeroSlideshow();
});

/* --------------------------------------------------------------------------
   HERO DASHBOARD SLIDESHOW CONTROLLER
   -------------------------------------------------------------------------- */
function initHeroSlideshow() {
  const container = document.getElementById('hero-slideshow');
  if (!container) return;

  const slides = container.querySelectorAll('.hero-slide');
  const dots = container.querySelectorAll('.slide-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideInterval = 10000; // 10 detik per slide (otomatis berganti tiap 10 detik)

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      soundManager.playClick();
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      soundManager.playClick();
      prevSlide();
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      soundManager.playClick();
      const index = parseInt(dot.dataset.index, 10);
      goToSlide(index);
      startAutoplay();
    });
  });

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // Keyboard navigation when hero is in view
  window.addEventListener('keydown', (e) => {
    const rect = container.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isInView) return;

    if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoplay();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoplay();
    }
  });

  // Direct tab switch integration when clicking CTA on slide
  document.querySelectorAll('[data-grade-target]').forEach(link => {
    link.addEventListener('click', () => {
      const grade = link.dataset.gradeTarget;
      if (window.curriculumInstance && grade) {
        window.curriculumInstance.setGrade(grade);
      }
    });
  });

  // Start autoplay
  startAutoplay();
}

/* --------------------------------------------------------------------------
   THEME MANAGER
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('kronik_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playClick();
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('kronik_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  });
}

function updateThemeIcon(theme) {
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Ganti ke Mode Terang (Ruangguru Light)' : 'Ganti ke Mode Gelap (Ruangguru Night)';
  });
}

/* --------------------------------------------------------------------------
   DETAIL MODAL SYSTEM
   -------------------------------------------------------------------------- */
function initDetailModal() {
  const modalOverlay = document.getElementById('detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  window.openDetailModal = function({ badge, title, subtitle, content }) {
    if (!modalOverlay) return;
    document.getElementById('modal-badge').textContent = badge || 'Informasi Sejarah';
    document.getElementById('modal-title').textContent = title || '';
    document.getElementById('modal-subtitle').textContent = subtitle || '';
    document.getElementById('modal-content').innerHTML = content || '';

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeDetailModal = function() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      soundManager.playClick();
      window.closeDetailModal();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        window.closeDetailModal();
      }
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeDetailModal();
      closeSearchModal();
    }
  });
}

/* --------------------------------------------------------------------------
   TOKOH BANGSA (FIGURES)
   -------------------------------------------------------------------------- */
function renderTokohCards(category) {
  const container = document.getElementById('tokoh-grid-container');
  if (!container) return;

  let filtered = FIGURES;
  if (category === 'fase-e') {
    filtered = FIGURES.filter(f => f.phase === 'Fase E');
  } else if (category === 'fase-f') {
    filtered = FIGURES.filter(f => f.phase === 'Fase F');
  } else if (category !== 'all') {
    filtered = FIGURES.filter(f => 
      f.category.toLowerCase().includes(category.toLowerCase()) || 
      (f.phase && f.phase.toLowerCase().includes(category.toLowerCase()))
    );
  }

  container.innerHTML = filtered.map(fig => `
    <div class="tokoh-card" data-id="${fig.id}">
      <div class="tokoh-img-wrapper">
        <img src="${fig.image}" alt="${fig.name}" class="tokoh-img" loading="lazy" />
        <span class="tokoh-overlay-tag">${fig.category}</span>
      </div>
      <div class="tokoh-content">
        <div style="display: flex; gap: 0.35rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <span class="curriculum-badge" style="font-size: 0.72rem; padding: 0.15rem 0.5rem;">${fig.phase}</span>
          <span class="chapter-badge" style="font-size: 0.72rem; padding: 0.15rem 0.5rem;">${fig.chapter}</span>
        </div>
        <h3 class="tokoh-name">${fig.name}</h3>
        <div class="tokoh-title">${fig.title} (${fig.years})</div>
        <p class="tokoh-quote" style="text-indent: 0 !important; text-align: left !important;">${fig.quote}</p>
        
        <div style="margin-top: auto; padding-top: 1rem;">
          <button class="btn btn-secondary btn-detail-tokoh" data-id="${fig.id}" style="width: 100%; font-size: 0.88rem;">
            <span>Biografi & Jasa Perjuangan</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Click handlers
  container.querySelectorAll('.btn-detail-tokoh').forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playClick();
      const id = btn.dataset.id;
      const fig = FIGURES.find(f => f.id === id);
      if (fig && window.openDetailModal) {
        window.openDetailModal({
          badge: `${fig.phase} • ${fig.chapter} • ${fig.category}`,
          title: `${fig.name} (${fig.years})`,
          subtitle: `${fig.title}`,
          content: `
            <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; align-items: flex-start; flex-wrap: wrap;">
              <img src="${fig.image}" alt="${fig.name}" style="width: 140px; height: 140px; border-radius: var(--radius-md); object-fit: cover; border: 2px solid var(--border-gold); box-shadow: var(--shadow-md);" />
              <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; gap: 0.4rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
                  <span class="curriculum-badge">${fig.phase}</span>
                  <span class="chapter-badge">${fig.chapter}</span>
                  <span class="tokoh-overlay-tag" style="position: static;">${fig.category}</span>
                </div>
                <p style="font-style: italic; color: var(--gold-400); margin-bottom: 0.8rem; font-size: 0.95rem; border-left: 2px solid var(--gold-500); padding-left: 0.6rem; text-indent: 0 !important; text-align: left !important;">${fig.quote}</p>
                <p style="font-size: 0.98rem; line-height: 1.6; margin: 0; text-indent: 0 !important; text-align: left !important;">${fig.bio}</p>
              </div>
            </div>
            
            ${fig.curriculumRole ? `
              <div style="background: var(--bg-secondary); border-left: 3px solid var(--gold-500); padding: 0.9rem 1.15rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; text-indent: 0 !important; text-align: left !important;">
                <h4 style="font-size: 0.92rem; color: var(--text-gold); margin-bottom: 0.35rem;">Keterkaitan Materi Kurikulum Sejarah:</h4>
                <p style="font-size: 0.9rem; margin: 0; text-indent: 0 !important; text-align: left !important; color: var(--text-secondary);">${fig.curriculumRole}</p>
              </div>
            ` : ''}

            <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.8rem;">Pencapaian & Jasa Bersejarah:</h4>
            <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem;">
              ${fig.achievements.map(a => `
                <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.92rem; color: var(--text-secondary); text-indent: 0 !important; text-align: left !important;">
                  <span style="color: var(--gold-400);">✦</span>
                  <span>${a}</span>
                </li>
              `).join('')}
            </ul>
          `
        });
      }
    });
  });
}

function initTokohFilters() {
  const filterBtns = document.querySelectorAll('.tokoh-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderTokohCards(cat);
    });
  });
}

/* --------------------------------------------------------------------------
   HISTORIC DOCUMENTS
   -------------------------------------------------------------------------- */
function renderHistoricDocuments() {
  const container = document.getElementById('documents-container');
  if (!container) return;

  container.innerHTML = HISTORIC_DOCS.map(doc => `
    <div class="doc-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; gap: 1rem;">
        <h3 style="font-size: 1.3rem; margin: 0;">${doc.title}</h3>
        <span style="font-family: var(--font-display); font-size: 0.8rem; color: var(--text-gold); background: var(--bg-tertiary); padding: 0.2rem 0.6rem; border-radius: var(--radius-full); white-space: nowrap; border: 1px solid var(--border-subtle);">
          ${doc.date}
        </span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
        Penyusun: <strong style="color: var(--text-main);">${doc.author}</strong>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">${doc.context}</p>
      
      <div class="doc-text-box">${doc.text}</div>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button class="btn btn-secondary btn-copy-doc" data-text="${encodeURIComponent(doc.text)}" style="font-size: 0.85rem; padding: 0.4rem 0.9rem;">
          <span>📋 Salin Teks Otentik</span>
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-copy-doc').forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playClick();
      const text = decodeURIComponent(btn.dataset.text);
      navigator.clipboard.writeText(text).then(() => {
        const span = btn.querySelector('span');
        const oldText = span.textContent;
        span.textContent = '✅ Berhasil Disalin!';
        setTimeout(() => { span.textContent = oldText; }, 2000);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   GLOBAL SEARCH (MODAL & INSTANT FILTER)
   -------------------------------------------------------------------------- */
function initGlobalSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input-field');
  const searchResults = document.getElementById('search-results-list');
  const searchTriggers = document.querySelectorAll('.search-trigger, #nav-search-trigger');
  const searchCloseBtn = document.getElementById('search-close-btn');

  function openSearchModal() {
    soundManager.playClick();
    if (searchModal) {
      searchModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        searchInput.value = '';
        setTimeout(() => searchInput.focus(), 80);
      }
      renderSearchResults('');
    }
  }

  window.closeSearchModal = function() {
    if (searchModal) {
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  searchTriggers.forEach(t => t.addEventListener('click', openSearchModal));

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', () => {
      soundManager.playClick();
      closeSearchModal();
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  // Keyboard shortcut: Ctrl+K or '/'
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      openSearchModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      renderSearchResults(q);
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;

    if (!query) {
      searchResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          Ketik nama peristiwa, pahlawan, atau era untuk mencari data arsip sejarah...
        </div>
      `;
      return;
    }

    const allCurriculumModules = [
      ...CURRICULUM_DATA['kelas-x'].modules,
      ...CURRICULUM_DATA['kelas-xi'].modules
    ];

    const matchedCurriculum = allCurriculumModules.filter(m =>
      m.title.toLowerCase().includes(query) ||
      m.cpSummary.toLowerCase().includes(query) ||
      m.period.toLowerCase().includes(query) ||
      m.grade.toLowerCase().includes(query)
    );

    const matchedEvents = EVENTS.filter(e => 
      e.title.toLowerCase().includes(query) || 
      e.summary.toLowerCase().includes(query) || 
      e.location.toLowerCase().includes(query) ||
      e.year.toLowerCase().includes(query)
    );

    const matchedFigures = FIGURES.filter(f =>
      f.name.toLowerCase().includes(query) ||
      f.title.toLowerCase().includes(query) ||
      f.bio.toLowerCase().includes(query)
    );

    const matchedLocations = MAP_LOCATIONS.filter(l =>
      l.name.toLowerCase().includes(query) ||
      l.region.toLowerCase().includes(query) ||
      l.desc.toLowerCase().includes(query)
    );

    const matchedPhaseDocs = PHASE_DOCUMENTS_DATA.filter(d =>
      d.title.toLowerCase().includes(query) ||
      d.chapter.toLowerCase().includes(query) ||
      d.chapterTitle.toLowerCase().includes(query) ||
      d.summary.toLowerCase().includes(query) ||
      d.type.toLowerCase().includes(query) ||
      d.location.toLowerCase().includes(query)
    );

    const totalCount = matchedCurriculum.length + matchedPhaseDocs.length + matchedEvents.length + matchedFigures.length + matchedLocations.length;

    if (totalCount === 0) {
      searchResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          Tidak ditemukan hasil untuk pencarian "<strong>${query}</strong>".
        </div>
      `;
      return;
    }

    let html = '';

    if (matchedPhaseDocs.length > 0) {
      html += `<div style="padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 700; color: var(--text-gold); text-transform: uppercase;">Dokumen Sejarah Otentik (${matchedPhaseDocs.length})</div>`;
      matchedPhaseDocs.slice(0, 4).forEach(item => {
        html += `
          <div class="search-item-row" data-type="phasedoc" data-id="${item.id}" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; transition: background 0.2s;">
            <div style="font-weight: 600; color: var(--text-main);">${item.icon} ${item.title}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.phase} • ${item.chapter}: ${item.chapterTitle} (${item.date})</div>
          </div>
        `;
      });
    }

    if (matchedCurriculum.length > 0) {
      html += `<div style="padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 700; color: var(--text-gold); text-transform: uppercase; margin-top: 0.5rem;">Materi Kurikulum SMK (${matchedCurriculum.length})</div>`;
      matchedCurriculum.slice(0, 4).forEach(item => {
        html += `
          <div class="search-item-row" data-type="curriculum" data-id="${item.id}" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; transition: background 0.2s;">
            <div style="font-weight: 600; color: var(--text-main);">${item.icon} ${item.title}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.grade} (${item.phase}) • ${item.period}</div>
          </div>
        `;
      });
    }

    if (matchedEvents.length > 0) {
      html += `<div style="padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 700; color: var(--text-gold); text-transform: uppercase; margin-top: 0.5rem;">Peristiwa Bersejarah (${matchedEvents.length})</div>`;
      matchedEvents.slice(0, 4).forEach(item => {
        html += `
          <div class="search-item-row" data-type="event" data-id="${item.id}" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; transition: background 0.2s;">
            <div style="font-weight: 600; color: var(--text-main);">${item.title}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.year} • 📍 ${item.location}</div>
          </div>
        `;
      });
    }

    if (matchedFigures.length > 0) {
      html += `<div style="padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 700; color: var(--text-gold); text-transform: uppercase; margin-top: 0.5rem;">Tokoh Bangsa (${matchedFigures.length})</div>`;
      matchedFigures.slice(0, 4).forEach(item => {
        html += `
          <div class="search-item-row" data-type="figure" data-id="${item.id}" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; transition: background 0.2s;">
            <div style="font-weight: 600; color: var(--text-main);">${item.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.title} (${item.years})</div>
          </div>
        `;
      });
    }

    if (matchedLocations.length > 0) {
      html += `<div style="padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 700; color: var(--text-gold); text-transform: uppercase; margin-top: 0.5rem;">Wilayah Bersejarah (${matchedLocations.length})</div>`;
      matchedLocations.slice(0, 3).forEach(item => {
        html += `
          <div class="search-item-row" data-type="location" data-id="${item.id}" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; transition: background 0.2s;">
            <div style="font-weight: 600; color: var(--text-main);">${item.icon} ${item.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.region} • ${item.period}</div>
          </div>
        `;
      });
    }

    searchResults.innerHTML = html;

    // Attach click to open item in detail modal
    searchResults.querySelectorAll('.search-item-row').forEach(row => {
      row.addEventListener('click', () => {
        soundManager.playClick();
        closeSearchModal();
        const type = row.dataset.type;
        const id = row.dataset.id;

        if (type === 'phasedoc') {
          const item = PHASE_DOCUMENTS_DATA.find(d => d.id === id);
          if (item && window.documentsInstance) {
            window.documentsInstance.openDocumentModal(item);
          }
        } else if (type === 'curriculum') {
          const item = allCurriculumModules.find(m => m.id === id);
          if (item && window.curriculumInstance) {
            window.curriculumInstance.openModuleReader(item);
          }
        } else if (type === 'event') {
          const item = EVENTS.find(e => e.id === id);
          if (item) {
            window.openDetailModal({
              badge: item.year,
              title: item.title,
              subtitle: `📍 ${item.location}`,
              content: `<p style="line-height: 1.7; margin-bottom: 1rem; text-align: justify;">${item.detail}</p><p style="text-align: justify;"><strong>Signifikansi:</strong> ${item.significance}</p>`
            });
          }
        } else if (type === 'figure') {
          const item = FIGURES.find(f => f.id === id);
          if (item) {
            window.openDetailModal({
              badge: item.category,
              title: `${item.name} (${item.years})`,
              subtitle: item.title,
              content: `<p style="line-height: 1.7; margin-bottom: 1rem; text-align: justify;">${item.bio}</p><p style="color: var(--text-gold); font-style: italic; text-align: justify;">${item.quote}</p>`
            });
          }
        } else if (type === 'location') {
          const item = MAP_LOCATIONS.find(l => l.id === id);
          if (item) {
            window.openDetailModal({
              badge: item.period,
              title: `${item.icon} ${item.name}`,
              subtitle: item.region,
              content: `<p style="line-height: 1.7; text-align: justify;">${item.desc}</p>`
            });
          }
        }
      });
    });

  }
}




/* --------------------------------------------------------------------------
   NAVIGATION & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  const mobileOpenBtn = document.getElementById('mobile-menu-open');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileOpenBtn && mobileDrawer) {
    mobileOpenBtn.addEventListener('click', () => {
      soundManager.playClick();
      mobileDrawer.classList.add('open');
    });
  }

  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener('click', () => {
      soundManager.playClick();
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });
}
