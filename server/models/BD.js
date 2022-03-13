const mongoose = require('mongoose')

const BDschema = new mongoose.Schema({
    name: String,
    link: String
})

module.exports = mongoose.model('BD', BDschema);
