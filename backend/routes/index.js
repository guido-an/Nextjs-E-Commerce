const express = require('express')
const router = express.Router()
const Vendor = require('../models/Vendor')
const Product = require('../models/Product')
const Order = require('../models/Order')
// const stripe = require("stripe")("sk_test_SGABL1KLFsniwKNBLv1rsWHr00A6YIf7uf");

/*****************
 1) GET VENDORS */
router.get('/vendors', (req, res, next) => {
  Vendor.find()
    .then(vendors => {
      res.send(vendors)
    })
    .catch(err => {
      console.log(err)
    })
})

/*************************
 2) GET SINGLE VENDOR */
router.get('/vendor', (req, res, next) => {
  Vendor.findOne({ vendor_id: req.query.vendor_id })
    .then(vendor => {
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

/*****************************************
 3) GET SINGLE PRODUCT with route params */
router.get('/product/:product_id', (req, res, next) => {
  Product.findOne({ product_id: req.params.product_id })
    .then(product => {
      res.send(product)
    })
    .catch(err => {
      console.log(err)
    })
})

/*************************
 4) GET PRODUCTS VENDOR */
router.get('/productsVendor', (req, res, next) => {
  Product.find({ vendor_id: req.query.vendor_id })
    .then(product => {
      res.send(product)
    })
    .catch(err => {
      console.log(err)
    })
})

/*************************
 5) CREATE ORDER */
router.post('/create-order', (req, res) => {
  const { productsInCart, customerDetails } = req.body
  Order.create({
    productsInCart: productsInCart,
    customerDetails: customerDetails
  })

    .then((order) => {
      res.send(order)
      console.log('order!', order)
    })
    .catch(err => {
      console.log('err:', err)
    })
})

/*************************
 6) GET ORDERS */
router.get('/orders', (req, res) => {
  Order.find()
    .then((orders) => {
      res.send(orders)
    })
    .catch(err => {
      console.log(err)
    })
})

/** *********** SEND EMAIL  ************/
// var nodemailer = require('nodemailer')

// var transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: 'carucciguido@gmail.com',
//     pass: process.env.passwordEmail
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Server is ready to take messages')
//   }
// })

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

  var mail = {
    from: name,
    to: 'carucciguido@gmail.com',
    subject: `New Message from ${name}`,
    text: `name: ${name} \n email: ${email} \n message: ${message} `
  }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
})

module.exports = router
