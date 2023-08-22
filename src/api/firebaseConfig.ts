import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBW9Tzth1vJGtVCLeKSWY_lK-h5bpgFEJk',
  authDomain: 'marek-app.firebaseapp.com',
  projectId: 'marek-app',
  storageBucket: 'marek-app.appspot.com',
  messagingSenderId: '308094946122',
  appId: '1:308094946122:web:d4917abca09944c85f0fb3',
  measurementId: 'G-KSQH61Z1BK',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const database = getDatabase(app)
export const storage = getStorage(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
