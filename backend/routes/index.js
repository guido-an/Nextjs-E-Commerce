const express = require('express');
const router  = express.Router();
const Vendor = require("../models/Vendor");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




/* 1) GET VENDORS */ 
router.get('/vendors', (req, res, next) => {
  Vendor.find()
  .then(vendors => {
    res.send(vendors)
  })
  .catch(err => {
    console.log(err)
  })
})


/* 2) GET SINGLE VENDOR */ 
router.get('/vendor', (req, res, next) => {
  Vendor.findOne({ vendor_id: req.query.vendor_id})
  .then(vendor=> {
    res.send(vendor)
  })
  .catch(err => {
    console.log(err)
  })
})

/* 3) GET SINGLE PRODUCT with QUERY params */ 
// router.get('/product', (req, res, next) => {
//   Vendor.findOne({ vendor_id: req.query.vendor_id})
//   .then(vendor=> {
//     res.send(vendor.products[req.query.product_id])
//   })
//   .catch(err => {
//     console.log(err)
//   })
// })

/* 3) GET SINGLE PRODUCT  with ROUTE params */
router.get('/product/:vendor_id/:product_id', (req, res, next) => {
  Vendor.findOne({ vendor_id: req.params.vendor_id})
  .then(vendor=> {
    res.send(vendor.products[req.params.product_id])
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;
