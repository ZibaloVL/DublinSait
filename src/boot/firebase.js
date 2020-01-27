import firebase from 'firebase'
import firebaseConfig from './configKeys/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
