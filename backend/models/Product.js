const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  vendor: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vendor'
    }],
    name: String,
    desc: String,
    price: String,
    img: String,
    product_url: String,
    weight: String,
    vendor_name: String
})


const Product = mongoose.model('Product', productSchema)


module.exports = Product;

