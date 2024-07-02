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
// Get all blog post data.
posts.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = (0, firestore_1.query)((0, firestore_1.collection)(firebase_js_1.db, "blog"), (0, firestore_1.where)("status", "==", "published")); // Use the 'where' function here
        const querySnapshot = yield (0, firestore_1.getDocs)(q); // Await the result of getDocs
        const respData = [];
        // Use Promise.all to wait for all async operations to complete
        yield Promise.all(querySnapshot.docs.map((doc) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const data = doc.data();
            // Add the ID
            data.ID = doc.id;
            // Get the download URL
            const downloadUrl = yield (0, storage_1.getDownloadURL)(firebase_js_1.bucket.file((_a = data === null || data === void 0 ? void 0 : data.header_image) !== null && _a !== void 0 ? _a : ''));
            data.header_image_full = downloadUrl;
            // Add to response data
            respData.push(data);
        })));
        res.send({
            'data': respData
        }); // This gets executed when the user visits http://localhost:3000/user
    }
    catch (err) {
        console.error('Error getting document', err);
        res.status(500).send('Internal server error');
    }
}));
// get single blog post
posts.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const docRef = (0, firestore_1.doc)(firebase_js_1.db, "blog", req.params.id); // Reference the document by ID
        const docSnapshot = yield (0, firestore_1.getDoc)(docRef); // Get the document snapshot
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            // Add the ID
            data.ID = docSnapshot.id;
            // Get the download URL
            const downloadUrl = yield (0, storage_1.getDownloadURL)(firebase_js_1.bucket.file((_b = data === null || data === void 0 ? void 0 : data.header_image) !== null && _b !== void 0 ? _b : ''));
            data.header_image_full = downloadUrl;
            // Send the data in the response
            res.send({
                'data': data
            });
        }
        else {
            console.log('Document does not exist.');
            res.status(404).send('Document not found');
        }
    }
    catch (err) {
        console.error('Error getting document', err);
        res.status(500).send('Internal server error');
    }
}));
// Export the router module so that server.js file can use it
exports.default = posts;
