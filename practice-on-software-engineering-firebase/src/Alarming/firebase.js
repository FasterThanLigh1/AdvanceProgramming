import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDwawZYklawfT-H65_0wDAznM9uyiFRnuM",
    authDomain: "note-taking-app-a1e7e.firebaseapp.com",
    databaseURL: "https://note-taking-app-a1e7e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "note-taking-app-a1e7e",
    storageBucket: "note-taking-app-a1e7e.appspot.com",
    messagingSenderId: "909575872615",
    appId: "1:909575872615:web:bd4732ee18a37b379ab4c2",
    measurementId: "G-475RCR931R"
}
firebase.InitializeApp(config)

export default firebase
