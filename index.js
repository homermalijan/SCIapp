'use strict'

var dotenv = require('dotenv');
dotenv.config();
var db = require('./db');
var express = require('express');
var	lodash = require('lodash');
var	app = express();
var	router = express.Router();
app.use(router);
var	port = process.env.APP_PORT;

var bodyParser = require('body-parser')
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var server = app.listen(port, function(){
	console.log('Listening to %s', port);
});

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

var Invoices = bookshelf.Model.extend({
	tableName: 'invoices'
});



router.route('/invoices')
	.post(function (req, res){
		Invoices.forge({req}).save().then(function(model) {
      knex('user').insert({amount: req.body.email, callback: req.body.callback, created_at: knex.raw('now()'), updated_at: knex.raw('now()')})
      .then(function(ret){
          res.json({ success: true, message: 'ok'/*,ret:ret*/});
      });

      // console.log(req);
			// res.json(req);
		});
	});


router.route('/invoices/:invoiceid')
	.get(function (req, res){
		Invoices.forge({invoiceid:req.params.invoiceid}).fetch()
			.then(function(i) {
				if (!i) {
					console.log('User with id: ', req.params.invoiceid, ' not found!');
					res.send('Cannot find invoice');
				}	else {
					res.json(i);
				}
			})
			.catch(function(res) {
				console.log('Error encountered!');
			})
	})

	.put(function (req, res){
		Invoices.forge({id:req.params.invoiceid}).fetch()
			.then(function(i) {
				if (!i) {
					console.log('User with id: ', id, ' not found!');
				} else {
					Invoice.save({
					})
				}
			})
	});

router.route('/invoicesdelete/:invoiceid')
	.get(function (req, res){
		Invoices.forge({invoiceid:req.params.invoiceid}).fetch({require: true})
			.then(function(i) {
				i.where(i.get('invoiceid')==req.params.invoiceid).destroy()	
				console.log('Successfully delete invoice with id: ', i.get('invoiceid'));
		})
			.catch(function(res) {
				console.log('Error encountered!');
			})
	});



