/* ==========================================================================
   FIREBASE FIRESTORE SERVICE - KURIKULUM SEJARAH SMK FASE E & FASE F
   ========================================================================== */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

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
      this.db = getFirestore(this.app);
      this.isConnected = true;
      console.log('🔥 Firebase initialized successfully for SMK PGRI 11 CILEDUG.');
    } catch (err) {
      console.error('❌ Gagal menginisialisasi Firebase:', err);
      this.isConnected = false;
    }
  }

  /**
   * Mengambil materi kurikulum dari Firestore (Fase E & Fase F)
   * Jika gagal atau belum ada data, otomatis fallback ke data lokal
   */
  async getCurriculumData() {
    if (!this.isConnected || !this.db) {
      return { source: 'local', data: CURRICULUM_DATA };
    }

    try {
      // Ambil dokumen kelas-x (Fase E) dan kelas-xi (Fase F)
      const docRefX = doc(this.db, 'curriculum_data', 'kelas-x');
      const docRefXI = doc(this.db, 'curriculum_data', 'kelas-xi');

      const [snapX, snapXI] = await Promise.all([
        getDoc(docRefX),
        getDoc(docRefXI)
      ]);

      const mergedData = { ...CURRICULUM_DATA };
      let hasFirestoreData = false;

      if (snapX.exists()) {
        mergedData['kelas-x'] = snapX.data();
        hasFirestoreData = true;
      }
      if (snapXI.exists()) {
        mergedData['kelas-xi'] = snapXI.data();
        hasFirestoreData = true;
      }

      if (hasFirestoreData) {
        console.log('✅ Berhasil memuat materi Kurikulum SMK dari Firebase Cloud Firestore!');
        return { source: 'firebase', data: mergedData };
      } else {
        console.warn('⚠️ Data di Firestore masih kosong. Menggunakan data lokal.');
        return { source: 'local_empty_cloud', data: CURRICULUM_DATA };
      }
    } catch (error) {
      console.warn('⚠️ Gagal mengambil materi dari Firestore (fallback ke lokal):', error);
      return { source: 'local_fallback', data: CURRICULUM_DATA };
    }
  }

  /**
   * Menyimpan / Sinkronisasi seluruh materi lokal ke Firebase Firestore
   */
  async syncLocalToFirestore(progressCallback) {
    if (!this.isConnected || !this.db) {
      throw new Error('Firebase belum terhubung. Harap lengkapi firebase-config.js terlebih dahulu.');
    }

    try {
      if (progressCallback) progressCallback('Mengunggah materi Kelas X (Fase E)...');
      const docRefX = doc(this.db, 'curriculum_data', 'kelas-x');
      await setDoc(docRefX, CURRICULUM_DATA['kelas-x']);

      if (progressCallback) progressCallback('Mengunggah materi Kelas XI (Fase F)...');
      const docRefXI = doc(this.db, 'curriculum_data', 'kelas-xi');
      await setDoc(docRefXI, CURRICULUM_DATA['kelas-xi']);

      if (progressCallback) progressCallback('Sinkronisasi selesai!');
      return true;
    } catch (err) {
      console.error('❌ Gagal sinkronisasi materi ke Firestore:', err);
      throw err;
    }
  }

  /**
   * Menyimpan perubahan satu modul tertentu ke Firestore
   */
  async saveModule(gradeKey, moduleId, updatedModule) {
    if (!this.isConnected || !this.db) {
      throw new Error('Firebase belum terhubung.');
    }

    const docRef = doc(this.db, 'curriculum_data', gradeKey);
    const snap = await getDoc(docRef);
    let gradeData = snap.exists() ? snap.data() : CURRICULUM_DATA[gradeKey];

    const idx = gradeData.modules.findIndex(m => m.id === moduleId);
    if (idx !== -1) {
      gradeData.modules[idx] = updatedModule;
    } else {
      gradeData.modules.push(updatedModule);
    }

    await setDoc(docRef, gradeData);
    return true;
  }
}

export const firebaseService = new FirebaseService();
