// Firestore imports
import { collection, getDocs, query as fireQuery, where } from "firebase/firestore"; // Import the 'where' function
import { db } from '../firebase.js';
import express from "express";
import 'dotenv/config';
import admin from 'firebase-admin';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';



// src/routes/auth.js
const posts = express.Router();

// Define a route
posts.get('/', async (req, res) => {
    try {
        const q = fireQuery(collection(db, "blog"), where("status", "==", "published")); // Use the 'where' function here
        var respData = {}
        const querySnapshot = await getDocs(q); // Await the result of getDocs
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            respData = doc.data();
            console.log(doc.id, " => ", doc.data());
        });

        res.send({
            'data': respData
        }); // This gets executed when the user visits http://localhost:3000/user
    } catch (err) {
        console.error('Error getting document', err);
        res.status(500).send('Internal server error');
    }
});

// Export the router module so that server.js file can use it
export default posts;
