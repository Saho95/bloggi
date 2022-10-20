const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path,"home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path,"editor.html"));
})

// upload link
app.post('/upload', (reg, res) => {
    let file = reg.file.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // create path
    let path = 'public/uploads/'
})

app.listen("3000", () => {
    console.log('listening.....');
})