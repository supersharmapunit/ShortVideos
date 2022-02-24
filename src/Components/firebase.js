import * as firebase from 'firebase/app';
import { serverTimestamp, collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjzirb3Kv2S4gZzl1pgACf5mJX8slTuU4",
    authDomain: "reel-project.firebaseapp.com",
    projectId: "reel-project",
    storageBucket: "reel-project.appspot.com",
    messagingSenderId: "408865199520",
    appId: "1:408865199520:web:cccf36ac521b3347a640c5"
})

export const auth = getAuth();
export const storage = getStorage(firebaseApp);
const firestore = getFirestore();
export const database = {
    user: collection(firestore, 'user'),
    posts: collection(firestore, 'posts'),
    comments: collection(firestore, 'comments'),
    getCurrentTimeStamp: serverTimestamp()
}