const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
})

const Bag = mongoose.model("Bag", bagSchema)

module.exports = Bag