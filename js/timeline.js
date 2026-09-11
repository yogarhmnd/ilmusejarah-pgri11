/* ==========================================================================
   KRONIK NUSANTARA - TIMELINE CONTROLLER
   ========================================================================== */

import { ERAS, EVENTS } from './data.js';
import { soundManager } from './audio.js';

export class TimelineController {
  constructor(containerSelector, tabsContainerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.currentEra = 'all';
    this.init();
  }

  init() {
    this.renderTabs();
    this.renderEvents();
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
        <button class="era-tab-btn ${era.id === this.currentEra ? 'active' : ''}" data-era="${era.id}">
          <span>${era.icon}</span>
          <span>${era.name}</span>
          <span class="tab-badge" style="margin-left: 0.35rem; font-size: 0.72rem; padding: 0.15rem 0.45rem; background: rgba(255,255,255,0.1); border-radius: var(--radius-full);">${count}</span>
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

  renderEvents() {
    if (!this.container) return;

    let filtered = EVENTS;
    if (this.currentEra === 'fase-e') {
      filtered = EVENTS.filter(evt => evt.phase === 'Fase E');
    } else if (this.currentEra === 'fase-f') {
      filtered = EVENTS.filter(evt => evt.phase === 'Fase F');
    } else if (this.currentEra !== 'all') {
      filtered = EVENTS.filter(evt => evt.era === this.currentEra);
    }

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          Tidak ada peristiwa dalam era ini.
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div class="timeline-line"></div>
      ${filtered.map((evt, idx) => {
        const side = idx % 2 === 0 ? 'left' : 'right';
        return `
          <div class="timeline-item ${side}" data-id="${evt.id}">
            <div class="timeline-dot"></div>
            <div class="timeline-event-card">
              <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap;">
                <span class="curriculum-badge">${evt.phase}</span>
                <span class="chapter-badge">${evt.chapter}</span>
                <span class="event-year-badge">${evt.year}</span>
              </div>

              <h3 class="event-title">${evt.title}</h3>
              <p class="event-desc" style="text-indent: 0 !important; text-align: left !important;">${evt.summary}</p>
              
              <div class="event-tags">
                <span class="event-tag">📍 ${evt.location}</span>
                ${evt.figures.map(f => `<span class="event-tag">👤 ${f}</span>`).join('')}
              </div>

              <button class="btn btn-secondary btn-detail-event" data-id="${evt.id}" style="padding: 0.5rem 1rem; font-size: 0.85rem; margin-top: 0.6rem;">
                <span>Telusuri Peristiwa</span>
                <span>→</span>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    `;

    // Attach click handlers to "Telusuri Peristiwa"
    this.container.querySelectorAll('.btn-detail-event').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const eventId = btn.dataset.id;
        const eventData = EVENTS.find(e => e.id === eventId);
        if (eventData && window.openDetailModal) {
          window.openDetailModal({
            badge: `${eventData.phase} • ${eventData.chapter} • ${eventData.year}`,
            title: eventData.title,
            subtitle: `📍 Lokasi: ${eventData.location}`,
            content: `
              <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
                <span class="curriculum-badge">${eventData.phase}</span>
                <span class="chapter-badge">${eventData.chapter}</span>
                <span class="event-year-badge">${eventData.year}</span>
              </div>

              <p style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.75; text-indent: 0 !important; text-align: left !important;">${eventData.detail}</p>
              
              <div style="background: var(--bg-secondary); border-left: 3px solid var(--gold-500); padding: 1rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; text-indent: 0 !important; text-align: left !important;">
                <h4 style="font-size: 0.95rem; color: var(--text-gold); margin-bottom: 0.4rem;">Signifikansi Sejarah:</h4>
                <p style="font-size: 0.94rem; margin: 0; text-indent: 0 !important; text-align: left !important;">${eventData.significance}</p>
              </div>

              <h4 style="font-size: 0.95rem; margin-bottom: 0.6rem; color: var(--text-main);">Tokoh Kunci Terkait:</h4>
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
