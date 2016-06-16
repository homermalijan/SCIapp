"use strict"
let Promise = require('bluebird');
let _ = require('lodash');

class InvoiceCreator {
  execute(params) {

    if(!params.amount || params.amount < 0 || !_.isNumber(params.amount)) {
		return Promise.reject(new Error());
    }


    var invoice = new Invoice(params);
    return Promise.resolve(invoice);
  }
}

module.exports = InvoiceCreator;
