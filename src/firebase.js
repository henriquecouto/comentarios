import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyC4ppBkXIPHascVSb40Ht_rFbA9dDKRhuc",
    authDomain: "comments-henrique.firebaseapp.com",
    databaseURL: "https://comments-henrique.firebaseio.com",
    projectId: "comments-henrique",
    storageBucket: "comments-henrique.appspot.com",
    messagingSenderId: "316290695204"
}
firebase.initializeApp(config)

export const database = firebase.database()