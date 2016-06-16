"use strict"
let Promise = require('bluebird');

class InvoiceCreator {
  execute(params) {
    if(!params.amount) return Promise.reject();
    var invoice = new Invoice(params);
    return Promise.resolve(invoice);
  }
}

module.exports = InvoiceCreator;
