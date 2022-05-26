var express = require('express');
var router = express.Router();
let Curiosite = require('../models/curiosite.model')

/* 
    GET /curiosites/ 
*/
router.get('/', function(req, res, next) {
  
    /*Requête à la DB*/
    Curiosite.find({},(err, DBres)=>{
        if (err) return handleError(err);
        res.send(DBres);
    })
});
router.get('/detail/:id' , function(req,res,next) {

    const id = req.params.id
  
    Curiosite.findById(id , (err,DBres)=>{
      res.send(DBres)
    })
  
  });


/*
UPDATE /objets/
*/
router.put('/:id', function(req, res, next) {
  id = req.params.id 

  /*Requête à la DB*/
  Curiosite.updateOne({_id:id},{name:req.body.name,link:req.body.link,description:req.body.description},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(200);
  })
});



/*
DELETE /objets/
*/
router.delete('/:id', function(req, res, next) {
  id = req.params.id 

  /*Requête à la DB*/
  Curiosite.deleteOne({_id:id},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(200);
  })
});






/* 
    POST /curiosite/
*/
router.route('/').post((req, res) =>{
  
  /* Récupération des arguments dans la requete */
    const newName = req.body.name;
    const newLink = req.body.link;
    const newDescription = req.body.description;

        
    /* Construction d'une nouvelle curiosité sur base du schéma */
    const newCuriosite = new Curiosite({
        name : newName,
        link : newLink,
        description : newDescription,
    });

    /* Envoi du nouveau livre à la DB */
    newCuriosite.save()
    .then(() => res.json(200))
    .catch(err => res.status(400).json('Error ' + err)) 
})



module.exports = router;
