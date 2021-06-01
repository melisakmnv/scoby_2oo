const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Item = require('../models/Item');
const { createIndexes } = require('../models/User');

// Prefixe : api/users/

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Update the current user

router.patch('/me', (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .then((documentUser) => {
      res.status(200).json(documentUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Cannot update User' });
    });
});

// GET USER INFO

router.get('/me', (req, res) => {
  User.findById(req.session.currentUser)
    .then((documentUser) => {
      res.status(200).json(documentUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Cannot find The User' });
    });
});

// GET USER'S ITEMS

//  match id creator item => user id

// D'abord cherche tous les items; puis vérifie le id de créator de Chaque Item; puis compare id avec celui de user

// Si match => rends moi cet item

router.get('/me/items', (req, res) => {
  User.findById(req.session.currentUser).then((currentUser) => {
    console.log('log current User >>>   ' + currentUser._id); // 3è
  });
  console.log('log req.session >>>>>>    ' + req.session.currentUser); // Premier
  Item.find()
    .then((documentUser) => {
      const userItems = documentUser.map((itemUser) => {
        return itemUser.creator;
      });
      console.log('This is the result      ' + userItems); // 2è

      if (userItems === req.session.currentUser) {
        console.log('You rock !');
      }
      res.status(200).json(documentUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Cannot find The User' });
    });
});

module.exports = router;
