const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Donationmodel = require('./models/Donation');
const Ordermodel = require('./models/Order');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/donatedb',{
}).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDb connection error:",err));


app.post('/donate',(req,res)=>{
    Donationmodel.create(req.body)
    .then(Donation => res.json(Donation))
    .catch(err=> res.json(err))
})

app.post('/order',(req,res)=>{
    Ordermodel.create(req.body)
    .then(Order => res.json(Order))
    .catch(err=> res.json(err))
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));