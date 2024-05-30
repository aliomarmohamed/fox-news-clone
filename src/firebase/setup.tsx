import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA47luBwB5ku376WT4EBzY3a6_F5IJT1oY",
    authDomain: "fox-news-app.firebaseapp.com",
    projectId: "fox-news-app",
    storageBucket: "fox-news-app.appspot.com",
    messagingSenderId: "841762338321",
    appId: "1:841762338321:web:917a436816e8f4914963b0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)