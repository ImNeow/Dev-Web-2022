var express = require('express');
var router = express.Router();
let Objet = require('../models/objets.model')

const nbrObjetPerRequest = 15;

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

router.get('/detail/:id' , function(req,res,next) {

  const id = req.params.id

  Objet.findById(id , (err,DBres)=>{
    if (err) return handleError(err);
    res.send(DBres)
  })

});
router.get('/:type/count', function(req, res, next) {

  const type = req.params.type

  /*Requête à la DB*/
  Objet.countDocuments({type:type},function (err, count) {
    if (err){
        console.log(err)
    }else{
        res.send(''+count)
    }
})});
router.get('/:type', function(req, res, next) {
  const type = req.params.type
  /*Requête à la DB*/
  Objet.find({type:type},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});
router.get('/:type/:filter/:page', function(req, res, next) {
  const filter = req.params.filter
  const type = req.params.type
  const page = parseInt(req.params.page)

  switch(filter){
    case 'alphaAsc':
      Objet.find({type:type}).sort({'name':'asc'}).skip(nbrObjetPerRequest*(page-1)).limit(nbrObjetPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
    case 'alphaDesc':
      Objet.find({type:type}).sort({'name':'desc'}).skip(nbrObjetPerRequest*(page-1)).limit(nbrObjetPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
        break;
    case 'priceAsc':
      Objet.find({type:type}).sort({'price':'asc'}).skip(nbrObjetPerRequest*(page-1)).limit(nbrObjetPerRequest).exec(function(err,docs){
        if (err) return handleError(err);
        res.send(docs)
      });
      break;
      case 'priceDesc':
        Objet.find({type:type}).sort({'price':'desc'}).skip(nbrObjetPerRequest*(page-1)).limit(nbrObjetPerRequest).exec(function(err,docs){
          if (err) return handleError(err);
          res.send(docs)
        });
        break;
    default:
      return handleError(err);
  }

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
