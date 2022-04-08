var express = require('express');
var router = express.Router();
let User = require('../models/users.model')

/* GET users. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 
    POST /users/
*/
router.route('/').post((req, res) =>{
  
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
