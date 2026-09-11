/* ==========================================================================
   KRONIK NUSANTARA - CONTROLLER MODUL KURIKULUM SEJARAH SMK LENGKAP
   Tabbed E-Book Reader Interaktif untuk Kelas X (Fase E) & Kelas XI (Fase F)
   ========================================================================== */

import { CURRICULUM_DATA } from './curriculum-data.js';
import { soundManager } from './audio.js';

export class CurriculumController {
  constructor(containerSelector, tabsContainerSelector, headerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.headerBox = document.querySelector(headerSelector);
    this.currentGrade = 'kelas-x';
    this.activeReaderTab = 'materi';
    this.init();
  }

  init() {
    this.renderTabs();
    this.renderGradeModules();
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = `
      <button class="curriculum-tab-btn ${this.currentGrade === 'kelas-x' ? 'active' : ''}" data-grade="kelas-x">
        <span class="grade-letter-icon">X</span>
        <span>Kelas X (Fase E)</span>
        <span class="tab-badge">4 Modul CP</span>
      </button>
      <button class="curriculum-tab-btn ${this.currentGrade === 'kelas-xi' ? 'active' : ''}" data-grade="kelas-xi">
        <span class="grade-letter-icon">XI</span>
        <span>Kelas XI (Fase F)</span>
        <span class="tab-badge">6 Modul CP</span>
      </button>
    `;

    this.tabsContainer.querySelectorAll('.curriculum-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const grade = btn.dataset.grade;
        this.setGrade(grade);
      });
    });
  }

  setGrade(grade) {
    this.currentGrade = grade;
    this.tabsContainer.querySelectorAll('.curriculum-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.grade === grade);
    });
    this.renderGradeModules();
  }

  renderGradeModules() {
    const data = CURRICULUM_DATA[this.currentGrade];
    if (!data) return;

    // Update CP Header
    if (this.headerBox) {
      this.headerBox.innerHTML = `
        <div class="cp-header-card">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
            <span class="curriculum-badge">${data.phase}</span>
            <strong style="color: var(--text-main); font-size: 1.15rem;">${data.grade}</strong>
            <span style="font-size: 0.85rem; color: var(--text-gold); background: var(--bg-tertiary); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border-gold);">
              Kurikulum Merdeka Kemendikdasmen
            </span>
          </div>
          <p style="margin: 0; font-size: 0.98rem; line-height: 1.65; color: var(--text-secondary);">
            ${data.cpHeader}
          </p>
        </div>
      `;
    }

    // Render Cards
    if (!this.container) return;

    this.container.innerHTML = data.modules.map((mod, idx) => `
      <div class="curriculum-card card-glass" data-id="${mod.id}">
        <div class="curriculum-card-top">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            <span class="curriculum-icon-box">${mod.icon}</span>
            <div style="text-align: right;">
              <span class="curriculum-badge">${mod.phase}</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${mod.period}</div>
            </div>
          </div>
          <h3 class="curriculum-card-title">${mod.title}</h3>
          <p class="curriculum-card-summary">${mod.cpSummary}</p>
        </div>

        <div class="curriculum-card-meta">
          <div class="meta-item">
            <span>🎯</span>
            <span><strong>${mod.syllabus?.atp?.length || 4}</strong> Alur Tujuan Pembelajaran (ATP)</span>
          </div>
          <div class="meta-item">
            <span>📖</span>
            <span><strong>${mod.subtopics?.length || 4}</strong> Sub-Materi Komprehensif</span>
          </div>
          <div class="meta-item">
            <span>📚</span>
            <span><strong>${mod.glossary?.length || 6}</strong> Glosarium & Refleksi Kritis</span>
          </div>
        </div>

        <div class="curriculum-card-footer">
          <button class="btn btn-primary btn-open-curriculum" data-id="${mod.id}" style="width: 100%;">
            <span>📖 Buka Modul Ajar Digital</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners
    this.container.querySelectorAll('.btn-open-curriculum').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const modId = btn.dataset.id;
        const currentData = CURRICULUM_DATA[this.currentGrade];
        const moduleObj = currentData.modules.find(m => m.id === modId);
        if (moduleObj) {
          this.openModuleReader(moduleObj);
        }
      });
    });
  }

  openModuleReader(mod) {
    this.activeReaderTab = 'materi';

    const renderModalBody = () => {
      return `
        <div class="modal-reader-container">
          <!-- Reader Navigation Tabs -->
          <div class="modal-reader-tabs">
            <button class="reader-tab-btn ${this.activeReaderTab === 'silabus' ? 'active' : ''}" data-tab="silabus">
              <span>📋</span> Silabus & ATP
            </button>
            <button class="reader-tab-btn ${this.activeReaderTab === 'materi' ? 'active' : ''}" data-tab="materi">
              <span>📖</span> Uraian Materi Lengkap
            </button>
            <button class="reader-tab-btn ${this.activeReaderTab === 'glosarium' ? 'active' : ''}" data-tab="glosarium">
              <span>📝</span> Glosarium & Refleksi
            </button>
          </div>

          <!-- Tab Content Mount -->
          <div class="modal-reader-content" id="reader-tab-mount">
            ${this.getTabContent(mod, this.activeReaderTab)}
          </div>
        </div>
      `;
    };

    window.openDetailModal({
      badge: `${mod.grade} • ${mod.phase}`,
      title: `${mod.icon} ${mod.title}`,
      subtitle: `Periode: ${mod.period} • Kurikulum Merdeka Kemendikdasmen`,
      content: renderModalBody()
    });

    // Attach tab switching events inside the open modal
    this.bindReaderTabEvents(mod);
  }

  bindReaderTabEvents(mod) {
    const tabBtns = document.querySelectorAll('.modal-reader-tabs .reader-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const tab = btn.dataset.tab;
        this.activeReaderTab = tab;
        tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
        
        const mount = document.getElementById('reader-tab-mount');
        if (mount) {
          mount.innerHTML = this.getTabContent(mod, tab);
        }
      });
    });
  }

  getTabContent(mod, tabName) {
    switch (tabName) {
      case 'silabus':
        return `
          <div class="reader-section-fade">
            <div style="background: rgba(229, 169, 60, 0.08); border-left: 4px solid var(--gold-500); padding: 1.25rem 1.5rem; border-radius: var(--radius-sm); margin-bottom: 1.75rem;">
              <h4 style="color: var(--text-gold); font-size: 1.05rem; margin-bottom: 0.5rem;">💡 Pemahaman Bermakna (Meaningful Understanding):</h4>
              <p style="margin: 0; font-size: 0.98rem; line-height: 1.65; color: var(--text-secondary);">
                ${mod.syllabus?.meaningfulUnderstanding || ''}
              </p>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.75rem;">
              <h4 style="color: var(--text-main); font-size: 1.05rem; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>🎯</span> Alur Tujuan Pembelajaran (ATP):
              </h4>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                ${(mod.syllabus?.atp || []).map(item => `
                  <li style="display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.55;">
                    <span style="color: var(--emerald-500); font-weight: bold;">✔</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div style="background: var(--bg-secondary); border: 1px solid var(--border-gold); padding: 1.25rem 1.5rem; border-radius: var(--radius-md);">
              <h4 style="color: var(--gold-400); font-size: 1.05rem; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>❓</span> Pertanyaan Pemantik Kritis (Essential Questions):
              </h4>
              <ol style="padding-left: 1.2rem; margin: 0; display: flex; flex-direction: column; gap: 0.6rem;">
                ${(mod.syllabus?.essentialQuestions || []).map(q => `
                  <li style="font-size: 0.95rem; color: var(--text-main); line-height: 1.55; font-style: italic;">
                    "${q}"
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>
        `;

      case 'materi':
        return `
          <div class="reader-section-fade">
            ${(mod.subtopics || []).map((sub, i) => `
              <div class="subtopic-reading-block">
                <h3 class="subtopic-heading">
                  <span class="subtopic-number">${i + 1}</span>
                  <span>${sub.heading.replace(/^[0-9]+\.\s*/, '')}</span>
                </h3>
                <div class="subtopic-body-text">
                  ${this.formatMarkdown(sub.content)}
                </div>
              </div>
            `).join('')}
          </div>
        `;

      case 'vokasi':
        const vCase = mod.vocationalCaseStudy;
        return `
          <div class="reader-section-fade">
            <div class="vocational-hero-card">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
                <span class="curriculum-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: var(--emerald-500);">
                  Problem-Based Learning SMK
                </span>
              </div>
              <h3 style="font-size: 1.35rem; color: #ffffff; margin-bottom: 0.75rem;">
                ${vCase?.title || 'Studi Kasus Vokasi'}
              </h3>
              
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
                ${(vCase?.fields || []).map(f => `
                  <span class="vocational-tag">⚙️ ${f}</span>
                `).join('')}
              </div>

              <div style="background: rgba(0, 0, 0, 0.35); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem; border: 1px solid rgba(255, 255, 255, 0.1);">
                <h4 style="font-size: 1rem; color: var(--gold-400); margin-bottom: 0.4rem;">Konteks & Skenario Masalah:</h4>
                <p style="margin: 0; font-size: 0.96rem; line-height: 1.65; color: var(--text-secondary);">
                  ${vCase?.problemScenario || ''}
                </p>
              </div>

              <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--emerald-500); padding: 1.25rem; border-radius: var(--radius-sm);">
                <h4 style="font-size: 1rem; color: #34d399; margin-bottom: 0.6rem;">Tantangan Analisis & Penugasan Siswa SMK:</h4>
                <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main); white-space: pre-line;">
                  ${vCase?.analysisPrompt || ''}
                </div>
              </div>
            </div>
          </div>
        `;

      case 'glosarium':
        return `
          <div class="reader-section-fade">
            <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>📚</span> Glosarium Istilah Konseptual:
            </h4>
            <div class="glossary-grid-box" style="margin-bottom: 2rem;">
              ${(mod.glossary || []).map(g => `
                <div class="glossary-card-item">
                  <div class="glossary-term-badge">${g.term}</div>
                  <div class="glossary-term-def">${g.def}</div>
                </div>
              `).join('')}
            </div>

            <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>🤔</span> Uji Refleksi Nalar Kritis:
            </h4>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${(mod.reflectionQuestions || []).map((rq, idx) => `
                <div style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 1.25rem 1.5rem; border-radius: var(--radius-md);">
                  <div style="font-weight: 700; color: var(--gold-400); margin-bottom: 0.4rem;">Refleksi ${idx + 1}:</div>
                  <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${rq}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      default:
        return '';
    }
  }

  formatMarkdown(str) {
    if (!str) return '';

    // 1. Ekstraksi blok kode / diagram ASCII
    const codeBlocks = [];
    let text = str.replace(/```([\s\S]*?)```/g, (match, code) => {
      const idx = codeBlocks.length;
      codeBlocks.push(`<pre class="ascii-diagram-box">${code.trim()}</pre>`);
      return `___CODE_BLOCK_${idx}___`;
    });

    // 2. Format tebal dan miring
    text = text
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-main); font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em style="color: var(--gold-400); font-style: italic;">$1</em>');

    // 3. Pisah menjadi blok paragraf
    const rawBlocks = text.split(/\n\n+/);

    const rendered = rawBlocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      // Cek placeholder blok kode
      if (trimmed.startsWith('___CODE_BLOCK_') && trimmed.endsWith('___')) {
        const idx = parseInt(trimmed.replace('___CODE_BLOCK_', '').replace('___', ''), 10);
        return codeBlocks[idx] || '';
      }

      // Cek garis pembatas horizontal
      if (trimmed === '---') {
        return '<hr style="border: none; border-top: 1px solid var(--border-subtle); margin: 1.5rem 0;">';
      }

      // Cek heading (## Judul)
      if (trimmed.startsWith('## ')) {
        const hText = trimmed.replace(/^##\s+/, '');
        return `<h4 class="subtopic-inner-heading" style="color: var(--gold-400); margin: 1.25rem 0 0.5rem 0; font-size: 1.15rem;">${hText}</h4>`;
      }

      // Cek sub-heading (### Judul)
      if (trimmed.startsWith('### ')) {
        const hText = trimmed.replace(/^###\s+/, '');
        return `<h5 class="subtopic-inner-subheading" style="color: var(--gold-300); margin: 1rem 0 0.4rem 0; font-size: 1.05rem; font-weight: 600;">${hText}</h5>`;
      }

      // Cek blockquote (> Teks)
      if (trimmed.startsWith('>')) {
        const bText = trimmed.replace(/^>\s*/gm, '').replace(/\n/g, '<br>');
        return `<blockquote class="subtopic-quote" style="border-left: 3px solid var(--gold-500); background: rgba(0, 169, 184, 0.08); padding: 0.75rem 1.25rem; margin: 1rem 0; border-radius: 0 8px 8px 0; font-style: italic; color: var(--text-main);">${bText}</blockquote>`;
      }

      // Cek tabel Markdown (| th | th |)
      const lines = trimmed.split('\n').map(l => l.trim());
      if (lines.length >= 2 && lines[0].startsWith('|') && lines[0].endsWith('|')) {
        const isTable = lines.length > 1 && lines[1].includes('---');
        if (isTable) {
          const headers = lines[0].slice(1, -1).split('|').map(h => h.trim());
          const rows = lines.slice(2).filter(l => l.startsWith('|') && l.endsWith('|')).map(l => {
            return l.slice(1, -1).split('|').map(c => c.trim());
          });

          let tableHtml = '<div class="subtopic-table-wrapper"><table class="subtopic-table"><thead><tr>';
          headers.forEach(h => {
            tableHtml += `<th>${h}</th>`;
          });
          tableHtml += '</tr></thead><tbody>';
          rows.forEach(r => {
            tableHtml += '<tr>';
            r.forEach(c => {
              tableHtml += `<td>${c}</td>`;
            });
            tableHtml += '</tr>';
          });
          tableHtml += '</tbody></table></div>';
          return tableHtml;
        }
      }

      // Parsing baris teks, daftar bullet (* / - / •), dan nomor urut (1. / 2.)
      const processedElements = [];
      let inUl = false;
      let inOl = false;
      let currentParaLines = [];

      const flushPara = () => {
        if (currentParaLines.length > 0) {
          const inner = currentParaLines.join('<br>');
          processedElements.push(`<p style="margin: 0 0 1rem 0; line-height: 1.8; text-align: justify; text-justify: inter-word;">${inner}</p>`);
          currentParaLines = [];
        }
      };

      lines.forEach(line => {
        const isBullet = line.startsWith('* ') || line.startsWith('- ') || line.startsWith('• ');
        const isNumbered = /^\d+\.\s+/.test(line);

        if (isBullet) {
          flushPara();
          if (inOl) { processedElements.push('</ol>'); inOl = false; }
          if (!inUl) { processedElements.push('<ul class="subtopic-list">'); inUl = true; }
          const itemText = line.replace(/^[\*\-•]\s+/, '').trim();
          processedElements.push(`<li>${itemText}</li>`);
        } else if (isNumbered) {
          flushPara();
          if (inUl) { processedElements.push('</ul>'); inUl = false; }
          if (!inOl) { processedElements.push('<ol class="subtopic-list" style="margin-left: 1.5rem;">'); inOl = true; }
          const itemText = line.replace(/^\d+\.\s+/, '').trim();
          processedElements.push(`<li>${itemText}</li>`);
        } else {
          if (inUl) { processedElements.push('</ul>'); inUl = false; }
          if (inOl) { processedElements.push('</ol>'); inOl = false; }
          currentParaLines.push(line);
        }
      });

      if (inUl) processedElements.push('</ul>');
      if (inOl) processedElements.push('</ol>');
      flushPara();

      return processedElements.join('');
    });

    return rendered.join('');
  }
}
