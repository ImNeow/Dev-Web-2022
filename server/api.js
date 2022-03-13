const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const BDschema = require('./models/BD');

const port = process.env.PORT
const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true })
.then(() =>{
    const app = express();
    console.log('Connected to DB')

    const BDschema = new mongoose.Schema({
        name: String,
        link: String
    })

    const BD = mongoose.model('bd_images', BDschema);

    app.get("/api/getImages", async (req, resp) =>{
        console.log(req)
        BD.find({},(err, res)=>{
            if (err) return handleError(err);
            resp.send(res);
        })
    })

    app.listen(port, () =>{
        console.log("Server listening on port "+port)
    })
}).catch(() => {
    console.log('Connection failed')
})


