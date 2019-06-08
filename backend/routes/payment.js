const express = require('express');
const router  = express.Router();
const stripe = require("stripe")("sk_test_SGABL1KLFsniwKNBLv1rsWHr00A6YIf7uf");

/************* STRIPE  ************/

router.post("/charge", async (req, res) => {
  
    console.log(req.body)
    try {
      let {status} = await stripe.charges.create({
        amount: 1000,
        currency: "eur",
        description: "An example charge",
        source: req.body.tokenId
      });
  
      res.json({status});
    } catch (err) {
        console.log(err)
      res.status(500).end();
    }
  });


  module.exports = router;