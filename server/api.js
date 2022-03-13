const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Imageschema = require('./models/Image');

const port = process.env.PORT
const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true })
.then(() =>{
    const app = express();
    console.log('Connected to DB')

    const schemaImage = new mongoose.Schema({
        link: String,
        name: String
    })

    const image = mongoose.model('bd_images', schemaImage);

    app.get("/api/getImages", async (req, resp) =>{
        
        image.find({},(err, res)=>{
            if (err) return handleError(err);
            resp.send(res)
        })
        

    })


    app.listen(port, () =>{
        console.log("Server listening on port "+port)
    })
}).catch(() => {
    console.log('Connection failed')
})


