// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8ToXLYKmMAf24VGtcidU4gRnoKw-m3FQ',
  authDomain: 'fer202-9d457.firebaseapp.com',
  projectId: 'fer202-9d457',
  storageBucket: 'fer202-9d457.appspot.com',
  messagingSenderId: '502363473824',
  appId: '1:502363473824:web:0d332d5e0b29aab32a46c5',
  measurementId: 'G-6799EKKLFB'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
