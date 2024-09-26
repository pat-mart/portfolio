// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from '@firebase/auth'
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASURE_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore()

export const fbAuth = getAuth(app)