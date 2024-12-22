const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    bloodGroup: String,
});

const Ordermodel = mongoose.model('Order',OrderSchema);
module.exports = Ordermodel;

