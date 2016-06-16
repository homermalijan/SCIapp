"use strict";

let config = require("./config/database");
let knex = require("knex")(config);
module.exports = require("bookshelf")(knex);
