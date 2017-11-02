
function MovieThis() {

  this.keys = require('./keys.js');
  this.inquirer = require('inquirer');
  this.colors = require('colors');
  this.request = require('request');


  this.movieMe = function(liriApp) {
    var liriApp = liriApp
    var movie = this;

    liriApp.inquirer.prompt([
      {
        type: 'input',
        message: 'What movie would you like to search?',
        name: 'movieSearch'
      }
    ]).then(function(response){
      if (response.movieSearch === '' || response.movieSearch === ' ') {
        movie.request('http://www.omdbapi.com/?apikey=40e9cece&t=mr+nobody', function(error, response, body) {
          var mov = JSON.parse(body);
          if(error) throw error;
          movie.printMovie(mov, liriApp);
        });
      } else {
        movie.request('http://www.omdbapi.com/?apikey=40e9cece&t='+response.movieSearch, function(error, response, body) {
          var mov = JSON.parse(body);
          if(error) throw error;
          movie.printMovie(mov, liriApp);
        });
      }
    });
  };

  this.printMovie = function(mov, liriApp) {
    var mov = mov;
    var liriApp = liriApp;
    var movie = this;

    if (mov.Title) {
      console.log('---------------');
      console.log('Movie Title:             '.cyan.bold + mov.Title);
      console.log('Movie Release Year:      '.cyan.bold + mov.Year);
      if (mov.Ratings) {
        console.log('IMDB Rating:             '.cyan.bold + mov.Ratings[0].Value);
        if (mov.Ratings[1]) {
          console.log('Rotten Tomatoes Rating:  '.cyan.bold + mov.Ratings[1].Value);
        }
      }
      console.log('Production Country:      '.cyan.bold + mov.Country);
      console.log('Language:                '.cyan.bold + mov.Language);
      console.log('Plot:                    '.cyan.bold + mov.Plot);
      console.log('Actors:                  '.cyan.bold + mov.Actors);
      console.log('---------------');

      liriApp.chooseCommand();
    } else {
      console.log('');
      console.log('That movie cannot be found. Perhaps you mistyped it. Please retry');
      console.log('');
      movie.movieMe(liriApp);
    }
  };

}

module.exports = new MovieThis();
