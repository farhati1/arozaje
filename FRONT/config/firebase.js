import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { setDoc, doc } from "firebase/firestore";




// Initialisation de Firebase avec la configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHgZltcXGrjju4o6XZsSHrs_baeE0gTQ",
  authDomain: "arosaje-ea479.firebaseapp.com",
  projectId: "arosaje-ea479",
  storageBucket: "arosaje-ea479.appspot.com",
  messagingSenderId: "19285543633",
  appId: "1:19285543633:web:06e016828169113b04d3f0",
  measurementId: "G-D84B00VYD3",
};
const app = initializeApp(firebaseConfig);

// Utilisez Firebase Firestore pour votre messagerie instantanée
export const database = getFirestore(app); // Importez la fonction getFirestore pour utiliser la base de données


