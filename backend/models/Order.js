const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    productsInCart: Array,
    customerDetails: Object
})


const Order = mongoose.model('Order', orderSchema)

module.exports = Order;