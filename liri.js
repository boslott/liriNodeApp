
function LiriApp() {

  this.tweety = require('./myTweets');
  this.spot = require('./spotifyThisSong.js');
  this.movieThis = require('./movieThis.js');
  this.doWuh = require('./doWhatItSays.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');


  this.welcome = function() {
    console.log('');
    console.log('--------------------'.red.bold);
    console.log('');
    console.log(' |    ---  ---   --- '.red.bold);
    console.log(' |     |   |  \\   | '.red.bold);
    console.log(' |     |   |  |   |'.red.bold);
    console.log(' |     |   | /    |'.red.bold);
    console.log(' |     |   | \\    |'.red.bold);
    console.log(' |     |   |  \\   |'.red.bold);
    console.log(' |     |   |   \\  |'.red.bold);
    console.log(' ---  ---        --- '.red.bold);
    console.log('');
    console.log('--------------------'.red.bold);
    console.log('');
    console.log(' Welcome to LIRI (Language Interpretation and Recognition Interface)!'.blue.bold);
    console.log(' You will use LIRI to search for tweets, songs, or movies.'.blue.bold);
    console.log(' To begin, choose a command below: '.blue.bold);
    console.log('');
  };

   this.chooseCommand = function() {
     this.inquirer.prompt([
       {
         type: 'list',
         message: '\n\n '+'Please choose a LIRI command:'.blue.underline + ' (use up/down arrow keys)\n'.gray.bold,
         choices: ['','My Tweets'.bold, 'Spotify This Song'.bold, 'Movie This'.bold, 'Do What It Says\n'.bold, 'Exit'.underline.bold + ' The LIRI App'.bold],
         name: 'liriCommands'
       }
     ]).then((response) => {
         var liriApp = this;

         switch (response.liriCommands) {
           case 'My Tweets'.bold:
             liriApp.tweetifyMe(liriApp);
            //  liriApp.myTweets(liriApp, response.twitterSearch);
             break;
           case 'Spotify This Song'.bold:
             liriApp.spotMe(liriApp);
            //  liriApp.spotSong(liriApp);
             break;
           case 'Movie This'.bold:
             liriApp.movieMe(liriApp);
            //  liriApp.movieThis(liriApp);
             break;
           case 'Do What It Says\n'.bold:
              console.log('Do What was chosen');
             liriApp.doWhatSays(liriApp);
             break;
           case 'Exit The App'.bold:
             process.exit();
             break;
           default:
             break;
         }

     });
   };

   this.tweetifyMe = function(liriApp) {
     var tweetifyMe = this.tweety;

     tweetifyMe.myTweets(liriApp);
   };

   this.spotMe = function(liriApp) {
     var spotMe = this.spot;

     spotMe.spotSong(liriApp);
   };

   this.movieMe = function(liriApp) {
     var movie = this.movieThis;

     movie.movieMe(liriApp);
   }

 }

 module.exports = LiriApp;


 var liri = new LiriApp();

 liri.welcome();
 liri.chooseCommand();




   //
   // this.client = new this.Twitter({
   //   consumer_key: this.keys.twitterKeys.consumer_key,
   //   consumer_secret: this.keys.twitterKeys.consumer_secret,
   //   access_token_key: this.keys.twitterKeys.access_token_key,
   //   access_token_secret: this.keys.twitterKeys.access_token_secret
   // });

   // this.spotify = new this.Spotify ({
   //   id: this.keys.spotifyKeys.clientID,
   //   secret: this.keys.spotifyKeys.clientSecret
   // });




  //  this.myTweets = function(liriApp, twitterSearch) {
  //    var liriApp = liriApp;
  //    var twitterSearch = twitterSearch;
  //
  //    liriApp.inquirer.prompt([
  //      {
  //        type: 'input',
  //        message: 'Add Search Person/Topic: '.bold,
  //        name: 'twitterSearch'
  //      }
  //    ]).then((response) => {
  //
  //      this.client.get('search/tweets', {q: response.twitterSearch}, (error, tweets, response) => {
  //        if(error) {
  //          console.log(error);
  //          console.log('error: ' + error);
  //          throw error;
  //        }
  //        else {
  //          liriApp.printTweets(tweets);
  //        }
  //
  //        liriApp.chooseCommand();
  //     });
  //   });
  // };
  //
  //  this.printTweets = function(tweets) {
  //    var tweets = tweets;
  //    console.log('');
  //    console.log('  ' + 'Last 20 Tweets For Search Topic: '.blue.underline.bold);
  //    console.log('');
  //
  //    var i;
  //    for (i=0; i<20; i++) {
  //      if (tweets.statuses[i] !== undefined) {
  //        if (i%2 === 0) {
  //          console.log(`Tweet: `.magenta + tweets.statuses[i].text);
  //          console.log('Created: '.magenta + tweets.statuses[i].created_at);
  //          console.log('        ----------------');
  //        } else {
  //          console.log(`Tweet:   `.blue + tweets.statuses[i].text);
  //          console.log('Created: '.blue + tweets.statuses[i].created_at);
  //          console.log('        ----------------');
  //        }
  //      }
  //    }
  //    console.log('');
  //    console.log('--------------------------------'.blue.bold);
  //    console.log('');
  //  };

  //  this.spotSong = function(liriApp) {
  //    var liriApp = liriApp;
   //
  //    liriApp.inquirer.prompt([
  //      {
  //        type: 'input',
  //        message: 'What song would you like to search for?',
  //        name: 'song'
  //      }
  //    ]).then(function(response) {
  //      if (response.song === '' || response.song === ' ') {
  //        liriApp.spotify.request('https://api.spotify.com/v1/search?q="the%20sign"&type=track').then(function(data) {
  //          liriApp.printSpotSong(data);
  //        });
  //      } else {
  //        liriApp.spotify.request('https://api.spotify.com/v1/search?q="'+response.song+'"&type=track').then(function(data) {
  //          console.log (' ');
  //          console.log ('  '+'Top 20 Song Results:'.blue.underline.bold);
  //          var i;
  //          for (i=0; i<20; i++) {
  //            liriApp.printSpotSong(data, i);
  //          }
  //          liriApp.chooseCommand();
  //        });
  //       }
   //
   //
  //    });
  //  };
   //
  //  this.printSpotSong = function(data, i) {
  //    var i = i;
  //    console.log('---------------');
  //    console.log('Artist(s):    '.green.bold + data.tracks.items[i].artists[0].name);
  //    console.log('Song Name:    '.green.bold + data.tracks.items[i].name);
  //    console.log('Preview Link: '.green.bold + data.tracks.items[i].href);
  //    console.log('Album:        '.green.bold + data.tracks.items[i].album.name);
  //    console.log('-----------------');
   //
  //   //  this.chooseCommand();
  //  };

  //  this.movieThis = function(liriApp) {
  //    var liriApp = liriApp
   //
  //    liriApp.inquirer.prompt([
  //      {
  //        type: 'input',
  //        message: 'What movie would you like to search?',
  //        name: 'movieSearch'
  //      }
  //    ]).then(function(response){
  //      if (response.movieSearch === '' || response.movieSearch === ' ') {
  //        liriApp.request('http://www.omdbapi.com/?apikey=40e9cece&t=mr+nobody', function(error, response, body) {
  //          var mov = JSON.parse(body);
  //          if(error) throw error;
  //          liriApp.printMovie(mov, liriApp);
  //        });
  //      } else {
  //        liriApp.request('http://www.omdbapi.com/?apikey=40e9cece&t='+response.movieSearch, function(error, response, body) {
  //          var mov = JSON.parse(body);
  //          if(error) throw error;
  //          liriApp.printMovie(mov, liriApp);
  //        });
  //      }
  //    });
  //  };
   //
  //  this.printMovie = function(mov, liriApp) {
  //    var mov = mov;
  //    var liriApp = liriApp;
   //
  //    if (mov.Title) {
  //      console.log('---------------');
  //      console.log('Movie Title:             '.cyan.bold + mov.Title);
  //      console.log('Movie Release Year:      '.cyan.bold + mov.Year);
  //      if (mov.Ratings) {
  //        console.log('IMDB Rating:             '.cyan.bold + mov.Ratings[0].Value);
  //        if (mov.Ratings[1]) {
  //          console.log('Rotten Tomatoes Rating:  '.cyan.bold + mov.Ratings[1].Value);
  //        }
  //      }
  //      console.log('Production Country:      '.cyan.bold + mov.Country);
  //      console.log('Language:                '.cyan.bold + mov.Language);
  //      console.log('Plot:                    '.cyan.bold + mov.Plot);
  //      console.log('Actors:                  '.cyan.bold + mov.Actors);
  //      console.log('---------------');
   //
  //      this.chooseCommand();
  //    } else {
  //      console.log('');
  //      console.log('That movie cannot be found. Perhaps you mistyped it. Please retry');
  //      console.log('');
  //      liriApp.movieThis(liriApp);
  //    }
  //  };

  //  this.doWhatSays = function(liriApp) {
  //    var liriApp = liriApp;
  //    console.log('');
  //    console.log('This feature is coming soon. Please choose a different command from below:'.red.bold);
  //    console.log('');
  //    liriApp.chooseCommand();
  //  };
// }
//
//
// var liri = new LiriApp();
//
// liri.welcome();
// liri.chooseCommand();
