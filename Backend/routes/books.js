var express = require('express');
var router = express.Router();
let Book = require('../models/books.model')

const nbrBookPerRequest = 15;

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


/* 
    GET /books/BD
*/
router.get('/BD', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'BD'}).exec(function(err,docs){
    if (err) return handleError(err);
    res.send(docs)
  });
});
router.get('/BD/count', function(req, res, next) {
  /*Requête à la DB*/
  Book.estimatedDocumentCount(function (err, count) {
    if (err){
        console.log(err)
    }else{
        res.send(''+count)
    }
});

});
router.get('/BD/:filter/:page', function(req, res, next) {
  const filter = req.params.filter
  const page = parseInt(req.params.page)
  switch(filter){
    case 'alphaAsc':
      Book.find({type:'BD'}).sort({'name':'asc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Book.find({type:'BD'}).sort({'name':'desc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Book.find({type:'BD'}).sort({'price':'asc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Book.find({type:'BD'}).sort({'price':'desc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});

/* 
    GET /books/Comic
*/
router.get('/Comic', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'Comic'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/Comic/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Book.find({type:'Comic'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Book.find({type:'Comic'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'priceAsc':
      Book.find({type:'Comic'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Book.find({type:'Comic'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


/* 
    GET /books/Manga
*/
router.get('/Manga', function(req, res, next) {
  /*Requête à la DB*/
  Book.find({type:'Manga'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/Manga/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Book.find({type:'Manga'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Book.find({type:'Manga'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'priceAsc':
      Book.find({type:'Manga'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Book.find({type:'Manga'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


/* 
    GET /books/search/
*/
router.get('/search/:name', function(req, res, next) {

  const name = req.params.name

  /*Requête à la DB*/
  Book.find({name:{ "$regex": name, "$options": "i" }},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/:id' , function(req,res,next) {

  const id = req.params.id
  console.log(id)
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

  /* Envoi du nouveau livre à la DB */
  newBook.save()
  .then(() => res.json('Book ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})


module.exports = router;
