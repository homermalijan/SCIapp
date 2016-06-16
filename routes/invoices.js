"use strict";

let router = require("express").Router();
let _ = require("lodash");


router.post('/invoices', function (req, res){
  let params = _.clone(req.body);
  let invoice = new Invoice(params);

  invoice.save().then(newInvoice => {
    res.json(newInvoice)
  })
  .catch(err => {
  })


})
