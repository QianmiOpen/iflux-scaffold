#!/usr/bin/env node


/**
 * iflux scaffold
 */
var colors = require('colors');
var figlet = require('figlet');
var program = require('commander');

//iflux命令时，显示iflux的ascii font
if (process.argv.length === 2) {
  //figlet
  console.log(figlet.textSync('iflux', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }).rainbow);
}

//commander
program
  .version(require('../package.json').version)
  .command('new [project-name]', 'create a new project')
  .command('newapp [app-name]', 'create a new app')
  .command('update', 'sync react starter')
  .parse(process.argv);


  console.log('hello');
