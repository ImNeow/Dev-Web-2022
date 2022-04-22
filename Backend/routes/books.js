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
router.get('/:type', function(req, res, next) {
  
  const type= req.params.type
  
  /*Requête à la DB*/
  Book.find({type:type}).exec(function(err,docs){
    if (err) return handleError(err);
    res.send(docs)
  });
});
router.get('/:type/count', function(req, res, next) {

  const type = req.params.type

  /*Requête à la DB*/
  Book.countDocuments({type:type},function (err, count) {
    if (err){
        console.log(err)
    }else{
        res.send(''+count)
    }
})});
router.get('/:type/:filter/:page', function(req, res, next) {
  
  const type = req.params.type
  const filter = req.params.filter
  const page = parseInt(req.params.page)

  switch(filter){
    case 'alphaAsc':
      Book.find({type:type}).sort({'name':'asc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Book.find({type:type}).sort({'name':'desc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Book.find({type:type}).sort({'price':'asc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Book.find({type:type}).sort({'price':'desc'}).skip(nbrBookPerRequest*(page-1)).limit(nbrBookPerRequest).exec(function(err,docs){
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
router.get('/detail/:id' , function(req,res,next) {

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

  /* Envoi du nouveau livre à la DB */
  newBook.save()
  .then(() => res.json('Book ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})


module.exports = router;
