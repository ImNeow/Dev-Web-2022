const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Image = require('./models/Image');

const port = 3000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
.then(() =>{
    const app = express();
    console.log('Connected to DB')

    app.get('/', (req, res) =>{
        res.send('Endpoint of Jaune2\'s API')
    })

    app.get("/getImages", async (req, res) =>{
        const images = await Image.find();
        res.send('data : '+images)
    })


    app.listen(port, () =>{
        console.log("Server listening on port "+port)
    })
})
.catch(() => {
    console.log('Connection failed')
})


