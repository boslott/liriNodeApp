
function DoWuh() {

  this.fs = require('fs');
  this.log = require('./log.js');


  this.doWhatSays = function(liriApp) {
    var liriApp = liriApp;
    var command = '';
    var search = '';
    var log = this.log;

    this.fs.readFile('random.txt', 'utf-8', (error, data) => {
      if (error) throw error;

      dataStr = data.split(',');
      command = dataStr[0];
      search = dataStr[1];

      switch(command) {
        case 'my-tweets':
        console.log ('');
        console.log('From The random.txt File:'.underline.bold);
        console.log('');
        console.log('Command:      ' + command);
        console.log('Search:       ' + search);
        console.log('');
        console.log('LIRI Results: ');
        console.log('');
          liriApp.tweetifyMe(liriApp, search);
          break;
        case 'spotify-this-song':
          console.log ('');
          console.log('From The random.txt File:'.underline.bold);
          console.log('');
          console.log('Command:      ' + command);
          console.log('Search:       ' + search);
          console.log('');
          console.log('LIRI Results: ');
          console.log('');
          liriApp.spotMe(liriApp, search);
          break;
        case 'movie-this':
        console.log ('');
        console.log('From The random.txt File:'.underline.bold);
        console.log('');
        console.log('Command:      ' + command);
        console.log('Search:       ' + search);
        console.log('');
        console.log('LIRI Results: ');
        console.log('');
        liriApp.movieMe(liriApp, search);
          break;
        default:
          console.log('Default has occured');
          break;
      }

      log.logAction('do-what-it-says', search, command);

    });




    // console.log('');
    // console.log('This feature is coming soon. Please choose a different command from below:'.red.bold);
    // console.log('');
    // liriApp.chooseCommand();
  };

}

module.exports = new DoWuh();
