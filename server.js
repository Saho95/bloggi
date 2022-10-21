const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
const { read } = require('fs');

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

app.get("/:blog", (req, res) =>{
    res.sendFile(path.join(initial_path, "blog.html"));
})

// upload link
app.post('/upload', (reg, res) => {
    let file = reg.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // create path
    let path = 'public/uploads/' + imagename;

    file.mv(path, (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.json(`uploads/${imagename}`)
        }
    })
})


app.use((req, res) => {
    res.json("404");
})

app.listen("3000", () => {
    console.log('listening.....');
})