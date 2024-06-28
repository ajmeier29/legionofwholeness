// Firestore imports
import { collection, getDocs, query as fireQuery, where } from "firebase/firestore"; // Import the 'where' function
import { db, bucket } from '../firebase.js';
import express, { response } from "express";
import 'dotenv/config';
import admin from 'firebase-admin';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';



// src/routes/auth.js
const posts = express.Router();

// Define a route
posts.get('/', async (req, res) => {
    try {
        const q = fireQuery(collection(db, "blog"), where("status", "==", "published")); // Use the 'where' function here
        const querySnapshot = await getDocs(q); // Await the result of getDocs
        const respData = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var data = doc.data();
            respData.push(data);


            console.log(`respData ${JSON.stringify(respData)}`);

            // Specify the path to your file
            //console.log(`header_image before: ${respData.header_image}`);
            const filePath = data.header_image; // Replace with your actual file path
            //console.log(`header_image: ${filePath}`);

            // Get the download URL
            getDownloadURL(bucket.file(filePath)).then((downloadUrl) => {
                console.log('Download URL:', downloadUrl);
                // Use the downloadUrl as needed (e.g., display it in your app)
            })

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
