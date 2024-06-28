"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Firestore imports
const firestore_1 = require("firebase/firestore"); // Import the 'where' function
const firebase_js_1 = require("../firebase.js");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const storage_1 = require("firebase-admin/storage");
// src/routes/auth.js
const posts = express_1.default.Router();
// Define a route
posts.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = (0, firestore_1.query)((0, firestore_1.collection)(firebase_js_1.db, "blog"), (0, firestore_1.where)("status", "==", "published")); // Use the 'where' function here
        const querySnapshot = yield (0, firestore_1.getDocs)(q); // Await the result of getDocs
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
            (0, storage_1.getDownloadURL)(firebase_js_1.bucket.file(filePath)).then((downloadUrl) => {
                console.log('Download URL:', downloadUrl);
                // Use the downloadUrl as needed (e.g., display it in your app)
            });
            console.log(doc.id, " => ", doc.data());
        });
        res.send({
            'data': respData
        }); // This gets executed when the user visits http://localhost:3000/user
    }
    catch (err) {
        console.error('Error getting document', err);
        res.status(500).send('Internal server error');
    }
}));
// Export the router module so that server.js file can use it
exports.default = posts;
