"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucket = exports.db = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
require("dotenv/config");
const servcieAccount_js_1 = __importDefault(require("./servcieAccount.js"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// ----- Firebase Storage
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(servcieAccount_js_1.default)
});
// Get a reference to your storage bucket
const bucket = firebase_admin_1.default.storage().bucket(process.env.STORAGE_BUCKET);
exports.bucket = bucket;
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
const app = (0, app_1.initializeApp)(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
