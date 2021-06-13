const express = require('express');
const Product = require('../models/product')

const router = express.Router()

// To get specific product by its ID
router.get('/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.send("Error Happened")
    }
})

// To get all products
router.get('/', async (req,res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.send("Error Happened")
    }
})

// To add specific product
router.post('/', async (req,res) => {
    try {
        const productItem = req.body
        const product = new Product({
            title: productItem.title,
            price: productItem.price,
            description: productItem.description
        })
        await product.save()
        res.send(product)
    } catch (error) {
        res.send("Error Happened")
    }
})

module.exports = router