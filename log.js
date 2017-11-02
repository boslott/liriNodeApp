
function AppLog() {

  this.fs = require('fs');

  this.logAction = function(type, search, command) {
    var type = type;
    var search = search;
    var command = command;

    if (command === undefined) {
      data = 'Command: ' + type + ', Search: ' + search + '\n';
    } else {
      data = 'Command: ' + type + ', Search: ' + search + ', LIRI Command: ' + command + '\n';
    }

    this.fs.appendFile('log.txt', data, 'utf-8', (error) => {
      if(error) throw error;
    });
  };

}

module.exports = new AppLog();
