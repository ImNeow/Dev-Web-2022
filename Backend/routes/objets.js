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

module.exports = router;
