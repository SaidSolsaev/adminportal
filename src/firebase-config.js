import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBfp6qXBYJ6AOGfW4l7GoKms5OSoMSNjaY",
    authDomain: "adminportal-c96f9.firebaseapp.com",
    projectId: "adminportal-c96f9",
    storageBucket: "adminportal-c96f9.appspot.com",
    messagingSenderId: "718681760581",
    appId: "1:718681760581:web:76016b38c53feb0282d42c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
