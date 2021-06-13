const express = require('express');
const bagsRouter = require('./routes/bags');
const productsRouter = require('./routes/products')
const app = express()

require('./db/mongoose')

app.use(express.json())

app.use('/bags', bagsRouter)
app.use('/products', productsRouter)

app.listen(4545, (err) => {
    if (err) console.log(err)
    console.log("Started Server on port 4545")
})

