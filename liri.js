
function LiriApp() {

  this.tweety = require('./myTweets');
  this.spot = require('./spotifyThisSong');
  this.movieThis = require('./movieThis');
  this.doWuh = require('./doWhatItSays');
  this.log = require('./log.js');
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
             break;
           case 'Spotify This Song'.bold:
             liriApp.spotMe(liriApp);
             break;
           case 'Movie This'.bold:
             liriApp.movieMe(liriApp);
             break;
           case 'Do What It Says\n'.bold:
             liriApp.doWuhMe(liriApp);
             break;
           case 'Exit The App'.bold:
             process.exit();
             break;
           default:
             break;
         }

     });
   };

   this.tweetifyMe = function(liriApp, search) {
     var tweetifyMe = this.tweety;
     var search = search;

     tweetifyMe.myTweets(liriApp, search);
   };

   this.spotMe = function(liriApp, search) {
     var spotMe = this.spot;
     var search = search;

     spotMe.spotSong(liriApp, search);
   };

   this.movieMe = function(liriApp, search) {
     var movie = this.movieThis;
     var search = search;

     movie.movieMe(liriApp, search);
   };

   this.doWuhMe = function(liriApp) {
     var doWuh = this.doWuh;

     doWuh.doWhatSays(liriApp);
   }

 }

 // module.exports = LiriApp;


 var liri = new LiriApp();

 liri.welcome();
 liri.chooseCommand();
