var express = require('express');
var router = express.Router();
let Objet = require('../models/objets.model')

/* 
    GET /objets/ 
*/
router.get('/', function(req, res, next) {
  
  /*Requête à la DB*/
  Objet.find({},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});


router.get('/statuette', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'statuette'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/statuette/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'statuette'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'statuette'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'statuette'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'statuette'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/poster', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'poster'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/poster/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'poster'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'poster'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'poster'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'poster'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/montre', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'montre'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/montre/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'montre'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'montre'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'montre'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'montre'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/vaisselle', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'vaisselle'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/vaisselle/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'vaisselle'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'vaisselle'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'vaisselle'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'vaisselle'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/jeudecarte', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'jeudecarte'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/jeudecarte/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'jeudecarte'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'jeudecarte'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'jeudecarte'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'jeudecarte'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/cartepostale', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'cartepostale'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/cartepostale/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'cartepostale'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'cartepostale'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'cartepostale'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'cartepostale'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});


router.get('/gadget', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'gadget'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/gadget/:filter', function(req, res, next) {
  const filter = req.params.filter
  switch(filter){
    case 'alphaAsc':
      Objet.find({type:'gadget'}).sort({'name':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:'gadget'}).sort({'name':'desc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:'gadget'}).sort({'price':'asc'}).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:'gadget'}).sort({'price':'desc'}).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

});

router.get('/:id' , function(req,res,next) {

  const id = req.params.id

  Objet.findById(id , (err,DBres)=>{
    res.send(DBres)
  })

});




/* 
    POST /objets/
*/
router.route('/').post((req, res) =>{
  
  /* Récupération des arguments dans la requete */
  const newName = req.body.name;
  const newLink = req.body.link;
  const newType = req.body.type;
  const newDescription = req.body.description;
  const newPrice = req.body.price;

  /* Construction du nouveau Objet sur base du schéma */
  const newObjet = new Objet({
    name : newName,
    link : newLink,
    type : newType,
    description : newDescription,
    price : newPrice
  });

  /* Envoi du nouveau Objet à la DB */
  newObjet.save()
  .then(() => res.json('Objet ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})


module.exports = router;
