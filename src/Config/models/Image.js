const mongoose = require('mongoose')

const Imageschema = new mongoose.Schema({
    link: String,
    name: String
})

module.exports = mongoose.model('Image', Imageschema);
