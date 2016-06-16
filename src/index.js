"use strict";

let requireDirectory = require("require-directory");
let _ = require("lodash");

global.Model = require("./model").Model;
global.Collection = require("./model").Collection;


["services"].forEach(dir => {
  let item = requireDirectory(module, `./${dir}`);
  _.merge(global, item);
});
