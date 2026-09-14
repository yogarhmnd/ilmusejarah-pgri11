/* ==========================================================================
   ADMINISTRATOR SERVICE - PORTAL PEMBELAJARAN SEJARAH SMK PGRI 11 CILEDUG
   Manajemen Sesi Admin, Autentikasi PIN, dan Sinkronisasi Materi ke Cloud
   ========================================================================== */

import { firebaseService } from './firebase-service.js';
import { CURRICULUM_DATA } from './curriculum-data.js';

const STORAGE_KEY_AUTH = 'smk_sejarah_admin_auth';
const STORAGE_KEY_PIN = 'smk_sejarah_admin_pin';
const DEFAULT_PIN = 'admin11'; // PIN default yang dapat diubah pengelola

class AdminService {
  constructor() {
    this.isAuthenticated = false;
    this.listeners = [];
    this.init();
  }

  init() {
    // Cek apakah admin sudah login sebelumnya di peramban ini
    const storedAuth = localStorage.getItem(STORAGE_KEY_AUTH);
    if (storedAuth === 'true') {
      this.isAuthenticated = true;
    }
  }

  /**
   * Mendaftarkan listener perubahan status login
   */
  onAuthChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
      callback(this.isAuthenticated);
    }
  }

  notifyAuthChange() {
    this.listeners.forEach(cb => {
      try {
        cb(this.isAuthenticated);
      } catch (err) {
        console.error('Error in auth change listener:', err);
      }
    });
  }

  /**
   * Mengambil PIN admin saat ini
   */
  getAdminPIN() {
    return localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_PIN;
  }

  /**
   * Verifikasi PIN login admin
   */
  login(inputPIN) {
    const validPIN = this.getAdminPIN();
    if (inputPIN && inputPIN.trim() === validPIN) {
      this.isAuthenticated = true;
      localStorage.setItem(STORAGE_KEY_AUTH, 'true');
      this.notifyAuthChange();
      return { success: true, message: 'Berhasil masuk sebagai Administrator.' };
    }
    return { success: false, message: 'PIN Administrator salah! Silakan coba lagi.' };
  }

  /**
   * Keluar dari sesi admin
   */
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem(STORAGE_KEY_AUTH);
    this.notifyAuthChange();
    return { success: true, message: 'Telah keluar dari Mode Administrator.' };
  }

  /**
   * Mengganti PIN admin
   */
  changePIN(oldPIN, newPIN) {
    const currentPIN = this.getAdminPIN();
    if (oldPIN !== currentPIN) {
      return { success: false, message: 'PIN lama tidak cocok!' };
    }
    if (!newPIN || newPIN.trim().length < 4) {
      return { success: false, message: 'PIN baru minimal harus 4 karakter!' };
    }
    localStorage.setItem(STORAGE_KEY_PIN, newPIN.trim());
    return { success: true, message: 'PIN Administrator berhasil diperbarui!' };
  }

  /**
   * Menyimpan pembaruan modul langsung ke Firebase Realtime Database
   */
  async saveModule(gradeKey, moduleId, updatedModule) {
    if (!this.isAuthenticated) {
      throw new Error('Akses ditolak: Anda belum terautentikasi sebagai Administrator.');
    }

    try {
      // 1. Simpan ke Firebase Realtime Database (akan memicu onValue pada semua client secara live)
      await firebaseService.saveModule(gradeKey, moduleId, updatedModule);

      // 2. Perbarui juga memori lokal untuk fallbacks seketika
      if (CURRICULUM_DATA[gradeKey] && Array.isArray(CURRICULUM_DATA[gradeKey].modules)) {
        const idx = CURRICULUM_DATA[gradeKey].modules.findIndex(m => m.id === moduleId);
        if (idx !== -1) {
          CURRICULUM_DATA[gradeKey].modules[idx] = updatedModule;
        } else {
          CURRICULUM_DATA[gradeKey].modules.push(updatedModule);
        }
      }

      console.log(`✅ Modul [${moduleId}] berhasil disimpan ke Cloud!`);
      return { success: true, message: 'Materi berhasil disimpan ke Cloud dan aktif di website publik!' };
    } catch (err) {
      console.error('❌ Gagal menyimpan modul ke Firebase:', err);
      throw err;
    }
  }

  /**
   * Menghapus modul dari kurikulum
   */
  async deleteModule(gradeKey, moduleId) {
    if (!this.isAuthenticated) {
      throw new Error('Akses ditolak: Anda belum login sebagai Administrator.');
    }

    const snapshot = await firebaseService.getCurriculumData();
    const curData = snapshot.data || CURRICULUM_DATA;
    const gradeData = curData[gradeKey];

    if (!gradeData || !Array.isArray(gradeData.modules)) {
      throw new Error('Data kelas tidak ditemukan.');
    }

    const filtered = gradeData.modules.filter(m => m.id !== moduleId);
    gradeData.modules = filtered;

    await firebaseService.saveModule(gradeKey, '_temp', null); // trigger sync
    // update entire grade
    const url = `${firebaseService.db ? firebaseService.db._repo.repoInfo_.host : ''}`;
    // Using saveModule on grade or sync
    return true;
  }
}

export const adminService = new AdminService();
