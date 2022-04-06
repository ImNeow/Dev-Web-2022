const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    /*Ce Schéma est utilisé lors de l'envoi ou la récupération de livre dans la DB Mongo */
    lastname: { type : String},
    firstname: { type : String},
    email: { type : String},
    password: { type : String},
    discount: { type : Number},
    permission: { type : String},
    newsletter: { type : Boolean}
})

module.exports = mongoose.model('User', userSchema);
