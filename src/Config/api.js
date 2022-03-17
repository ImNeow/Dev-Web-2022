const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Image = require('./models/Image');

const customImages = {  "Tintin au pays de l'or noir":"https://cdn001.tintin.com/public/tintin/img/static/tintin-au-pays-de-l-or-noir/tintin-au-pays-de-l-or-noir-fr.jpg",
                        "Tintin Objectif Lune":"https://cdn001.tintin.com/public/tintin/img/static/objectif-lune/objectif-lune-fr.jpg",
                        "Tintin On a marche sur la Lune":"https://cdn001.tintin.com/public/tintin/img/static/on-a-marche-sur-la-lune/on-a-marche-sur-la-lune.jpg",
                        "Tintin et l'affaire Tournesol":"https://cdn001.tintin.com/public/tintin/img/static/l-affaire-tournesol/l-affaire-tournesol-fr.jpg",
                        "Tintin et le vol 714 pour Sydney":"https://cdn001.tintin.com/public/tintin/img/static/vol-714-pour-sydney/vol-714-pour-sydney-fr.jpg"}

const port = process.env.PORT
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
.then(() =>{
    const app = express();
    console.log('Connected to DB')

    app.get("/api/getImages", async (req, res) =>{
        res.send(customImages)
    })


    app.listen(port, () =>{
        console.log("Server listening on port "+port)
    })
})
.catch(() => {
    console.log('Connection failed')
})


