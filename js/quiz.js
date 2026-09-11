/* ==========================================================================
   KRONIK NUSANTARA - GAMIFIED QUIZ MODULE
   ========================================================================== */

import { QUIZ_QUESTIONS } from './data.js';
import { soundManager } from './audio.js';

export class HistoryQuiz {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.questions = [...QUIZ_QUESTIONS];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.highestStreak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
    this.init();
  }

  init() {
    this.renderQuestion();
  }

  restart() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.highestStreak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.container) return;

    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const currentQ = this.questions[this.currentIndex];
    const progressPercent = ((this.currentIndex) / this.questions.length) * 100;
    const optionLetters = ['A', 'B', 'C', 'D'];

    this.container.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-header">
          <div>
            <span style="font-family: var(--font-display); font-weight: 700; color: var(--text-gold); font-size: 0.95rem;">
              PERTANYAAN ${this.currentIndex + 1} DARI ${this.questions.length}
            </span>
          </div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <span style="font-size: 0.88rem; background: var(--bg-tertiary); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border-subtle);">
              🔥 Streak: <strong style="color: var(--gold-400);">${this.streak}</strong>
            </span>
            <span style="font-size: 0.88rem; background: var(--bg-tertiary); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border-subtle);">
              ⭐ Skor: <strong style="color: var(--emerald-500);">${this.score}</strong>
            </span>
          </div>
        </div>

        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <h3 class="quiz-question-text">${currentQ.question}</h3>

        <div class="quiz-options-list">
          ${currentQ.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-index="${idx}">
              <span class="quiz-opt-letter">${optionLetters[idx]}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-box" style="display: none;"></div>

        <div id="quiz-action-bar" style="display: none; justify-content: flex-end; margin-top: 1.5rem;">
          <button class="btn btn-primary" id="btn-next-question">
            <span>${this.currentIndex === this.questions.length - 1 ? 'Lihat Hasil Akhir' : 'Lanjut Pertanyaan'}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;

    // Bind option click events
    this.container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAnswered) return;
        const selectedIdx = parseInt(btn.dataset.index, 10);
        this.submitAnswer(selectedIdx);
      });
    });
  }

  submitAnswer(selectedIndex) {
    this.isAnswered = true;
    const currentQ = this.questions[this.currentIndex];
    const isCorrect = selectedIndex === currentQ.answer;

    const optButtons = this.container.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      soundManager.playCorrect();
      this.score += 10;
      this.streak += 1;
      if (this.streak > this.highestStreak) this.highestStreak = this.streak;
    } else {
      soundManager.playWrong();
      this.streak = 0;
    }

    // Show feedback
    const feedbackBox = this.container.querySelector('#quiz-feedback-box');
    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      feedbackBox.className = 'quiz-feedback';
      feedbackBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 1.25rem;">${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}</span>
        </div>
        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${currentQ.explanation}</p>
      `;
    }

    // Show next button
    const actionBar = this.container.querySelector('#quiz-action-bar');
    if (actionBar) {
      actionBar.style.display = 'flex';
      const nextBtn = actionBar.querySelector('#btn-next-question');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          soundManager.playClick();
          this.currentIndex += 1;
          this.isAnswered = false;
          this.renderQuestion();
        });
      }
    }
  }

  renderSummary() {
    const total = this.questions.length;
    const maxScore = total * 10;
    const percentage = Math.round((this.score / maxScore) * 100);

    let badgeTitle = '🌱 Murid Sejarah Pemula';
    let badgeDesc = 'Awal yang baik! Terus jelajahi linimasa dan tokoh bangsa untuk memperkaya wawasan sejarahmu.';
    if (percentage === 100) {
      badgeTitle = '🏆 Mahapatih Sejarah - SMK PGRI 11 CILEDUG';
      badgeDesc = 'Luar biasa sempurna! Kamu memiliki pemahaman komprehensif layaknya Mahapatih Gajah Mada.';
    } else if (percentage >= 75) {
      badgeTitle = '📜 Sejarawan Penjelajah Madya';
      badgeDesc = 'Hebat sekali! Pemahamanmu tentang perjalanan sejarah bangsa Indonesia sangat mendalam dan tajam.';
    } else if (percentage >= 50) {
      badgeTitle = '🧭 Pengelana Sejarah - SMK PGRI 11 CILEDUG';
      badgeDesc = 'Bagus! Kamu sudah memahami tonggak-tonggak penting sejarah perjuangan bangsa.';
    }

    this.container.innerHTML = `
      <div class="quiz-wrapper" style="text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 50%; background: var(--gradient-gold); color: #080b11; font-size: 2.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-gold);">
          🎖️
        </div>

        <h2 style="margin-bottom: 0.5rem;">Hasil Evaluasi Sejarah</h2>
        <p style="margin-bottom: 2rem;">Berikut adalah hasil uji pemahamanmu tentang peradaban Nusantara:</p>

        <div style="background: var(--bg-secondary); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.75rem; margin-bottom: 2rem;">
          <div style="font-size: 3rem; font-family: var(--font-serif); font-weight: 800; color: var(--text-gold); margin-bottom: 0.5rem;">
            ${percentage}%
          </div>
          <div style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.25rem;">
            Total Skor: <strong style="color: var(--text-main);">${this.score} / ${maxScore}</strong> (Benar ${this.score / 10} dari ${total} soal)
          </div>
          
          <div style="padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
            <div style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--gold-400); margin-bottom: 0.4rem;">
              Lencana: ${badgeTitle}
            </div>
            <p style="font-size: 0.95rem; margin: 0; color: var(--text-secondary);">${badgeDesc}</p>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-primary" id="btn-quiz-retry">
            <span>🔄 Ulangi Latihan Soal</span>
          </button>
          <a href="#linimasa" class="btn btn-secondary">
            <span>📚 Baca Ulang Linimasa</span>
          </a>
        </div>
      </div>
    `;

    const retryBtn = this.container.querySelector('#btn-quiz-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        soundManager.playClick();
        this.restart();
      });
    }
  }
}
