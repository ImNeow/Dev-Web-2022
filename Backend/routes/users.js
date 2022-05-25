var express = require('express');
const { rawListeners } = require('../models/users.model');
var router = express.Router();
let User = require('../models/users.model')


/*

      SIGN  UP

*/

router.route('/register').post((req, res) =>{
  
  /* Récupération des arguments dans la requete */
  const newLastName = req.body.lastname;
  const newFirstName = req.body.firstname;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const newNewsletter = req.body.newsletter;

  /* Construction du nouveau utilisateur sur base du schéma */
  const newUser = new User({
    lastname : newLastName,
    firstname : newFirstName,
    email : newEmail,
    password : newPassword,
    newsletter : newNewsletter
  });

  /* Envoi du nouveau utilisateur à la DB */
  newUser.save()
  .then(() => res.json('User ajouté'))
  .catch(err => res.status(400).json('Error ' + err)) 
})

module.exports = router;



/* 
    GET /users/ 
*/
router.get('/', function(req, res, next) {
  
  console.log(req.res)
  /*Requête à la DB*/
  User.find({},'lastname firstname email newsletter',(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});




/*
UPDATE /users/  

Modification de la newsletter
*/
router.put('/newsletter/:id', function(req, res, next) {
  id = req.params.id 

  /*Requête à la DB*/
  User.updateOne({_id:id},{newsletter:req.body.newsletter},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(200);
  })
});

//Modification du mot de passse
router.put('/password/:id', function(req, res, next) {
  id = req.params.id 

  /*Requête à la DB*/
  User.updateOne({_id:id},{password:req.body.password},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(200);
  })
});


/*
DELETE /users/
*/
router.delete('/:id', function(req, res, next) {
  id = req.params.id 

  /*Requête à la DB*/
  User.deleteOne({_id:id},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(200);
  })
});
