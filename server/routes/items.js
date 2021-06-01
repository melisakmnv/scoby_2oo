const express = require('express');
const router = express.Router();
const Item = require('../models/Item');



//  /api/items 
// GET ALL THE ITMES IN THE DB //

router.get("/", (req, res) => {
    Item.find()
    .then((documentItems) => {
        res.status(200).json(documentItems)
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot find Items'})
    });
});


// GET ONE ITME IN THE DB //

router.get("/:id", (req, res) => {
    Item.findById(req.params.id) // (req.body) => input  // (req.params.id) => url 
    .then((documentItem) => {
        res.status(200).json(documentItem)
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot find Item'})
    });
});


// CREATE AN ITEM IN THE DB // 

router.post("/", (req, res) => { 


    const {name, description, category, quantity, address, location, creator, contact } = req.body

    const newItem = {
        name,
        description,
        category,
        quantity,
        address,
        location,
        creator,
        contact
    }

    Item.create(newItem)
    .then((documentItem) => {
        res.status(200).json(documentItem)
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot create Item'})
    });
})

// QUESTION : 
// Postman, il faut mettre tous les keys pour tester ?
// Comment tester des arrays, objects ?



// UPDATE AN ITEM IN THE DB // 

router.patch("/:id", (req, res) => { 
    Item.findByIdAndUpdate(req.params.id, req.body,{new : true} )
    .then((documentItem) => {
        res.status(200).json(documentItem)
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot updateItem'})
    });
})

// DELETE AN ITEM IN THE DB // 

router.delete("/:id", (req, res) => { 
    Item.findByIdAndRemove(req.params.id)
    .then((documentItem) => {
        res.status(200).json(documentItem, {message: 'Deleted is done'})
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot updateItem'})
    });
})


module.exports = router;