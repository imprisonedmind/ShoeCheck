import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

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

initializeApp(firebaseConfig);

export var db = []

export const getdb = async () => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `shoeData`)).then((snapshot) => {
        if (snapshot.exists()) {
            db = snapshot.val();
            console.log("Get firebase db I am running from fire.js")
            return db;
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
