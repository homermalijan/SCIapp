"use strict";

let chai = require("chai");
let sinon = require("sinon");
let chaiAsPromised = require("chai-as-promised");
let knexFile = require("../knexfile").test;
let seeds = require("../seeds");
let knex = require("knex")(knexFile)

require("sinon-as-promised");

chai.use(chaiAsPromised);

require("../src");

global.expect = chai.expect;
global.stub = sinon.stub;
global.mock = sinon.mock;
global.spy = sinon.spy;

global.seeds = function() {
  return knex.seed.run(seeds);
}

global.migrate = function() {
  return knex.migrate.latest(knexFile);
}

global.rollback = function() {
  return knex.migrate.rollback(knexFile);
}
