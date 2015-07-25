#!/usr/bin/env node


/**
 * 生成iflux的app
 */
var path = require('path');
var program = require('commander');
var colors = require('colors');
var _ = require('../lib/util');
var repo = path.join(__dirname, '../repo');


program.parse(process.argv);

var args = program.args;
if (args.length === 0) {
  console.log('please specify your app name'.red);
  return;
}

//app name
var appName = args[0];
var source = repo + '/react-starter/apps/hello';
var dest = process.cwd() + '/apps/' + appName;



//copy
_.promiseExists(dest)
  .then(function(exists) {
    if (exists) {
      console.log(('Oops, ' + appName + ' was existsted').red);
      return;
    }
    _.copyDir(source, dest).then(ok);
  });


//ok
function ok() {
  console.log(('create ' + appName + ' successfully').green);
}
