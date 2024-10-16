const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from node API Server Updated");
})

mongoose.connect("mongodb://localhost:27017")
.then(() => {
    console.log("Connected to database!");
})
.catch((error) => {
    console.log("Connection failed!", error.message);
});