'use strict'

require('dotenv').config();

var express = require('express'),
		lodash = require('lodash'),
		app = express(),
		router = express.Router(),
		port = process.env.APPT_PORT || 8081;

app.listen(port);  

console.log("Listening on port: ", port);  

var knex = require('knex')({  
    client: 'postgresql',
    connection: {
      database: process.env.APP_DATABASE,
			user: process.env.APP_NAME,
			password: process.env.APP_PASSWORD,
			charset: process.env.APP_CHARSET
    }
});

var bookshelf = require('bookshelf')(knex);  

var Invoices = bookshelf.Collection.extend({
	model: Invoice
});


router.route('/invoices')
	.post(function (req, res){
		
	
	

	});


router.route('/invoices/:invoiceid')
	.get(function (req, res){
		Invoice.forge({id:req.params.invoiceid}).fetch()
			.then(function(i) {
				if (!i) {
					console.log('User with id: ', id, ' not found!');
					res.status(404);			
				}	else {
					console.log('ID: ', i.get('id'), ' Amount: ', i.get('amount'), 
					' Callback: ', i.get('callback'), ' Created on: ', i.get('created_at'),
					' Last update on: ', i.get('updated_at'));
				}
			})
			.catch(function(err)) {
				console.log('Error encountered!');
				res.status(500);			
			}
	})

	.put(function (req, res){

	})
	
	.delete(function (req, res){

	});
	















