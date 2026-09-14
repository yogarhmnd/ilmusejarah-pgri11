/* ==========================================================================
   ADMINISTRATOR UI CONTROLLER - SMK PGRI 11 CILEDUG
   Antarmuka Interaktif Pengubah Materi Langsung ke Cloud (Publik)
   ========================================================================== */

import { adminService } from './admin-service.js';
import { CURRICULUM_DATA } from './curriculum-data.js';

export class AdminUI {
  constructor(curriculumManager) {
    this.curriculum = curriculumManager;
    this.currentGrade = 'kelas-xi';
    this.currentModuleId = 'smk-xi-2';
    this.editingModule = null;
    this.activeEditorTab = 'subtopics';
    this.activeSubtopicIndex = 0;
    this.isPreviewMode = false;

    this.init();
  }

  init() {
    this.injectAdminNavbarControl();
    this.initLoginModalEvents();
    this.initEditorModalEvents();
    this.initChangePINModalEvents();

    // Pantau perubahan status otentikasi
    adminService.onAuthChange((isAuth) => {
      this.updateAdminStateUI(isAuth);
    });
  }

  /**
   * Menambahkan tombol Mode Admin pada Header / Navbar
   */
  injectAdminNavbarControl() {
    const navActions = document.querySelector('.nav-actions');
    if (navActions && !document.getElementById('nav-admin-btn-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.id = 'nav-admin-btn-wrapper';
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';

      wrapper.innerHTML = `
        <button class="btn-admin-pill" id="nav-admin-btn" title="Mode Administrator (Guru / Pengelola)">
          <span class="admin-pill-icon">🔐</span>
          <span class="admin-pill-text">Mode Admin</span>
        </button>
      `;

      // Masukkan sebelum tombol tema
      const themeBtn = navActions.querySelector('.theme-toggle-btn');
      if (themeBtn) {
        navActions.insertBefore(wrapper, themeBtn);
      } else {
        navActions.appendChild(wrapper);
      }

      const adminBtn = document.getElementById('nav-admin-btn');
      if (adminBtn) {
        adminBtn.addEventListener('click', () => {
          if (adminService.isAuthenticated) {
            this.openEditorModal();
          } else {
            this.openLoginModal();
          }
        });
      }
    }

    // Mobile drawer admin link
    const mobileAdminLink = document.getElementById('mobile-nav-admin-link');
    if (mobileAdminLink) {
      mobileAdminLink.addEventListener('click', () => {
        const drawer = document.getElementById('mobile-nav-drawer');
        if (drawer) drawer.classList.remove('open');
        if (adminService.isAuthenticated) {
          this.openEditorModal();
        } else {
          this.openLoginModal();
        }
      });
    }
  }

  /**
   * Memperbarui UI berdasarkan status login admin
   */
  updateAdminStateUI(isAuth) {
    const adminBtn = document.getElementById('nav-admin-btn');
    if (adminBtn) {
      if (isAuth) {
        adminBtn.classList.add('admin-active');
        adminBtn.innerHTML = `
          <span class="admin-pill-badge-live"></span>
          <span class="admin-pill-icon">🛡️</span>
          <span class="admin-pill-text">Admin Aktif</span>
          <span class="admin-pill-action" id="btn-admin-quick-logout" title="Keluar Mode Admin">✕</span>
        `;

        const logoutBtn = adminBtn.querySelector('#btn-admin-quick-logout');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Keluar dari Mode Administrator?')) {
              adminService.logout();
            }
          });
        }
      } else {
        adminBtn.classList.remove('admin-active');
        adminBtn.innerHTML = `
          <span class="admin-pill-icon">🔐</span>
          <span class="admin-pill-text">Mode Admin</span>
        `;
      }
    }

    // Refresh tampilan modul di kurikulum agar tombol edit muncul/sembunyi
    if (this.curriculum && typeof this.curriculum.renderGradeModules === 'function') {
      this.curriculum.renderGradeModules();
    }
  }

  /* --------------------------------------------------------------------------
     MODAL LOGIN ADMIN
     -------------------------------------------------------------------------- */
  openLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    const input = document.getElementById('admin-pin-input');
    const errBox = document.getElementById('admin-login-error');
    if (!modal) return;

    if (input) input.value = '';
    if (errBox) {
      errBox.textContent = '';
      errBox.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (input) input.focus();
    }, 150);
  }

  closeLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  initLoginModalEvents() {
    const modal = document.getElementById('admin-login-modal');
    const form = document.getElementById('admin-login-form');
    const closeBtn = document.getElementById('admin-login-close');
    const input = document.getElementById('admin-pin-input');
    const errBox = document.getElementById('admin-login-error');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLoginModal());
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeLoginModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pin = input ? input.value : '';
        const res = adminService.login(pin);
        if (res.success) {
          this.closeLoginModal();
          this.showToast('🎉 Berhasil masuk sebagai Administrator!', 'success');
          // Langsung buka editor materi jika diinginkan
          setTimeout(() => this.openEditorModal(), 250);
        } else {
          if (errBox) {
            errBox.textContent = res.message;
            errBox.style.display = 'block';
          }
          if (input) {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 400);
          }
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     MODAL EDITOR MATERI ADMINISTRATOR
     -------------------------------------------------------------------------- */
  openEditorModal(gradeKey = null, moduleId = null) {
    if (!adminService.isAuthenticated) {
      this.openLoginModal();
      return;
    }

    const modal = document.getElementById('admin-material-modal');
    if (!modal) return;

    if (gradeKey) this.currentGrade = gradeKey;
    if (moduleId) this.currentModuleId = moduleId;

    this.loadModuleForEditing(this.currentGrade, this.currentModuleId);
    this.renderEditorView();

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeEditorModal() {
    const modal = document.getElementById('admin-material-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  loadModuleForEditing(gradeKey, moduleId) {
    const curData = (this.curriculum && this.curriculum.curriculumData) ? this.curriculum.curriculumData : CURRICULUM_DATA;
    const gradeObj = curData[gradeKey] || CURRICULUM_DATA[gradeKey];

    if (!gradeObj || !Array.isArray(gradeObj.modules)) {
      this.currentGrade = 'kelas-xi';
      return this.loadModuleForEditing('kelas-xi', 'smk-xi-2');
    }

    let foundMod = gradeObj.modules.find(m => m.id === moduleId);
    if (!foundMod) {
      foundMod = gradeObj.modules[0];
      this.currentModuleId = foundMod ? foundMod.id : 'smk-xi-1';
    }

    // Salin objek secara mendalam (deep clone) agar perubahan tidak merusak data aktif sebelum disimpan
    this.editingModule = JSON.parse(JSON.stringify(foundMod));
    this.activeSubtopicIndex = 0;
    this.activeEditorTab = 'subtopics';
  }

  renderEditorView() {
    const curData = (this.curriculum && this.curriculum.curriculumData) ? this.curriculum.curriculumData : CURRICULUM_DATA;
    const gradeObj = curData[this.currentGrade] || CURRICULUM_DATA[this.currentGrade];

    // 1. Render Dropdown Pilihan Kelas & Bab
    const gradeSelect = document.getElementById('admin-select-grade');
    if (gradeSelect) {
      gradeSelect.value = this.currentGrade;
    }

    const moduleSelect = document.getElementById('admin-select-module');
    if (moduleSelect && gradeObj) {
      moduleSelect.innerHTML = gradeObj.modules.map(m => `
        <option value="${m.id}" ${m.id === this.editingModule.id ? 'selected' : ''}>
          ${m.icon || '📖'} ${m.title} (${m.phase})
        </option>
      `).join('');
    }

    // 2. Render Bidang Metadata Modul
    const titleInput = document.getElementById('admin-mod-title');
    const iconInput = document.getElementById('admin-mod-icon');
    const periodInput = document.getElementById('admin-mod-period');
    const cpSummaryInput = document.getElementById('admin-mod-cpsummary');

    if (titleInput) titleInput.value = this.editingModule.title || '';
    if (iconInput) iconInput.value = this.editingModule.icon || '📖';
    if (periodInput) periodInput.value = this.editingModule.period || '';
    if (cpSummaryInput) cpSummaryInput.value = this.editingModule.cpSummary || '';

    // 3. Render Tab Utama Editor
    this.renderEditorTabContent();
  }

  renderEditorTabContent() {
    // Aktifkan tab tombol
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === this.activeEditorTab);
    });

    const mount = document.getElementById('admin-editor-tab-mount');
    if (!mount) return;

    switch (this.activeEditorTab) {
      case 'subtopics':
        mount.innerHTML = this.renderSubtopicsEditorHTML();
        this.bindSubtopicsEvents();
        break;
      case 'syllabus':
        mount.innerHTML = this.renderSyllabusEditorHTML();
        this.bindSyllabusEvents();
        break;
      case 'glossary':
        mount.innerHTML = this.renderGlossaryEditorHTML();
        this.bindGlossaryEvents();
        break;
      case 'json':
        mount.innerHTML = this.renderJSONEditorHTML();
        this.bindJSONEvents();
        break;
    }
  }

  /* --- Subtopics Tab --- */
  renderSubtopicsEditorHTML() {
    const subtopics = this.editingModule.subtopics || [];
    const activeSub = subtopics[this.activeSubtopicIndex] || { heading: '', content: '' };

    return `
      <div class="admin-subtopics-layout">
        <!-- Sidebar Daftar Sub-Materi -->
        <div class="admin-subtopics-sidebar">
          <div class="sidebar-header">
            <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">
              📑 Sub-Materi (${subtopics.length})
            </span>
            <button class="btn-tool-sm" id="btn-add-subtopic" title="Tambah Subtopik Baru">
              ➕ Tambah
            </button>
          </div>

          <div class="admin-subtopics-list" id="admin-subtopics-list">
            ${subtopics.map((sub, idx) => `
              <div class="subtopic-nav-item ${idx === this.activeSubtopicIndex ? 'active' : ''}" data-index="${idx}">
                <span class="subtopic-nav-num">${idx + 1}</span>
                <span class="subtopic-nav-title" title="${sub.heading}">
                  ${sub.heading.replace(/^[0-9]+\.\s*/, '') || 'Subtopik Tanpa Judul'}
                </span>
                <div class="subtopic-nav-actions">
                  ${idx > 0 ? `<button class="btn-icon-sub" data-action="up" data-index="${idx}" title="Pindah ke Atas">▲</button>` : ''}
                  ${idx < subtopics.length - 1 ? `<button class="btn-icon-sub" data-action="down" data-index="${idx}" title="Pindah ke Bawah">▼</button>` : ''}
                  <button class="btn-icon-sub delete" data-action="delete" data-index="${idx}" title="Hapus Subtopik">🗑️</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Editor Konten Sub-Materi -->
        <div class="admin-subtopic-editor-panel">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div>
              <label class="admin-field-label">Judul Sub-Materi (Heading):</label>
              <input type="text" id="admin-subtopic-heading" class="admin-text-input" 
                value="${this.escapeHTML(activeSub.heading)}" placeholder="Contoh: 1. TUJUAN PEMBELAJARAN">
            </div>

            <!-- Markdown Toolbar & Switcher -->
            <div class="editor-header-bar">
              <div class="markdown-toolbar">
                <button type="button" class="toolbar-btn" data-format="bold" title="Tebal (**teks**)"><b>B</b></button>
                <button type="button" class="toolbar-btn" data-format="italic" title="Miring (*teks*)"><i>I</i></button>
                <button type="button" class="toolbar-btn" data-format="h2" title="Sub-Judul (## Judul)">H2</button>
                <button type="button" class="toolbar-btn" data-format="h3" title="Poin Sub (### Poin)">H3</button>
                <button type="button" class="toolbar-btn" data-format="bullet" title="Daftar Bullet (* Poin)">• List</button>
                <button type="button" class="toolbar-btn" data-format="table" title="Sisipkan Contoh Tabel">📊 Tabel</button>
                <button type="button" class="toolbar-btn" data-format="link" title="Sisipkan Tautan Arsip">🔗 Link</button>
              </div>

              <div class="preview-toggle-group">
                <button class="btn-preview-toggle ${!this.isPreviewMode ? 'active' : ''}" id="btn-mode-write">✏️ Tulis</button>
                <button class="btn-preview-toggle ${this.isPreviewMode ? 'active' : ''}" id="btn-mode-preview">👁️ Pratinjau</button>
              </div>
            </div>

            <!-- Textarea Tulis vs Pratinjau -->
            <div id="editor-write-pane" style="${this.isPreviewMode ? 'display: none;' : 'display: block;'}">
              <textarea id="admin-subtopic-content" class="admin-textarea" rows="18"
                placeholder="Tulis uraian materi lengkap di sini menggunakan format Markdown. Gunakan ## untuk sub-judul, * untuk butir poin, dan | untuk tabel.">${this.escapeHTML(activeSub.content)}</textarea>
            </div>

            <div id="editor-preview-pane" class="markdown-live-preview modal-reader-content" 
              style="${this.isPreviewMode ? 'display: block;' : 'display: none;'}">
              ${this.curriculum ? this.curriculum.formatMarkdown(activeSub.content) : activeSub.content}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bindSubtopicsEvents() {
    // Navigasi subtopik
    const listItems = document.querySelectorAll('.subtopic-nav-item');
    listItems.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('.subtopic-nav-actions')) return;
        this.saveCurrentSubtopicInputs();
        this.activeSubtopicIndex = parseInt(item.dataset.index, 10);
        this.renderEditorTabContent();
      });
    });

    // Aksi Subtopik (Up, Down, Delete)
    const actionBtns = document.querySelectorAll('.btn-icon-sub');
    actionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const idx = parseInt(btn.dataset.index, 10);
        const subtopics = this.editingModule.subtopics;

        this.saveCurrentSubtopicInputs();

        if (action === 'up' && idx > 0) {
          const temp = subtopics[idx];
          subtopics[idx] = subtopics[idx - 1];
          subtopics[idx - 1] = temp;
          this.activeSubtopicIndex = idx - 1;
        } else if (action === 'down' && idx < subtopics.length - 1) {
          const temp = subtopics[idx];
          subtopics[idx] = subtopics[idx + 1];
          subtopics[idx + 1] = temp;
          this.activeSubtopicIndex = idx + 1;
        } else if (action === 'delete') {
          if (confirm(`Hapus subtopik "${subtopics[idx].heading}"?`)) {
            subtopics.splice(idx, 1);
            if (this.activeSubtopicIndex >= subtopics.length) {
              this.activeSubtopicIndex = Math.max(0, subtopics.length - 1);
            }
          }
        }
        this.renderEditorTabContent();
      });
    });

    // Tambah Subtopik
    const addBtn = document.getElementById('btn-add-subtopic');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.saveCurrentSubtopicInputs();
        const nextNum = (this.editingModule.subtopics.length + 1);
        this.editingModule.subtopics.push({
          heading: `${nextNum}. SUBTOPIK BARU`,
          content: `## a. Judul Poin Pertama\nTulis uraian pembahasan materi di sini.\n\n* Butir penting 1\n* Butir penting 2`
        });
        this.activeSubtopicIndex = this.editingModule.subtopics.length - 1;
        this.renderEditorTabContent();
      });
    }

    // Toggle Tulis / Pratinjau
    const btnWrite = document.getElementById('btn-mode-write');
    const btnPreview = document.getElementById('btn-mode-preview');
    if (btnWrite && btnPreview) {
      btnWrite.addEventListener('click', () => {
        this.isPreviewMode = false;
        document.getElementById('editor-write-pane').style.display = 'block';
        document.getElementById('editor-preview-pane').style.display = 'none';
        btnWrite.classList.add('active');
        btnPreview.classList.remove('active');
      });

      btnPreview.addEventListener('click', () => {
        this.saveCurrentSubtopicInputs();
        this.isPreviewMode = true;
        const currentSub = this.editingModule.subtopics[this.activeSubtopicIndex];
        const previewPane = document.getElementById('editor-preview-pane');
        if (previewPane && currentSub) {
          previewPane.innerHTML = this.curriculum ? this.curriculum.formatMarkdown(currentSub.content) : currentSub.content;
        }
        document.getElementById('editor-write-pane').style.display = 'none';
        document.getElementById('editor-preview-pane').style.display = 'block';
        btnPreview.classList.add('active');
        btnWrite.classList.remove('active');
      });
    }

    // Markdown Toolbar Action Buttons
    const toolbarBtns = document.querySelectorAll('.toolbar-btn');
    const textarea = document.getElementById('admin-subtopic-content');
    toolbarBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!textarea) return;
        this.insertMarkdownFormat(textarea, btn.dataset.format);
      });
    });

    // Auto update state on input
    const headingInput = document.getElementById('admin-subtopic-heading');
    if (headingInput) {
      headingInput.addEventListener('input', () => {
        const sub = this.editingModule.subtopics[this.activeSubtopicIndex];
        if (sub) sub.heading = headingInput.value;
      });
    }
    if (textarea) {
      textarea.addEventListener('input', () => {
        const sub = this.editingModule.subtopics[this.activeSubtopicIndex];
        if (sub) sub.content = textarea.value;
      });
    }
  }

  saveCurrentSubtopicInputs() {
    const headingInput = document.getElementById('admin-subtopic-heading');
    const textarea = document.getElementById('admin-subtopic-content');
    if (this.editingModule.subtopics && this.editingModule.subtopics[this.activeSubtopicIndex]) {
      if (headingInput) this.editingModule.subtopics[this.activeSubtopicIndex].heading = headingInput.value;
      if (textarea) this.editingModule.subtopics[this.activeSubtopicIndex].content = textarea.value;
    }
  }

  insertMarkdownFormat(textarea, format) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);

    let replacement = '';
    let cursorOffset = 0;

    switch (format) {
      case 'bold':
        replacement = `**${selection || 'teks tebal'}**`;
        cursorOffset = selection ? replacement.length : 2;
        break;
      case 'italic':
        replacement = `*${selection || 'teks miring'}*`;
        cursorOffset = selection ? replacement.length : 1;
        break;
      case 'h2':
        replacement = `\n\n## ${selection || 'Judul Poin'}\n`;
        cursorOffset = replacement.length;
        break;
      case 'h3':
        replacement = `\n\n### ${selection || 'Sub Poin'}\n`;
        cursorOffset = replacement.length;
        break;
      case 'bullet':
        replacement = `\n* ${selection || 'Butir daftar 1'}\n* Butir daftar 2\n`;
        cursorOffset = replacement.length;
        break;
      case 'table':
        replacement = `\n\n| Kolom 1 | Kolom 2 |\n| --- | --- |\n| Data A | Penjelasan A |\n| Data B | Penjelasan B |\n\n`;
        cursorOffset = replacement.length;
        break;
      case 'link':
        replacement = `[${selection || 'Sumber: Arsip Nasional'}](https://anri.go.id)`;
        cursorOffset = replacement.length;
        break;
    }

    textarea.value = text.substring(0, start) + replacement + text.substring(end);
    textarea.focus();
    textarea.setSelectionRange(start + cursorOffset, start + cursorOffset);

    // Sync to model
    if (this.editingModule.subtopics[this.activeSubtopicIndex]) {
      this.editingModule.subtopics[this.activeSubtopicIndex].content = textarea.value;
    }
  }

  /* --- Syllabus Tab --- */
  renderSyllabusEditorHTML() {
    if (!this.editingModule.syllabus) {
      this.editingModule.syllabus = { atp: [], meaningfulUnderstanding: '', essentialQuestions: [] };
    }
    const syl = this.editingModule.syllabus;

    return `
      <div class="admin-syllabus-editor">
        <div class="admin-form-group">
          <label class="admin-field-label">💡 Pemahaman Bermakna (Meaningful Understanding):</label>
          <textarea id="admin-syl-meaningful" class="admin-textarea" rows="4" 
            placeholder="Tuliskan intisari pemahaman bermakna bagi peserta didik...">${this.escapeHTML(syl.meaningfulUnderstanding || '')}</textarea>
        </div>

        <div class="admin-form-group" style="margin-top: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label class="admin-field-label" style="margin: 0;">🎯 Alur Tujuan Pembelajaran (ATP):</label>
            <button class="btn-tool-sm" id="btn-add-atp">➕ Tambah ATP</button>
          </div>
          <div id="admin-atp-list" class="admin-dynamic-list">
            ${(syl.atp || []).map((item, i) => `
              <div class="dynamic-row">
                <span class="row-num">${i + 1}</span>
                <input type="text" class="admin-text-input atp-input" value="${this.escapeHTML(item)}" placeholder="Tulis capaian / tujuan pembelajaran...">
                <button class="btn-icon-sub delete btn-del-atp" data-index="${i}" title="Hapus">🗑️</button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="admin-form-group" style="margin-top: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label class="admin-field-label" style="margin: 0;">❓ Pertanyaan Pemantik Kritis (Essential Questions):</label>
            <button class="btn-tool-sm" id="btn-add-question">➕ Tambah Pertanyaan</button>
          </div>
          <div id="admin-questions-list" class="admin-dynamic-list">
            ${(syl.essentialQuestions || []).map((q, i) => `
              <div class="dynamic-row">
                <span class="row-num">${i + 1}</span>
                <input type="text" class="admin-text-input question-input" value="${this.escapeHTML(q)}" placeholder="Tulis pertanyaan pemantik kritis...">
                <button class="btn-icon-sub delete btn-del-question" data-index="${i}" title="Hapus">🗑️</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  bindSyllabusEvents() {
    const meaningfulInput = document.getElementById('admin-syl-meaningful');
    if (meaningfulInput) {
      meaningfulInput.addEventListener('input', () => {
        this.editingModule.syllabus.meaningfulUnderstanding = meaningfulInput.value;
      });
    }

    // ATP Bindings
    const addAtpBtn = document.getElementById('btn-add-atp');
    if (addAtpBtn) {
      addAtpBtn.addEventListener('click', () => {
        this.saveSyllabusInputs();
        if (!this.editingModule.syllabus.atp) this.editingModule.syllabus.atp = [];
        this.editingModule.syllabus.atp.push('Tujuan pembelajaran baru');
        this.renderEditorTabContent();
      });
    }

    const delAtpBtns = document.querySelectorAll('.btn-del-atp');
    delAtpBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveSyllabusInputs();
        const idx = parseInt(btn.dataset.index, 10);
        this.editingModule.syllabus.atp.splice(idx, 1);
        this.renderEditorTabContent();
      });
    });

    // Questions Bindings
    const addQBtn = document.getElementById('btn-add-question');
    if (addQBtn) {
      addQBtn.addEventListener('click', () => {
        this.saveSyllabusInputs();
        if (!this.editingModule.syllabus.essentialQuestions) this.editingModule.syllabus.essentialQuestions = [];
        this.editingModule.syllabus.essentialQuestions.push('Pertanyaan pemantik baru?');
        this.renderEditorTabContent();
      });
    }

    const delQBtns = document.querySelectorAll('.btn-del-question');
    delQBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveSyllabusInputs();
        const idx = parseInt(btn.dataset.index, 10);
        this.editingModule.syllabus.essentialQuestions.splice(idx, 1);
        this.renderEditorTabContent();
      });
    });
  }

  saveSyllabusInputs() {
    const meaningfulInput = document.getElementById('admin-syl-meaningful');
    if (meaningfulInput) {
      this.editingModule.syllabus.meaningfulUnderstanding = meaningfulInput.value;
    }

    const atpInputs = document.querySelectorAll('.atp-input');
    if (atpInputs.length > 0) {
      this.editingModule.syllabus.atp = Array.from(atpInputs).map(inp => inp.value);
    }

    const qInputs = document.querySelectorAll('.question-input');
    if (qInputs.length > 0) {
      this.editingModule.syllabus.essentialQuestions = Array.from(qInputs).map(inp => inp.value);
    }
  }

  /* --- Glossary Tab --- */
  renderGlossaryEditorHTML() {
    if (!this.editingModule.glossary) this.editingModule.glossary = [];
    if (!this.editingModule.reflectionQuestions) this.editingModule.reflectionQuestions = [];

    const glossary = this.editingModule.glossary;
    const reflections = this.editingModule.reflectionQuestions;

    return `
      <div class="admin-glossary-editor">
        <div class="admin-form-group">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <label class="admin-field-label" style="margin: 0;">📚 Glosarium Istilah (${glossary.length}):</label>
            <button class="btn-tool-sm" id="btn-add-glossary">➕ Tambah Istilah</button>
          </div>

          <div class="admin-glossary-table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Istilah (Term)</th>
                  <th style="width: 65%;">Pengertian / Definisi</th>
                  <th style="width: 10%; text-align: center;">Aksi</th>
                </tr>
              </thead>
              <tbody id="admin-glossary-tbody">
                ${glossary.map((item, i) => `
                  <tr>
                    <td>
                      <input type="text" class="admin-text-input gloss-term" value="${this.escapeHTML(item.term)}" placeholder="Istilah">
                    </td>
                    <td>
                      <textarea class="admin-text-input gloss-def" rows="2" placeholder="Pengertian istilah">${this.escapeHTML(item.def)}</textarea>
                    </td>
                    <td style="text-align: center;">
                      <button class="btn-icon-sub delete btn-del-gloss" data-index="${i}" title="Hapus">🗑️</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="admin-form-group" style="margin-top: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label class="admin-field-label" style="margin: 0;">🤔 Pertanyaan Refleksi Kritis (${reflections.length}):</label>
            <button class="btn-tool-sm" id="btn-add-reflection">➕ Tambah Refleksi</button>
          </div>
          <div id="admin-reflections-list" class="admin-dynamic-list">
            ${reflections.map((q, i) => `
              <div class="dynamic-row">
                <span class="row-num">${i + 1}</span>
                <input type="text" class="admin-text-input reflection-input" value="${this.escapeHTML(q)}" placeholder="Tulis pertanyaan refleksi evaluatif...">
                <button class="btn-icon-sub delete btn-del-reflection" data-index="${i}" title="Hapus">🗑️</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  bindGlossaryEvents() {
    const addGlossBtn = document.getElementById('btn-add-glossary');
    if (addGlossBtn) {
      addGlossBtn.addEventListener('click', () => {
        this.saveGlossaryInputs();
        this.editingModule.glossary.unshift({ term: 'Istilah Baru', def: 'Definisi atau keterangan istilah.' });
        this.renderEditorTabContent();
      });
    }

    const delGlossBtns = document.querySelectorAll('.btn-del-gloss');
    delGlossBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveGlossaryInputs();
        const idx = parseInt(btn.dataset.index, 10);
        this.editingModule.glossary.splice(idx, 1);
        this.renderEditorTabContent();
      });
    });

    const addReflBtn = document.getElementById('btn-add-reflection');
    if (addReflBtn) {
      addReflBtn.addEventListener('click', () => {
        this.saveGlossaryInputs();
        this.editingModule.reflectionQuestions.push('Pertanyaan refleksi baru?');
        this.renderEditorTabContent();
      });
    }

    const delReflBtns = document.querySelectorAll('.btn-del-reflection');
    delReflBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveGlossaryInputs();
        const idx = parseInt(btn.dataset.index, 10);
        this.editingModule.reflectionQuestions.splice(idx, 1);
        this.renderEditorTabContent();
      });
    });
  }

  saveGlossaryInputs() {
    const terms = document.querySelectorAll('.gloss-term');
    const defs = document.querySelectorAll('.gloss-def');
    const newGlossary = [];
    terms.forEach((tInp, i) => {
      const termVal = tInp.value.trim();
      const defVal = defs[i] ? defs[i].value.trim() : '';
      if (termVal || defVal) {
        newGlossary.push({ term: termVal, def: defVal });
      }
    });
    this.editingModule.glossary = newGlossary;

    const reflInputs = document.querySelectorAll('.reflection-input');
    if (reflInputs.length > 0) {
      this.editingModule.reflectionQuestions = Array.from(reflInputs).map(inp => inp.value);
    }
  }

  /* --- JSON Tab --- */
  renderJSONEditorHTML() {
    const jsonStr = JSON.stringify(this.editingModule, null, 2);
    return `
      <div class="admin-json-editor">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <span style="font-size: 0.9rem; color: var(--text-muted);">
            ⚡ Editor JSON Lengkap (Gunakan untuk salin materi dalam skala besar atau backup data)
          </span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn-tool-sm" id="btn-copy-json">📋 Salin JSON</button>
            <button class="btn-tool-sm" id="btn-apply-json">🔄 Terapkan Perubahan JSON</button>
          </div>
        </div>

        <textarea id="admin-json-textarea" class="admin-textarea monospace" rows="22">${this.escapeHTML(jsonStr)}</textarea>
      </div>
    `;
  }

  bindJSONEvents() {
    const copyBtn = document.getElementById('btn-copy-json');
    const applyBtn = document.getElementById('btn-apply-json');
    const textarea = document.getElementById('admin-json-textarea');

    if (copyBtn && textarea) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(textarea.value).then(() => {
          this.showToast('📋 JSON berhasil disalin ke clipboard!', 'info');
        });
      });
    }

    if (applyBtn && textarea) {
      applyBtn.addEventListener('click', () => {
        try {
          const parsed = JSON.parse(textarea.value);
          if (!parsed.id || !parsed.title) {
            throw new Error('Data JSON harus memiliki properti "id" dan "title".');
          }
          this.editingModule = parsed;
          this.renderEditorView();
          this.showToast('✅ Perubahan JSON berhasil diterapkan ke editor!', 'success');
        } catch (err) {
          alert('❌ Format JSON tidak valid:\n' + err.message);
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     SIMPAN DATA KE CLOUD (FIREBASE REALTIME DATABASE)
     -------------------------------------------------------------------------- */
  async saveChangesToCloud() {
    // 1. Simpan input aktif saat ini
    this.saveCurrentSubtopicInputs();
    if (this.activeEditorTab === 'syllabus') this.saveSyllabusInputs();
    if (this.activeEditorTab === 'glossary') this.saveGlossaryInputs();

    // 2. Simpan metadata header
    const titleInput = document.getElementById('admin-mod-title');
    const iconInput = document.getElementById('admin-mod-icon');
    const periodInput = document.getElementById('admin-mod-period');
    const cpSummaryInput = document.getElementById('admin-mod-cpsummary');

    if (titleInput) this.editingModule.title = titleInput.value.trim();
    if (iconInput) this.editingModule.icon = iconInput.value.trim() || '📖';
    if (periodInput) this.editingModule.period = periodInput.value.trim();
    if (cpSummaryInput) this.editingModule.cpSummary = cpSummaryInput.value.trim();

    // 3. Eksekusi simpan ke Firebase Realtime Database
    const saveBtn = document.getElementById('btn-save-cloud');
    const originalText = saveBtn ? saveBtn.innerHTML : '';
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = '⏳ Menyimpan ke Cloud...';
    }

    try {
      await adminService.saveModule(this.currentGrade, this.editingModule.id, this.editingModule);

      this.showToast('🎉 Materi Berhasil Disimpan & Aktif Live di Website Publik!', 'success');

      // Refresh reader jika terbuka
      if (this.curriculum) {
        if (typeof this.curriculum.loadFirebaseData === 'function') {
          await this.curriculum.loadFirebaseData();
        }
      }

      this.closeEditorModal();
    } catch (err) {
      alert('❌ Gagal menyimpan ke Cloud:\n' + err.message + '\n\nPastikan koneksi internet stabil dan Firebase Database aktif.');
    } finally {
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalText;
      }
    }
  }

  /* --------------------------------------------------------------------------
     EVENT LISTENERS MODAL EDITOR
     -------------------------------------------------------------------------- */
  initEditorModalEvents() {
    const modal = document.getElementById('admin-material-modal');
    const closeBtn = document.getElementById('admin-editor-close');
    const saveBtn = document.getElementById('btn-save-cloud');
    const previewBtn = document.getElementById('btn-editor-preview-student');
    const resetBtn = document.getElementById('btn-reset-default');
    const gradeSelect = document.getElementById('admin-select-grade');
    const moduleSelect = document.getElementById('admin-select-module');
    const createModBtn = document.getElementById('btn-create-new-module');
    const changePinBtn = document.getElementById('btn-admin-change-pin');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeEditorModal());

    // Switch Grade
    if (gradeSelect) {
      gradeSelect.addEventListener('change', (e) => {
        this.currentGrade = e.target.value;
        const curData = this.curriculum?.curriculumData || CURRICULUM_DATA;
        const firstMod = curData[this.currentGrade]?.modules?.[0];
        this.currentModuleId = firstMod ? firstMod.id : '';
        this.loadModuleForEditing(this.currentGrade, this.currentModuleId);
        this.renderEditorView();
      });
    }

    // Switch Module
    if (moduleSelect) {
      moduleSelect.addEventListener('change', (e) => {
        this.currentModuleId = e.target.value;
        this.loadModuleForEditing(this.currentGrade, this.currentModuleId);
        this.renderEditorView();
      });
    }

    // Tambah Modul / Bab Baru
    if (createModBtn) {
      createModBtn.addEventListener('click', () => {
        const title = prompt('Masukkan Judul Bab Baru:', 'BAB Baru: Pembelajaran Sejarah');
        if (!title) return;
        const newId = `smk-${this.currentGrade.replace('kelas-', '')}-${Date.now()}`;
        const newMod = {
          id: newId,
          title: title.trim(),
          phase: this.currentGrade === 'kelas-x' ? 'Fase E' : 'Fase F',
          grade: this.currentGrade === 'kelas-x' ? 'Kelas X' : 'Kelas XI',
          icon: '📖',
          period: 'Periode Sejarah',
          cpSummary: 'Ringkasan capaian pembelajaran bab baru.',
          syllabus: {
            atp: ['Alur tujuan pembelajaran pertama.'],
            meaningfulUnderstanding: 'Pemahaman bermakna bagi peserta didik.',
            essentialQuestions: ['Pertanyaan pemantik kritis?']
          },
          subtopics: [
            {
              heading: '1. TUJUAN PEMBELAJARAN',
              content: 'Tulis uraian materi lengkap di sini.'
            }
          ],
          glossary: [{ term: 'Istilah', def: 'Definisi' }],
          reflectionQuestions: ['Refleksi materi bab ini?']
        };

        const curData = this.curriculum?.curriculumData || CURRICULUM_DATA;
        if (curData[this.currentGrade]) {
          curData[this.currentGrade].modules.push(newMod);
        }

        this.currentModuleId = newId;
        this.loadModuleForEditing(this.currentGrade, newId);
        this.renderEditorView();
        this.showToast('✨ Modul baru berhasil dibuat. Silakan lengkapi dan klik Simpan ke Cloud!', 'info');
      });
    }

    // Switch Editor Tab
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveCurrentSubtopicInputs();
        if (this.activeEditorTab === 'syllabus') this.saveSyllabusInputs();
        if (this.activeEditorTab === 'glossary') this.saveGlossaryInputs();

        this.activeEditorTab = btn.dataset.tab;
        this.renderEditorTabContent();
      });
    });

    // Save to Cloud
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.saveChangesToCloud());
    }

    // Preview in Student Reader
    if (previewBtn) {
      previewBtn.addEventListener('click', () => {
        this.saveCurrentSubtopicInputs();
        if (this.curriculum) {
          this.curriculum.openModuleReader(this.editingModule);
        }
      });
    }

    // Reset to Default
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Kembalikan modul ini ke isi bawaan awal (local default)? Perubahan yang belum disimpan ke cloud akan hilang.')) {
          const defaultMod = CURRICULUM_DATA[this.currentGrade]?.modules?.find(m => m.id === this.currentModuleId);
          if (defaultMod) {
            this.editingModule = JSON.parse(JSON.stringify(defaultMod));
            this.renderEditorView();
            this.showToast('🔄 Modul dikembalikan ke versi bawaan lokal.', 'info');
          }
        }
      });
    }

    // Change PIN Trigger
    if (changePinBtn) {
      changePinBtn.addEventListener('click', () => {
        this.openChangePINModal();
      });
    }
  }

  /* --------------------------------------------------------------------------
     MODAL GANTI PIN ADMIN
     -------------------------------------------------------------------------- */
  openChangePINModal() {
    const modal = document.getElementById('admin-pin-modal');
    if (!modal) return;
    document.getElementById('old-pin-input').value = '';
    document.getElementById('new-pin-input').value = '';
    document.getElementById('pin-modal-error').style.display = 'none';
    modal.classList.add('open');
  }

  closeChangePINModal() {
    const modal = document.getElementById('admin-pin-modal');
    if (modal) modal.classList.remove('open');
  }

  initChangePINModalEvents() {
    const modal = document.getElementById('admin-pin-modal');
    const form = document.getElementById('admin-pin-form');
    const closeBtn = document.getElementById('admin-pin-close');
    const errBox = document.getElementById('pin-modal-error');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeChangePINModal());
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeChangePINModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const oldPin = document.getElementById('old-pin-input').value;
        const newPin = document.getElementById('new-pin-input').value;

        const res = adminService.changePIN(oldPin, newPin);
        if (res.success) {
          this.closeChangePINModal();
          this.showToast('🔑 ' + res.message, 'success');
        } else {
          if (errBox) {
            errBox.textContent = res.message;
            errBox.style.display = 'block';
          }
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     TOAST NOTIFICATION HELPER
     -------------------------------------------------------------------------- */
  showToast(message, type = 'info') {
    let container = document.getElementById('admin-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'admin-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `admin-toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">${message}</div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
