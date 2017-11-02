
function Spot() {

  this.keys = require('./keys.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');
  this.request = require('request');
  this.Spotify = require('node-spotify-api');

  this.spotify = new this.Spotify ({
    id: this.keys.spotifyKeys.clientID,
    secret: this.keys.spotifyKeys.clientSecret
  });


  this.spotSong = function(liriApp) {
    var liriApp = liriApp;
    var spotObj = this;

    liriApp.inquirer.prompt([
      {
        type: 'input',
        message: 'What song would you like to search for?',
        name: 'song'
      }
    ]).then(function(response) {
      if (response.song === '' || response.song === ' ') {
        spotObj.spotify.request('https://api.spotify.com/v1/search?q="the%20sign"&type=track').then(function(data) {
          this.printSpotSong(data);
        });
      } else {
        spotObj.spotify.request('https://api.spotify.com/v1/search?q="'+response.song+'"&type=track').then(function(data) {
          console.log (' ');
          console.log ('  '+'Top 20 Song Results:'.blue.underline.bold);
          var i;
          for (i=0; i<20; i++) {
            if( data.tracks.items[i] === undefined) {
            } else {
               spotObj.printSpotSong(data, i);
            }

          }
          liriApp.chooseCommand();
        });
       }


    });
  };

  this.printSpotSong = function(data, i) {
    var i = i;
    console.log('---------------');
    console.log('Artist(s):    '.green.bold + data.tracks.items[i].artists[0].name);
    console.log('Song Name:    '.green.bold + data.tracks.items[i].name);
    console.log('Preview Link: '.green.bold + data.tracks.items[i].href);
    console.log('Album:        '.green.bold + data.tracks.items[i].album.name);
    console.log('-----------------');

   //  this.chooseCommand();
  };

}

module.exports = new Spot();
