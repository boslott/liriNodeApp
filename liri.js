
function LiriApp() {

  this.twitterKeys = require('./keys.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');
  this.request = require('request');
  this.Spotify = require('node-spotify-api');
  this.Twitter = require('twitter');



  this.client = new this.Twitter({
    consumer_key: this.twitterKeys.consumer_key,
    consumer_secret: this.twitterKeys.consumer_secret,
    access_token_key: this.twitterKeys.access_token_key,
    access_token_secret: this.twitterKeys.access_token_secret
  });

   this.chooseCommand = function() {
     this.inquirer.prompt([
       {
         type: 'list',
         message: '\nPlease choose a command: \n'.blue.underline,
         choices: ['My Tweets'.bold, 'Spotify This Song'.bold, 'Movie This'.bold, 'Do What It Says'.bold, 'Exit The App'.bold],
         name: 'liriCommands'
       },
       {
         type: 'confirm',
         message: '\n   Is this correct? '.blue,
         name: 'confirmCommand',
         default: true
       }
     ]).then((response) => {
       if (!response.confirmCommand) {
         console.log('');
         console.log('   No problem. Let\'s try again ...'.blue.bold);
         console.log('');
         this.chooseCommand();
         return;
       } else {
         var liriApp = this;

         switch (response.liriCommands) {
           case 'My Tweets'.bold:
             liriApp.myTweets(liriApp);
             break;
           case 'Spotify This Song'.bold:
             break;
           case 'Movie This'.bold:
             break;
           case 'Do What It Says'.bold:
             break;
           case 'Exit The App'.bold:
             process.exit();
             break;
           default:
             break;
         }
       }
     });
   };

   this.myTweets = function(liriApp) {
     var liriApp = liriApp;
     this.client.get('search/tweets', {q: 'lirinodeapp17'}, (error, tweets, response) => {
       if(error) throw error;
       else {
         console.log('');
         console.log('  ' + 'My Last 20 Tweets:'.blue.underline.bold);
         console.log('');

         var i;
         for (i=0; i<20; i++) {
           if (tweets.statuses[i] !== undefined) {
             if (i%2 === 0) {
               console.log(`Tweet: `.magenta + tweets.statuses[i].text);
               console.log('Created: '.magenta + tweets.statuses[i].created_at);
               console.log('        ----------------');
             } else {
               console.log(`Tweet: `.blue + tweets.statuses[i].text);
               console.log('Created: '.blue + tweets.statuses[i].created_at);
               console.log('        ----------------');
             }
           }
         }
         console.log('');
         console.log('--------------------------------'.blue.bold);
         console.log('');
       }

       liriApp.chooseCommand();
      });
   };

   this.printTweets = function() {

   };

}


var liri = new LiriApp();

liri.chooseCommand();
