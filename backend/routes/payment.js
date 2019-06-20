const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const stripe = require("stripe")("sk_test_SGABL1KLFsniwKNBLv1rsWHr00A6YIf7uf");

/************* STRIPE  ************/

// router.post("/charge", async (req, res) => {
//   try {
//     let arrayQty = req.body.productsInCart.map(p => p.quantity);
//     let newArrayPrices = [];

//     let arrayId = req.body.productsInCart.map(p => {
//       Product.findOne({ product_id: p.product_id })
//           .then(product => {
//             newArrayPrices.push(product.price)
//             console.log("this is the array ", newArrayPrices)
//           })
//           .catch(err => {
//             console.log(err);
//           });
//     });

//      console.log("ciucciabanane", newArrayPrices)

//     // setTimeout(function(){ console.log("tciucciabanane", newArrayPrices); }, 1000);

//     let { status } = await stripe.charges.create({
//       amount: 1000,
//       currency: "eur",
//       description: "An example charge",
//       source: req.body.tokenId
//     });
//     console.log("payment completed");

//     res.json({ status });
//   } catch (err) {
//     console.log(err);
//     res.status(500).end();
//   }
// });

router.post("/charge", async (req, res) => {
  try {
    let arrayQty = req.body.productsInCart.map(p => p.quantity);
    let arrayIds = req.body.productsInCart.map(p => p.product_id); // to loop in the database
    const products = await Product.find({ product_id: { $in: arrayIds } }); // check the price in database

    let arrayPrices = products.map(p => p.price);

    var totalArray = []

    for( let i = 0; i < arrayQty.length; i++){
      var newPrice = arrayQty[i] * Number(arrayPrices[i])
      totalArray.push(newPrice)
    }

    const totalPrice = totalArray.reduce((total, amount) => total + amount); 

    console.log("totalPrice", totalPrice)

  

    let { status } = await stripe.charges.create({
      amount: totalPrice * 100,
      currency: "eur",
      description: "An example charge",
      source: req.body.tokenId
    });
    console.log("payment completed");

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
