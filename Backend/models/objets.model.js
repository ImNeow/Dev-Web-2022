const mongoose = require('mongoose')


const objetSchema = new mongoose.Schema({
    /*Ce Schéma est utilisé lors de l'envoi ou la récupération d'objets dans la DB Mongo */
    type: { type : String},
    name: { type : String},
    link: { type : String},
    description: { type : String},
    price: {type : Number},
    publisher: { type : String}
})

module.exports = mongoose.model('Objet', objetSchema);
