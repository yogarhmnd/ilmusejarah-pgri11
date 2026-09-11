/* ==========================================================================
   SEJARAH NUSANTARA - CONTROLLER DOKUMEN & SUMBER SEJARAH OTENTIK PER FASE
   ========================================================================== */

import { PHASE_DOCUMENTS_DATA } from './documents-data.js';
import { soundManager } from './audio.js';

export class DocumentsController {
  constructor(containerSelector, tabsContainerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderFilterTabs();
    this.renderDocuments();
  }

  renderFilterTabs() {
    if (!this.tabsContainer) return;
    const countAll = PHASE_DOCUMENTS_DATA.length;
    const countE = PHASE_DOCUMENTS_DATA.filter(d => d.phase === 'Fase E').length;
    const countF = PHASE_DOCUMENTS_DATA.filter(d => d.phase === 'Fase F').length;

    this.tabsContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 0.75rem;">
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
          <button class="doc-filter-btn ${this.currentFilter === 'all' ? 'active' : ''}" data-filter="all">
            <span>📜 Semua Dokumen</span>
            <span class="tab-badge">${countAll} Naskah</span>
          </button>
          <button class="doc-filter-btn ${this.currentFilter === 'Fase E' ? 'active' : ''}" data-filter="Fase E">
            <span class="grade-letter-icon">X</span>
            <span>Fase E (Kelas X: Bab 1–4)</span>
            <span class="tab-badge">${countE} Dokumen</span>
          </button>
          <button class="doc-filter-btn ${this.currentFilter === 'Fase F' ? 'active' : ''}" data-filter="Fase F">
            <span class="grade-letter-icon">XI</span>
            <span>Fase F (Kelas XI: Bab 1–6)</span>
            <span class="tab-badge">${countF} Dokumen</span>
          </button>
        </div>

        <button class="btn btn-secondary" id="btn-doc-guide" style="border-radius: var(--radius-full); padding: 0.5rem 1.15rem; font-size: 0.88rem; display: flex; align-items: center; gap: 0.45rem;">
          <span>💡</span>
          <span>Panduan Analisis Sumber & Format Siswa</span>
        </button>
      </div>
    `;

    this.tabsContainer.querySelectorAll('.doc-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });

    const guideBtn = this.tabsContainer.querySelector('#btn-doc-guide');
    if (guideBtn) {
      guideBtn.addEventListener('click', () => {
        soundManager.playClick();
        this.openGuideModal();
      });
    }
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.tabsContainer.querySelectorAll('.doc-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    this.renderDocuments();
  }

  renderDocuments() {
    if (!this.container) return;

    const filtered = this.currentFilter === 'all'
      ? PHASE_DOCUMENTS_DATA
      : PHASE_DOCUMENTS_DATA.filter(d => d.phase === this.currentFilter);

    this.container.innerHTML = filtered.map(doc => `
      <div class="phase-doc-card card-glass" data-id="${doc.id}">
        <div class="phase-doc-header">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; flex-wrap: wrap;">
            <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
              <span class="curriculum-badge">${doc.phase}</span>
              <span class="chapter-badge">${doc.chapter}</span>
            </div>
            <span class="doc-type-badge">${doc.type}</span>
          </div>

          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gold-400); font-weight: 600;">
            ${doc.chapterTitle}
          </div>

          <h3 class="phase-doc-title">
            <span style="font-size: 1.3rem;">${doc.icon}</span> ${doc.title}
          </h3>

          <div class="phase-doc-meta">
            <span>📅 ${doc.date}</span>
            <span>📍 ${doc.location}</span>
            ${doc.youtubeId ? `<span style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.35); font-size: 0.76rem; padding: 0.2rem 0.55rem; border-radius: var(--radius-full); font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem;">▶ Video YouTube</span>` : ''}
          </div>
        </div>

        <div class="phase-doc-body">
          <p class="phase-doc-summary" style="text-indent: 0 !important; text-align: left !important;">${doc.summary}</p>
        </div>

        <div class="phase-doc-footer">
          <button class="btn btn-secondary btn-open-doc" data-id="${doc.id}" style="width: 100%;">
            <span>📜 Baca Lembar Arsip & Video</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners to open modal
    this.container.querySelectorAll('.btn-open-doc').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        const docId = btn.dataset.id;
        const docObj = PHASE_DOCUMENTS_DATA.find(d => d.id === docId);
        if (docObj) {
          this.openDocumentModal(docObj);
        }
      });
    });
  }

  openDocumentModal(doc) {
    let contentHtml = '';

    if (doc.phase === 'Fase F') {
      contentHtml = `
        <div class="doc-modal-reader" style="text-indent: 0 !important; text-align: left !important;">
          <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
            <span class="curriculum-badge">${doc.phase} • ${doc.grade}</span>
            <span class="chapter-badge">${doc.chapter}</span>
            <span class="doc-type-badge">${doc.type}</span>
            ${doc.youtubeId ? `<span style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.35); font-size: 0.78rem; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem;">🎬 Sumber Video YouTube</span>` : ''}
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-gold); padding: 1.15rem 1.4rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; text-indent: 0; text-align: left;">
            <div style="font-size: 0.88rem; color: var(--text-gold); font-weight: 700; margin-bottom: 0.35rem;">Kait Silabus & Bab Pembelajaran SMK:</div>
            <div style="font-size: 1.05rem; color: var(--text-main); font-weight: 600;">${doc.chapter}: ${doc.chapterTitle}</div>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; font-size: 0.88rem; color: var(--text-muted);">
              <span>📅 <strong>Tarikh/Periode:</strong> ${doc.date}</span>
              <span>📍 <strong>Tempat:</strong> ${doc.location}</span>
              ${doc.parties ? `<span>👥 <strong>Tokoh/Pihak:</strong> ${doc.parties}</span>` : ''}
            </div>
          </div>

          <!-- YouTube Video Player Box -->
          <div class="archive-video-container">
            <div class="archive-video-header">
              <div class="archive-video-title">
                <span>🎬</span> Sumber Video Pembelajaran: ${doc.title} (${doc.date})
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                <a href="${doc.youtubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent('Sejarah ' + doc.title + ' ' + doc.date)}`}" target="_blank" rel="noopener noreferrer" class="archive-video-link">
                  <span>▶ Tonton Video di YouTube</span> ↗
                </a>
                <a href="https://www.youtube.com/results?search_query=${encodeURIComponent('Arsip Dokumenter ANRI ' + doc.title)}" target="_blank" rel="noopener noreferrer" class="archive-video-link" style="color: #60a5fa; background: rgba(59, 130, 246, 0.12); border-color: rgba(59, 130, 246, 0.35);">
                  <span>🏛️ Arsip Terkait ANRI</span> ↗
                </a>
              </div>
            </div>
            ${doc.youtubeId ? `
              <div class="archive-video-wrapper">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/${doc.youtubeId}?rel=0" 
                  title="${doc.title}" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            ` : ''}
            <div style="padding: 0.65rem 1rem; background: rgba(0,0,0,0.25); font-size: 0.85rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
              <span>📌 <em>Video disesuaikan dengan rekaman arsip & dokumenter peristiwa ${doc.title}.</em></span>
              <a href="${doc.youtubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent('Sejarah ' + doc.title + ' ' + doc.date)}`}" target="_blank" rel="noopener noreferrer" style="color: var(--gold-400); text-decoration: underline; font-weight: 600; font-size: 0.83rem;">
                Buka Video Terbaru di YouTube ↗
              </a>
            </div>
          </div>

          <h4 style="color: var(--gold-400); font-size: 1.05rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem; text-indent: 0; text-align: left;">
            <span>📖</span> Keterangan Sejarah & Konteks Peristiwa:
          </h4>
          <div class="doc-text-box" style="margin-bottom: 1.25rem; text-align: left !important; text-indent: 0 !important; line-height: 1.75;">
            ${doc.historicalNote || doc.summary}
          </div>

          ${doc.sourceVisual ? `
            <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 1rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; text-indent: 0; text-align: left;">
              <strong style="color: #60a5fa; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem; font-size: 0.95rem;">
                <span>📸</span> Bentuk Sumber yang Dapat Ditampilkan di Kelas:
              </strong>
              <div style="color: var(--text-main); font-size: 0.95rem; line-height: 1.6; text-indent: 0; text-align: left;">
                ${doc.sourceVisual}
              </div>
            </div>
          ` : ''}

          <h4 style="color: var(--text-main); font-size: 1.05rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem; text-indent: 0; text-align: left;">
            <span>⚖️</span> Arti Penting & Signifikansi Sejarah:
          </h4>
          <div style="background: var(--bg-card); border-left: 4px solid var(--emerald-500); padding: 1.15rem 1.35rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; text-indent: 0; text-align: left;">
            <p style="margin: 0; font-size: 0.98rem; line-height: 1.8; color: var(--text-secondary); text-align: left !important; text-indent: 0 !important;">
              ${doc.significance || doc.analysis}
            </p>
          </div>

          ${doc.analysisQuestion ? `
            <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--gold-400); padding: 1.15rem 1.4rem; border-radius: var(--radius-sm); margin-top: 1rem; text-indent: 0; text-align: left;">
              <strong style="color: var(--gold-400); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-size: 0.95rem;">
                <span>❓</span> Pertanyaan Analisis & Pemantik Diskusi (HOTS):
              </strong>
              <div style="color: var(--text-main); font-size: 1rem; font-weight: 500; line-height: 1.65; text-indent: 0; text-align: left;">
            </div>
          ` : ''}
        </div>
      `;
    } else {
      contentHtml = `
        <div class="doc-modal-reader">
          <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
            <span class="curriculum-badge">${doc.phase} • ${doc.grade}</span>
            <span class="chapter-badge">${doc.chapter}</span>
            <span class="doc-type-badge">${doc.type}</span>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-gold); padding: 1.15rem 1.4rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div style="font-size: 0.88rem; color: var(--text-gold); font-weight: 700; margin-bottom: 0.35rem;">Kait Silabus & Bab Pembelajaran SMK:</div>
            <div style="font-size: 1rem; color: var(--text-main); font-weight: 600;">${doc.chapter}: ${doc.chapterTitle}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Tarikh: ${doc.date} | Lokasi Asal: ${doc.location}</div>
          </div>

          <h4 style="color: var(--gold-400); font-size: 1.05rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📝</span> Transkrip Teks Otentik / Cuplikan Naskah:
          </h4>
          <div class="doc-text-box" style="margin-bottom: 1.5rem; text-align: justify; text-justify: inter-word;">
${doc.transcript}
          </div>

          <h4 style="color: var(--text-main); font-size: 1.05rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚖️</span> Signifikansi Sejarah & Analisis Kritis:
          </h4>
          <div style="background: var(--bg-card); border-left: 4px solid var(--emerald-500); padding: 1.25rem 1.4rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
            <p style="margin: 0; font-size: 0.98rem; line-height: 1.8; color: var(--text-secondary); text-align: justify; text-justify: inter-word;">
              ${doc.analysis}
            </p>
          </div>
        </div>
      `;
    }

    window.openDetailModal({
      badge: `${doc.phase} • ${doc.chapter}`,
      title: `${doc.icon} ${doc.title}`,
      subtitle: `${doc.type} (${doc.date})`,
      content: contentHtml
    });
  }

  openGuideModal() {
    const guideHtml = `
      <div class="doc-modal-reader" style="font-size: 0.96rem; line-height: 1.75; color: var(--text-secondary);">
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-gold); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <h3 style="color: var(--text-gold); font-size: 1.25rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📚</span> Panduan Pembelajaran Berbasis Sumber & Berpikir Historis
          </h3>
          <p style="margin: 0; color: var(--text-main);">
            Kompilasi lembar arsip pembelajaran yang merangkum dokumen, keputusan, pidato, perjanjian, foto/peristiwa, dan jejak sejarah penting dalam enam bab Fase F (Kelas XI SMK).
          </p>
        </div>

        <h4 style="color: var(--gold-400); font-size: 1.1rem; margin-bottom: 0.6rem;">
          🎯 Cara Menggunakan Arsip Ini dalam Pembelajaran:
        </h4>
        <ul style="margin-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.8;">
          <li><strong>Sumber Awal:</strong> Gunakan satu atau beberapa lembar arsip sebagai sumber awal sebelum menjelaskan materi.</li>
          <li><strong>Identifikasi Kritis:</strong> Minta peserta didik mengidentifikasi tanggal, pelaku, konteks, tujuan, dan akibat peristiwa.</li>
          <li><strong>Fakta vs Tafsir:</strong> Bedakan fakta yang tampak dalam sumber dengan interpretasi yang dibuat setelah membaca sumber.</li>
          <li><strong>Multiperspektif:</strong> Bandingkan dua sumber yang berbeda untuk melihat perspektif dan kepentingan yang berbeda.</li>
          <li><strong>Diskusi HOTS:</strong> Jadikan pertanyaan analisis di setiap lembar arsip sebagai pemantik diskusi atau tugas analisis kritis.</li>
        </ul>

        <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--gold-400); padding: 1.15rem 1.4rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
          <h5 style="color: var(--gold-400); font-size: 1rem; margin-bottom: 0.35rem;">⚠️ Catatan Penting tentang Sumber & Historiografi:</h5>
          <p style="margin: 0; font-size: 0.94rem; color: var(--text-main); line-height: 1.65;">
            Istilah “arsip” di sini mencakup dokumen resmi, naskah pidato, keputusan politik, perjanjian, surat kabar, foto, poster, rekaman kelembagaan, serta jejak peristiwa sejarah. Untuk materi yang memiliki perdebatan historiografis (terutama peristiwa 1965 dan isu Reformasi), peserta didik dilatih membedakan fakta, sumber, dan tafsir sejarah.
          </p>
        </div>

        <h4 style="color: var(--text-main); font-size: 1.1rem; margin-bottom: 0.6rem;">
          📝 Format 9 Langkah Analisis Arsip untuk Peserta Didik:
        </h4>
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; margin-bottom: 1.5rem;">
          <ol style="margin-left: 1.25rem; line-height: 1.85; color: var(--text-main);">
            <li><strong>Identifikasi arsip:</strong> Nama dokumen / naskah / foto / peristiwa yang dianalisis.</li>
            <li><strong>Siapa pembuat/pelakunya?:</strong> Pihak, lembaga, atau tokoh yang menerbitkan sumber.</li>
            <li><strong>Kapan dan di mana dibuat?:</strong> Tarikh periode dan lokasi peristiwa bersejarah.</li>
            <li><strong>Apa isi atau pesan utamanya?:</strong> Diktum, pernyataan, atau tujuan utama arsip.</li>
            <li><strong>Kepentingan apa yang mungkin ada di balik sumber?:</strong> Konteks politik, militer, atau ideologis saat dibuat.</li>
            <li><strong>Apa fakta yang dapat diambil?:</strong> Bukti empiris yang tak terbantahkan dari sumber.</li>
            <li><strong>Apa yang masih perlu diverifikasi?:</strong> Bagian yang memerlukan konfirmasi sumber tandingan.</li>
            <li><strong>Apa arti pentingnya bagi jalannya sejarah?:</strong> Dampak terhadap perubahan sosial-politik bangsa.</li>
            <li><strong>Apa hubungan arsip ini dengan kehidupan Indonesia sekarang?:</strong> Relevansi dan kontekstualisasi masa kini.</li>
          </ol>
        </div>

        <h4 style="color: var(--text-gold); font-size: 1.05rem; margin-bottom: 0.6rem;">
          🏛️ Daftar Sumber Kelembagaan Utama:
        </h4>
        <ul style="margin-left: 1.25rem; margin-bottom: 1rem; line-height: 1.75;">
          <li><strong>Arsip Nasional Republik Indonesia (ANRI):</strong> Pameran arsip virtual dan inventaris arsip perjuangan kemerdekaan.</li>
          <li><strong>Kementerian Pendidikan/Kebudayaan & Museum Kepresidenan “Balai Kirti”:</strong> Materi sejarah kepresidenan dan perkembangan politik nasional.</li>
          <li><strong>Mahkamah Konstitusi Republik Indonesia:</strong> Naskah Komprehensif Perubahan UUD 1945 (1999–2002).</li>
          <li><strong>Komisi Pemilihan Umum (KPU):</strong> Arsip dan dokumentasi resmi penyelenggaraan pemilu multipartai.</li>
          <li><strong>Sekretariat Negara RI:</strong> Arsip kepresidenan untuk dokumen pemerintahan dan peralihan kekuasaan.</li>
        </ul>
      </div>
    `;

    window.openDetailModal({
      badge: `Fase F • Instrumen Guru & Siswa`,
      title: `💡 Panduan Analisis Sumber Sejarah & Format Siswa`,
      subtitle: `Metodologi Pembelajaran Berpikir Historis Berbasis Sumber Primer/Sekunder`,
      content: guideHtml
    });
  }
}
