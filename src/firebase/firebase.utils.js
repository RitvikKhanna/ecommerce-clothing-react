import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD3lpTauj_OQl_GWn3ZPnfhIfDumuDcB8M",
  authDomain: "clothing-db-80894.firebaseapp.com",
  databaseURL: "https://clothing-db-80894.firebaseio.com",
  projectId: "clothing-db-80894",
  storageBucket: "clothing-db-80894.appspot.com",
  messagingSenderId: "765126757286",
  appId: "1:765126757286:web:13a074ba9b98ba93131d67",
  measurementId: "G-8V7EXY6P49"
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase