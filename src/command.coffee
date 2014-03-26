module.exports = command = ->
  greet = require("./index")
  parseArgs = require('minimist')(process.argv.slice(2))
  console.log greet(parseArgs._, parseArgs.drunk)