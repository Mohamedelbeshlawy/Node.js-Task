const express = require('express');
const Bag = require('../models/bag');
const router = express.Router()

// To get the bag by ID
router.get('/:id', async (req, res) => {
    const bag = await Bag.findById(req.params.id)
    await bag.populate({path: "items"}).execPopulate()
    res.send(bag)
})

// To get all bags
router.get('/', async(req, res) => {
    const bags = await Bag.find()
    res.send(bags)
})

// To add product to a specific bag (we can either send the id of the product in header or in request)
// I know the id of the product is not sensitive and we can send it in the header
// But i prefer to send it in the request body
router.post('/addToBag/:id', async (req, res) => {
    const bag = await Bag.findById(req.params.id)
    bag.items.push(req.body.id)
    await bag.save()
    res.send(bag)
})

// To add bag (I made it for testing purpose)
router.post('/', async (req, res) => {
    try {
        const bag = new Bag()
        await bag.save()
        res.send(bag)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router