const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    email: String,
    dob: Date,
    gender: String,
    bloodGroup: String,
});

const Donationmodel = mongoose.model('Donation',DonationSchema);
module.exports = Donationmodel;

