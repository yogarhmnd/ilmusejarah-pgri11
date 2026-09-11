/* ==========================================================================
   FIREBASE CONFIGURATION - SMK PGRI 11 CILEDUG
   Portal Pembelajaran Sejarah Indonesia Terpadu
   ========================================================================== */

/**
 * Konfigurasi Firebase Web App Anda.
 * 
 * Cara mendapatkan konfigurasi ini:
 * 1. Buka https://console.firebase.google.com
 * 2. Masuk ke Project Firebase Anda (atau buat project baru)
 * 3. Buka Project Settings (ikon gerigi di kiri atas) > tab General
 * 4. Gulir ke bawah ke bagian "Your apps" lalu pilih web app (ikon </>)
 * 5. Salin objek firebaseConfig dan tempelkan nilai kuncinya di bawah ini:
 */
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

/**
 * Mengecek apakah pengguna sudah mengisi konfigurasi Firebase yang valid
 */
export function isFirebaseConfigured() {
  return (
    Boolean(firebaseConfig.apiKey) &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    Boolean(firebaseConfig.projectId) &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  );
}
