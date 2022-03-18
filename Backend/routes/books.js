var express = require('express');
var router = express.Router();
let Book = require('../models/books.model')


router.get('/books', function(req, res, next) {

    /* Récupération des arguments dans la requete*/
    const type = req.query.type
    const id = req.query.id
    const name= req.query.name
    
    /*Requête à la DB*/
    Book.find({type:type},(err, DBres)=>{
        if (err) return handleError(err);
        res.send(DBres);
})
    
});

router.route('/books').post((req, res) =>{

const NewType = req.body.type;
const Newname = req.body.name;
const Newlink = req.body.link;

console.log(req)

const newBook = new Book({
  type : NewType,
  name : Newname,
  link : Newlink
});

console.log(newBook)

newBook.save()
.then(() => res.json('Book ajouté'))
.catch(err => res.status(400).json('Error ' + err)) 
})

module.exports = router;
