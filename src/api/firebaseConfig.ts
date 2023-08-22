// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
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
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
