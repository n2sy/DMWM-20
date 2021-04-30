const express = require("express");
const mongoose = require("mongoose");

//const bodyParser = require("body-parser");

const cvRoutes = require("./routes/cv");

const app = express();


app.use(express.json()); //express.urlencoded({extended : true})  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})
app.use('/cv', cvRoutes);



mongoose.connect('mongodb://localhost:27017/dmwm20', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => app.listen(3000, console.log("Server started !")))
    .catch(err => console.log(err));



