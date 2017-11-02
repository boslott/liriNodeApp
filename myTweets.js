
function Tweety() {

  this.keys = require('./keys.js');
  this.log = require('./log.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');
  this.request = require('request');
  this.Twitter = require('twitter');


  this.client = new this.Twitter({
    consumer_key: this.keys.twitterKeys.consumer_key,
    consumer_secret: this.keys.twitterKeys.consumer_secret,
    access_token_key: this.keys.twitterKeys.access_token_key,
    access_token_secret: this.keys.twitterKeys.access_token_secret
  });


  this.myTweets = function(liriApp, search) {
    var liriApp = liriApp;
    var search = search;

    if (search === undefined) {
      this.inquirer.prompt([
        {
          type: 'input',
          message: 'Add Search Person/Topic: '.bold,
          name: 'twitterSearch'
        }
      ]).then((response) => {
        var log = this.log;
        log.logAction('my-tweets', response.twitterSearch);
        this.client.get('search/tweets', {q: response.twitterSearch}, (error, tweets, response) => {
          if(error) {
            console.log(error);
            console.log('error: ' + error);
            throw error;
          }
          else {
            this.printTweets(tweets);
          }

          liriApp.chooseCommand();
       });
     });
   } else {
     var log = this.log;
     log.logAction('my-tweets', search);
     this.client.get('search/tweets', {q: search}, (error, tweets, response) => {
       if(error) {
         console.log(error);
         console.log('error: ' + error);
         throw error;
       }
       else {
         this.printTweets(tweets);
       }

       liriApp.chooseCommand();
     });
    }
  };

  this.printTweets = function(tweets) {
    var tweets = tweets;
    console.log('');
    console.log('  ' + 'Last 20 Tweets For Search Topic: '.blue.underline.bold);
    console.log('');

    var i;
    for (i=0; i<20; i++) {
      if (tweets.statuses[i] !== undefined) {
        if (i%2 === 0) {
          console.log(`Tweet: `.magenta + tweets.statuses[i].text);
          console.log('Created: '.magenta + tweets.statuses[i].created_at);
          console.log('        ----------------');
        } else {
          console.log(`Tweet:   `.blue + tweets.statuses[i].text);
          console.log('Created: '.blue + tweets.statuses[i].created_at);
          console.log('        ----------------');
        }
      }
    }
    console.log('');
    console.log('--------------------------------'.blue.bold);
    console.log('');
  };

}

module.exports = new Tweety();
