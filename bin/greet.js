#!/usr/bin/env node

var greet = require("greet");
var parseArgs = require('minimist')(process.argv.slice(2));

// console.dir(parseArgs);
// console.log(parseArgs);
console.log(greet(parseArgs._ , parseArgs.drunk));
