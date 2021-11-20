import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyBdRJCeVGlpIhgsNxlBWycUPmNL7-SOrog",

    authDomain: "shoecheck-3cae6.firebaseapp.com",

    databaseURL: "https://shoecheck-3cae6-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "shoecheck-3cae6",

    storageBucket: "shoecheck-3cae6.appspot.com",

    messagingSenderId: "766369205594",

    appId: "1:766369205594:web:1a7532d092267aaf207763",

    measurementId: "G-8CV49PCRKX"

};

var fire = firebase.initializeApp(firebaseConfig)

export const db = firebase.database()
export default fire;