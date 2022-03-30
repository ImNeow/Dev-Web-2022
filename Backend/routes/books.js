var express = require('express');
var router = express.Router();
let Book = require('../models/books.model')


/* GET /books/ */
router.get('/', function(req, res, next) {

    /* Récupération des arguments dans la requete*/
    const type = req.query.type

    /*Requête à la DB*/
    Book.find({type:type},(err, DBres)=>{
        if (err) return handleError(err);
        res.send(DBres);
    })
});

router.get('/:id' , function(req,res,next) {

  const id = req.params.id

  Book.findById(id , (err,DBres)=>{
    res.send(DBres)
  })

});

/* POST /books/ */
router.route('/').post((req, res) =>{
  
  /* Récupération des arguments dans la requete */
  const newType = req.body.type;
  const newName = req.body.name;
  const newLink = req.body.link;

  /* Construction du nouveau livre sur base du schéma */
  const newBook = new Book({
    type : newType,
    name : newName,
    link : newLink
  });

  /* Envoie du nouveau livre à la DB */
  newBook.save()
  .then(() => res.json('Book ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})

module.exports = router;
