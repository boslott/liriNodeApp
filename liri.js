
var twitterKeys = require('./keys.js');
var inquirer = require('inquirer');
var colors = require('colors');
var request = require('request');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

inquirer.prompt([
  {
    type: "list",
    message: "Please choose a command: ",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "liriCommands"
  },
  {
    type: "confirm",
    message: "Is this correct?",
    name: "confirmCommand",
    default: true
  }
])
.then(function(inquirerResponse){
  if (inquirerResponse.confirmCommand) {
    console.log("Good Choice!");
  }
});
