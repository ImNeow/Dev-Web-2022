const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    link: String
})

module.exports = mongoose.model('Image', schema);
