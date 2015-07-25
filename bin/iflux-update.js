#!/usr/bin/env node

/**
 * update repository
 */
var path = require('path');
var colors = require('colors');
var program = require('commander');
var _ = require('../lib/util');
var repo = path.join(__dirname, '../repo');

console.log('update react-starter...'.green);


/**
 * 直接git pull
 */
_.promiseProcess('cd ' + repo + '/react-starter' + ' && git pull origin master')
  .then(function() {
    console.log('update successfully.'.green);
  });
