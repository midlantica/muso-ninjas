import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBOw78kmjsf2G-ZWVWOxuXZJFwm6ZXN5mQ",
  authDomain: "muso-ninjas-5dfdd.firebaseapp.com",
  projectId: "muso-ninjas-5dfdd",
  storageBucket: "muso-ninjas-5dfdd.appspot.com",
  messagingSenderId: "512985483678",
  appId: "1:512985483678:web:bd0239e6d845a1fb042e8f"
}

//. init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
