
function Spot() {

  this.keys = require('./keys.js');
  this.log = require('./log.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');
  this.request = require('request');
  this.Spotify = require('node-spotify-api');

  this.spotify = new this.Spotify ({
    id: this.keys.spotifyKeys.clientID,
    secret: this.keys.spotifyKeys.clientSecret
  });


  this.spotSong = function(liriApp, search) {
    var liriApp = liriApp;
    var search = search;
    var spotObj = this;

    if (search === undefined) {
      liriApp.inquirer.prompt([
        {
          type: 'input',
          message: 'What song would you like to search for?',
          name: 'song'
        }
      ]).then(function(response) {
        if (response.song === '' || response.song === ' ') {
          spotObj.callOut(spotObj, '"the%20sign"', liriApp);
        } else {
          spotObj.callOut(spotObj, response.song, liriApp);
         }
      });
    } else {
      this.callOut(spotObj, search, liriApp);
    }
  };

  this.callOut = function(spotObj, search, liriApp) {
    var spotObj = spotObj;
    var search = search;
    var liriApp = liriApp;
    var searchStr = 'https://api.spotify.com/v1/search?q='+search+'&type=track';
    var log = this.log;

    log.logAction('spotify-this-song', search);
    spotObj.spotify.request(searchStr).then(function(data) {
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
  };

  this.printSpotSong = function(data, i) {
    var i = i;
    console.log('---------------');
    console.log('Artist(s):    '.green.bold + data.tracks.items[i].artists[0].name);
    console.log('Song Name:    '.green.bold + data.tracks.items[i].name);
    console.log('Preview Link: '.green.bold + data.tracks.items[i].href);
    console.log('Album:        '.green.bold + data.tracks.items[i].album.name);
    console.log('-----------------');

  };

}

module.exports = new Spot();
