#!/usr/bin/env node


/**
 * iflux scaffold
 */
var colors = require('colors');
var figlet = require('figlet');
var program = require('commander');

//figlet
console.log(figlet.textSync('iflux', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}).rainbow);

//commander
program
  .version(require('../package.json').version)
  .command('new [project-name]', 'create a new project')
  .command('newapp [app-name]', 'create a new app')
  .command('run', 'run current project')
  .command('update', 'sync react starter')
  .parse(process.argv);
