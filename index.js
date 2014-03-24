// var greet = require("greet");
// // is the the same as requiring
// var greet = require("/greet_module_path/index.js");

module.exports = function greet(name) {
  return "hello, " + name;
}

