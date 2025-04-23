// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Asegúrate de que estas importando 'getAuth'
import { getFirestore } from 'firebase/firestore';  // importar Firestore
const firebaseConfig = {
    apiKey: Bun.env.FIREBASE_API_KEY,
    authDomain: Bun.env.FIREBASE_AUTH_DOMAIN,
    projectId: Bun.env.FIREBASE_PROJECT_ID,
    storageBucket: Bun.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Bun.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: Bun.env.FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Inicialización del servicio de autenticación
const db = getFirestore(app);  // Inicialización de Firestore
export { auth , db};
export default app;  // Exporta la instancia de Firebase para usarla en otros módulos