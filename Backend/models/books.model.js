const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { type : String} ,
    link: { type : String}
})

module.exports = mongoose.model('Book', bookSchema);
