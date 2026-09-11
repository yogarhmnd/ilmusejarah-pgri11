/* ==========================================================================
   FIREBASE REALTIME DATABASE SERVICE - KURIKULUM SEJARAH SMK FASE E & FASE F
   ========================================================================== */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { 
  getDatabase, 
  ref, 
  get, 
  set, 
  child 
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js';

import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';
import { CURRICULUM_DATA } from './curriculum-data.js';

class FirebaseService {
  constructor() {
    this.app = null;
    this.db = null;
    this.isConnected = false;
    this.init();
  }

  init() {
    if (!isFirebaseConfigured()) {
      console.info('ℹ️ Firebase belum dikonfigurasi. Menggunakan data lokal (curriculum-data.js). Silakan isi kunci di js/firebase-config.js.');
      return;
    }

    try {
      this.app = initializeApp(firebaseConfig);
      this.db = firebaseConfig.databaseURL 
        ? getDatabase(this.app, firebaseConfig.databaseURL)
        : getDatabase(this.app);
      this.isConnected = true;
      console.log('🔥 Firebase Realtime Database initialized successfully for SMK PGRI 11 CILEDUG.');
    } catch (err) {
      console.error('❌ Gagal menginisialisasi Firebase Realtime Database:', err);
      this.isConnected = false;
    }
  }

  /**
   * Mengambil materi kurikulum dari Realtime Database (Fase E & Fase F)
   * Jika gagal atau belum ada data, otomatis fallback ke data lokal
   */
  async getCurriculumData() {
    if (!this.isConnected || !this.db) {
      return { source: 'local', data: CURRICULUM_DATA };
    }

    try {
      const dbRef = ref(this.db);
      const snapshot = await get(child(dbRef, 'curriculum_data'));

      if (snapshot.exists()) {
        const val = snapshot.val();
        const mergedData = { ...CURRICULUM_DATA };
        let hasCloudData = false;

        if (val['kelas-x']) {
          mergedData['kelas-x'] = val['kelas-x'];
          hasCloudData = true;
        }
        if (val['kelas-xi']) {
          mergedData['kelas-xi'] = val['kelas-xi'];
          hasCloudData = true;
        }

        if (hasCloudData) {
          console.log('✅ Berhasil memuat materi Kurikulum SMK dari Firebase Realtime Database!');
          return { source: 'firebase', data: mergedData };
        }
      }

      console.warn('⚠️ Data di Realtime Database masih kosong. Menggunakan data lokal.');
      return { source: 'local_empty_cloud', data: CURRICULUM_DATA };
    } catch (error) {
      console.warn('⚠️ Gagal mengambil materi dari Realtime Database (fallback ke lokal):', error);
      return { source: 'local_fallback', data: CURRICULUM_DATA };
    }
  }

  /**
   * Menyimpan / Sinkronisasi seluruh materi lokal ke Firebase Realtime Database
   */
  async syncLocalToFirestore(progressCallback) {
    if (!this.isConnected || !this.db) {
      throw new Error('Firebase belum terhubung. Harap lengkapi firebase-config.js terlebih dahulu.');
    }

    try {
      if (progressCallback) progressCallback('Mengunggah materi Kelas X (Fase E)...');
      await set(ref(this.db, 'curriculum_data/kelas-x'), CURRICULUM_DATA['kelas-x']);

      if (progressCallback) progressCallback('Mengunggah materi Kelas XI (Fase F)...');
      await set(ref(this.db, 'curriculum_data/kelas-xi'), CURRICULUM_DATA['kelas-xi']);

      if (progressCallback) progressCallback('Sinkronisasi selesai!');
      return true;
    } catch (err) {
      console.error('❌ Gagal sinkronisasi materi ke Realtime Database:', err);
      throw err;
    }
  }

  /**
   * Menyimpan perubahan satu modul tertentu ke Realtime Database
   */
  async saveModule(gradeKey, moduleId, updatedModule) {
    if (!this.isConnected || !this.db) {
      throw new Error('Firebase belum terhubung.');
    }

    const snapshot = await get(ref(this.db, `curriculum_data/${gradeKey}`));
    let gradeData = snapshot.exists() ? snapshot.val() : CURRICULUM_DATA[gradeKey];

    const idx = gradeData.modules.findIndex(m => m.id === moduleId);
    if (idx !== -1) {
      gradeData.modules[idx] = updatedModule;
    } else {
      gradeData.modules.push(updatedModule);
    }

    await set(ref(this.db, `curriculum_data/${gradeKey}`), gradeData);
    return true;
  }
}

export const firebaseService = new FirebaseService();
