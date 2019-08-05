// eslint-disable-next-line no-unused-vars

//IMPORTS
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

// Output a prompt
process.stdout.write('prompt >' );

// Input
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === 'ls') ls();
  if (cmd[0] === 'pwd') pwd();
  if (cmd[0] === 'cat') cat(cmd[1]);


});
