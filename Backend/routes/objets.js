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

router.get('/poster', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'poster'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/montre', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'montre'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/vaisselle', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'vaisselle'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/jeudecarte', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'jeudecarte'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/cartepostale', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'cartepostale'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

router.get('/gadget', function(req, res, next) {
  /*Requête à la DB*/
  Objet.find({type:'gadget'},(err, DBres)=>{
      if (err) return handleError(err);
      res.send(DBres);
  })
});

module.exports = router;
