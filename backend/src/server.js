"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_js_1 = __importDefault(require("./routes/posts.js"));
const cors_1 = __importDefault(require("cors"));
//const express = require("express");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.listen(3001, () => console.log("Server listening at port 3001"));
// Include route files
//const authRoute = require('./routes/posts');
// Use routes
app.use('/posts', posts_js_1.default);
// app.get("/about", (req, res) => {
//     res.send("Hello World");
// });
