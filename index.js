// var greet = require("greet");
// // is the the same as requiring
// var greet = require("/greet_module_path/index.js");

module.exports = function greet(name,drunk) {
  if(drunk === '--drunk') {
    return "hello " + name + ", you look sexy today";
  } else {
    return "hello, " + name;
  }
}