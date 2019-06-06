const express = require('express');
const router  = express.Router();
const Vendor = require("../models/Vendor");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/vendors', (req, res, next) => {
  Vendor.find()
  .then(vendos => {
    res.send(vendos)
  })
})

module.exports = router;
