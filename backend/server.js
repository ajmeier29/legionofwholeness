

const express = require("express");
const app = express();

app.listen(3001, () => console.log("Server listening at port 3001"));

// Include route files
const authRoute = require('./routes/auth');
// Use routes
app.use('/auth', authRoute);

// app.get("/about", (req, res) => {
//     res.send("Hello World");
// });