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

app.get('/donations', async (req, res) => {
    try {
        const allDonations = await Donationmodel.find(); // Fetch all donations from the database
        res.json({ donations: allDonations });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching donations', error });
    }
});

app.post('/matching-users', async (req, res) => {
    const {name,phone,bloodGroup} = await req.body;
    console.log(bloodGroup);// Extract blood group from query parameters
    try {
        const matchingUsers = await Donationmodel.find({ bloodGroup }); // Query the database for matching users
        console.log(matchingUsers);
        res.json({ users: matchingUsers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching matching users', error });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));