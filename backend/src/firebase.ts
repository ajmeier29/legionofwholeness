// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'dotenv/config'
import myServiceAccount from './servcieAccount.js';
import admin from 'firebase-admin';

// ----- Firebase Storage
admin.initializeApp({
    credential: admin.credential.cert(myServiceAccount)
});

// Get a reference to your storage bucket
const bucket = admin.storage().bucket(process.env.STORAGE_BUCKET);

// ----- Firebase StorageEnd 

// ----- Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export {
    db,
    bucket
}