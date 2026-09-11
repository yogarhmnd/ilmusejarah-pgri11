/* ==========================================================================
   FIREBASE CONFIGURATION - SMK PGRI 11 CILEDUG
   Portal Pembelajaran Sejarah Indonesia Terpadu
   ========================================================================== */

/**
 * Konfigurasi Firebase Web App Anda (Mendukung Realtime Database).
 * 
 * Cara mendapatkan konfigurasi ini:
 * 1. Buka https://console.firebase.google.com
 * 2. Masuk ke Project Firebase Anda
 * 3. Buka Project Settings (ikon gerigi) > tab General > bagian "Your apps" (ikon </>)
 * 4. Salin objek firebaseConfig dan tempelkan nilainya di bawah ini.
 *    (Jika menggunakan Realtime Database regional seperti asia-southeast1,
 *    pastikan databaseURL sudah terisi sesuai Firebase Console).
 */
export const firebaseConfig = {
  apiKey: "AIzaSyB-z48tatTOw_89V_so2FcA7ni9I1_UxeE",
  authDomain: "ilmusejarah-pgri11.firebaseapp.com",
  databaseURL: "https://ilmusejarah-pgri11-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ilmusejarah-pgri11",
  storageBucket: "ilmusejarah-pgri11.appspot.com",
  messagingSenderId: "605323241634",
  appId: "1:605323241634:web:3a851cf9ad1aa042efcffb"
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
