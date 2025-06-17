import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCBBVSSjuA1JS3Yg46SRaTeehkriEKtFBc',
  authDomain: 'am-lang.firebaseapp.com',
  projectId: 'am-lang',
  storageBucket: 'am-lang.firebasestorage.app',
  messagingSenderId: '528603533401',
  appId: '1:528603533401:web:f0ada5a00fed6294a26148',
  measurementId: 'G-6HZJ1XQ81L',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

