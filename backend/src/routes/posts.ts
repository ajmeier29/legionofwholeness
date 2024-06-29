// Firestore imports
import { collection, getDocs, query as fireQuery, where, DocumentData } from "firebase/firestore"; // Import the 'where' function
import { db, bucket } from '../firebase.js';
import express, { response } from "express";
import 'dotenv/config';
import admin from 'firebase-admin';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';



// src/routes/auth.js
const posts = express.Router();

type Content =
    {
        value: string;
        type: string;
    }
type CreatedOn =
    {
        seconds: number;
        nanoseconds: number
    }
type BlogPostData =
    {
        publish_date?: string,
        tags?: string[],
        name?: string,
        description?: string,
        content?: Content[],
        status?: 'draft' | 'published',
        created_on?: CreatedOn,
        header_image?: string,
        header_image_full?: string,
        reviewed?: boolean,
        filePath?: string
    }

// Define a route
posts.get('/', async (req, res) => {
    try {
        const q = fireQuery(collection(db, "blog"), where("status", "==", "published")); // Use the 'where' function here
        const querySnapshot = await getDocs(q); // Await the result of getDocs
        const respData: any[] = [];

        // Use Promise.all to wait for all async operations to complete
        await Promise.all(querySnapshot.docs.map(async (doc) => {
            const data: BlogPostData = doc.data();
            // Get the download URL
            const downloadUrl = await getDownloadURL(bucket.file(data?.header_image ?? ''));
            data.header_image_full = downloadUrl;
            // Add to response data
            respData.push(data);
        }));

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
