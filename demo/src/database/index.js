import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const config =
// 	process.env.NODE_ENV === 'development'
// 		? JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG)
// 		: JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC)

initializeApp({
  apiKey: "AIzaSyBxDzCcRZpZsWPETixpddb-cK4edBadL7w",
  authDomain: "miner778779.firebaseapp.com",
  projectId: "miner778779",
  storageBucket: "miner778779.appspot.com",
  messagingSenderId: "197363334076",
  appId: "1:197363334076:web:6dded7a5994c761c3f09b9"
})

export const firestoreDb = getFirestore()
export const realtimeDb = getDatabase()
export const storage = getStorage()
