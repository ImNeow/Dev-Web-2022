var express = require('express');
var router = express.Router();
let Book = require('../models/books.model')


/* 
    GET /books/ 
*/
router.get('/', function(req, res, next) {
  
    /*Requête à la DB*/
    Book.find({},(err, DBres)=>{
        if (err) return handleError(err);
        res.send(DBres);
    })
});

router.get('/search/:name', function(req, res, next) {

  const name = req.params.name

  /*Requête à la DB*/
  Book.find({name:{ "$regex": name, "$options": "i" }},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/BD', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'BD'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/Comic', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'Comic'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/Manga', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'Manga'},(err, DBres)=>{
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


/* 
    POST /books/
*/
router.route('/').post((req, res) =>{
  
  /* Récupération des arguments dans la requete */
  const newType = req.body.type;
  const newName = req.body.name;
  const newLink = req.body.link;
  const newDescription = req.body.description;
  const newPrice = req.body.price;
  const newAuthor = req.body.author;
  const newPublisher = req.body.publisher;

  /* Construction du nouveau livre sur base du schéma */
  const newBook = new Book({
    type : newType,
    name : newName,
    link : newLink,
    description : newDescription,
    price : newPrice,
    author : newAuthor,
    publisher : newPublisher
  });

  /* Envoie du nouveau livre à la DB */
  newBook.save()
  .then(() => res.json('Book ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})

module.exports = router;
