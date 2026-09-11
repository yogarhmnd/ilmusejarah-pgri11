/* ==========================================================================
   KRONIK NUSANTARA - TIMELINE CONTROLLER
   Linimasa Sejarah Minimalis, Apik, Clean & Dinamis (Fase E & Fase F)
   ========================================================================== */

import { ERAS, EVENTS } from './data.js';
import { soundManager } from './audio.js';

export class TimelineController {
  constructor(containerSelector, tabsContainerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.searchInput = document.querySelector('#timeline-search-input');
    this.counterEl = document.querySelector('#timeline-counter');
    this.currentEra = 'all';
    this.searchQuery = '';
    this.init();
  }

  init() {
    this.renderTabs();
    this.setupSearch();
    this.renderEvents();
  }

  setupSearch() {
    if (!this.searchInput) return;
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderEvents();
    });
  }

  renderTabs() {
    if (!this.tabsContainer) return;

    this.tabsContainer.innerHTML = ERAS.map(era => {
      let count = 0;
      if (era.id === 'all') {
        count = EVENTS.length;
      } else if (era.id === 'fase-e') {
        count = EVENTS.filter(e => e.phase === 'Fase E').length;
      } else if (era.id === 'fase-f') {
        count = EVENTS.filter(e => e.phase === 'Fase F').length;
      } else {
        count = EVENTS.filter(e => e.era === era.id).length;
      }

      return `
        <button class="era-tab-btn ${era.id === this.currentEra ? 'active' : ''}" data-era="${era.id}" title="${era.span}">
          <span>${era.icon}</span>
          <span>${era.name}</span>
          <span class="tab-badge" style="margin-left: 0.35rem; font-size: 0.72rem; padding: 0.15rem 0.45rem; background: rgba(255,255,255,0.14); border-radius: var(--radius-full); font-weight: 700;">${count}</span>
        </button>
      `;
    }).join('');

    this.tabsContainer.querySelectorAll('.era-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const era = btn.dataset.era;
        this.setEra(era);
      });
    });
  }

  setEra(eraId) {
    this.currentEra = eraId;
    this.tabsContainer.querySelectorAll('.era-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.era === eraId);
    });
    this.renderEvents();
  }

  getFilteredEvents() {
    let filtered = EVENTS;

    // Filter by Era / Phase
    if (this.currentEra === 'fase-e') {
      filtered = filtered.filter(evt => evt.phase === 'Fase E');
    } else if (this.currentEra === 'fase-f') {
      filtered = filtered.filter(evt => evt.phase === 'Fase F');
    } else if (this.currentEra !== 'all') {
      filtered = filtered.filter(evt => evt.era === this.currentEra);
    }

    // Filter by Search Query
    if (this.searchQuery) {
      const q = this.searchQuery;
      filtered = filtered.filter(evt => {
        return (
          evt.title.toLowerCase().includes(q) ||
          evt.year.toLowerCase().includes(q) ||
          evt.chapter.toLowerCase().includes(q) ||
          evt.summary.toLowerCase().includes(q) ||
          evt.location.toLowerCase().includes(q) ||
          evt.figures.some(f => f.toLowerCase().includes(q))
        );
      });
    }

    return filtered;
  }

  renderEvents() {
    if (!this.container) return;

    const filtered = this.getFilteredEvents();

    // Update Counter UI
    if (this.counterEl) {
      const currentEraObj = ERAS.find(e => e.id === this.currentEra) || ERAS[0];
      const searchContext = this.searchQuery ? ` untuk pencarian "${this.searchQuery}"` : '';
      this.counterEl.innerHTML = `
        <span>📌 Menampilkan <strong>${filtered.length}</strong> dari <strong>${EVENTS.length}</strong> peristiwa sejarah (${currentEraObj.name})${searchContext}</span>
      `;
    }

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div style="text-align: center; padding: 3.5rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle); max-width: 500px; margin: 0 auto;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h4 style="color: var(--text-main); font-size: 1.1rem; margin-bottom: 0.4rem;">Peristiwa tidak ditemukan</h4>
          <p style="font-size: 0.9rem; margin: 0;">Silakan coba kata kunci lain atau pilih era lainnya di atas.</p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div class="timeline-line"></div>
      ${filtered.map((evt, idx) => {
        const side = idx % 2 === 0 ? 'left' : 'right';
        const phaseClass = evt.phase === 'Fase E' ? 'fase-e' : 'fase-f';

        return `
          <div class="timeline-item ${side}" data-id="${evt.id}">
            <div class="timeline-dot"></div>
            <div class="timeline-event-card">
              <div class="timeline-card-header">
                <span class="timeline-phase-pill ${phaseClass}">${evt.phase}</span>
                <span class="timeline-chapter-pill">${evt.chapter}</span>
                <span class="timeline-year-chip">${evt.year}</span>
              </div>

              <h3 class="event-title">${evt.title}</h3>
              <p class="event-desc">${evt.summary}</p>
              
              <div class="event-tags">
                <span class="event-tag">📍 ${evt.location}</span>
                ${evt.figures.map(f => `<span class="event-tag">👤 ${f}</span>`).join('')}
              </div>

              <button class="btn-detail-event" data-id="${evt.id}" title="Telusuri kronologi dan makna sejarah peristiwa ini">
                <span>Detail Peristiwa</span>
                <span class="timeline-arrow">→</span>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    `;

    // Attach click handlers to "Detail Peristiwa"
    this.container.querySelectorAll('.btn-detail-event').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const eventId = btn.dataset.id;
        const eventData = EVENTS.find(e => e.id === eventId);
        if (eventData && window.openDetailModal) {
          const phaseBadgeClass = eventData.phase === 'Fase E' ? 'fase-e' : 'fase-f';
          window.openDetailModal({
            badge: `${eventData.phase} • ${eventData.chapter} • ${eventData.year}`,
            title: eventData.title,
            subtitle: `📍 Lokasi: ${eventData.location}`,
            content: `
              <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; flex-wrap: wrap; align-items: center;">
                <span class="timeline-phase-pill ${phaseBadgeClass}">${eventData.phase}</span>
                <span class="timeline-chapter-pill">${eventData.chapter}</span>
                <span class="timeline-year-chip">${eventData.year}</span>
              </div>

              <p style="margin-bottom: 1.25rem; font-size: 1.02rem; line-height: 1.75; color: var(--text-secondary); text-align: justify;">${eventData.detail}</p>
              
              <div style="background: var(--bg-secondary); border-left: 3px solid var(--text-gold); padding: 1.1rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; text-align: justify;">
                <h4 style="font-size: 0.95rem; color: var(--text-gold); margin-bottom: 0.4rem; font-weight: 700;">Signifikansi Sejarah & Capaian Pembelajaran:</h4>
                <p style="font-size: 0.93rem; margin: 0; color: var(--text-main); line-height: 1.6;">${eventData.significance}</p>
              </div>

              <h4 style="font-size: 0.95rem; margin-bottom: 0.6rem; color: var(--text-main); font-weight: 700;">Tokoh Kunci Terkait:</h4>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${eventData.figures.map(f => `<span class="event-tag" style="padding: 0.35rem 0.8rem; font-size: 0.85rem;">👤 ${f}</span>`).join('')}
              </div>
            `
          });
        }
      });
    });
  }
}
