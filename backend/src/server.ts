
import express from 'express';
import posts from './routes/posts.js';
import cors from 'cors';

//const express = require("express");
const app = express();
app.use(cors());

app.listen(3001, () => console.log("Server listening at port 3001"));

// Include route files
//const authRoute = require('./routes/posts');
// Use routes
app.use('/posts', posts);

// app.get("/about", (req, res) => {
//     res.send("Hello World");
// });