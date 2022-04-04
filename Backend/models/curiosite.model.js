const mongoose = require('mongoose')


const curiositeSchema = new mongoose.Schema({
    /*Ce Schéma est utilisé lors de l'envoie ou la récupération de curiosite dans le DB Mongo */
    name: { type : String},
    link: { type : String},
    description: { type : String}
})

module.exports = mongoose.model('Curiosite', curiositeSchema);
