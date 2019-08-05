const fs = require('fs');
const pwd = require('pwd');

module.exports = function(fileName) {

  const path = pwd();

  fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log(data);
  })
}
