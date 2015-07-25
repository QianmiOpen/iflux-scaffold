var fs = require('fs');
var exec = require('child_process').exec;
var fsx = require('fs-extra');


var _ = module.exports = {};


/**
 * promise child_process.exec
 */
_.promiseProcess = function(command) {
  return new Promise(function(resolve, reject) {
    exec(command, function(err, stdout, stderr) {
      if (err != null) {
        console.log(err);
        return reject(err);
      }
      console.log(stdout);
      resolve(stdout);
    })
  });
};


/**
 * promise fs.exists
 */
_.promiseExists = function(file) {
   return new Promise(function(resolve, reject) {
     fs.exists(file, function(exists) {
       resolve(exists);
     })
   });
 };


/**
 * promise fsx.copy
 */
_.copyDir = function(source, dest) {
  return new Promise(function(resolve, reject) {
    fsx.copy(source, dest, function(err) {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve();
    });
  });
};


/**
 * promise fsx.remove
 */
_.removeDir = function(dest) {
  return new Promise(function(resolve, reject) {
    fsx.remove(dest, function(err) {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve();
    });
  });
};
