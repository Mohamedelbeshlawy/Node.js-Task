const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/DisneyApp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    },(err) => {
        if (err) return console.error(err)
        console.log("Connected to DB")
})