#!/usr/bin/env node

/**
 * 生成iflux项目
 */

var fs = require('fs');
var path = require('path');
var fsx = require('fs-extra');
var colors = require('colors');
var program = require('commander');
var _ = require('../lib/util');
var repo = path.join(__dirname, '../repo');


program
  .parse(process.argv);

var args = program.args;
if (args.length == 0) {
  console.log('please check you project name. you must specify your project name'.red);
  return;
}

var projName = args[0];
console.log(('start new project ' + projName).rainbow);

//是否已经存在
var isExist = fs.existsSync(process.cwd() + '/' + projName);
if (isExist) {
  console.log(('Oops, ' + projName + ' was exists').red);
  return;
}


//判断repo目录中是不是已经git了react-starter
_.promiseExists(repo + '/react-starter')
  //clone react-starter 如果已经clone则跳过
  .then(cloneReactStarter)
  //拷贝repo到目标目录
  .then(copyReactStarter)
  //删除.git
  .then(deleteGitDir)
  //提示安装依赖
  .then(ok);


/**
 * 是不是需要clone远程的一份react-starter
 * exists,是repo目录下是否存在react-starter的返回值
 * exists为true直接去clone，
 * exists为false返回空promise，为了链式下去
 */
function cloneReactStarter(exists) {
  if (!exists) {
    console.log('git clone https://github.com/hufeng/react-starter.git'.green);
    return _.promiseProcess('cd ' + repo + ' && git clone https://github.com/hufeng/react-starter.git');
  } else {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
}


/**
 * 将ReactStarter模板项目拷贝到创建项目的当前目录
 */
function copyReactStarter() {
  var dest = process.cwd() + '/' + projName;
  return _.copyDir(repo + '/react-starter', dest);
}


function deleteGitDir() {
  var dest = process.cwd() + '/' + projName + '/.git';
  return _.removeDir(dest);
}

function ok() {
  console.log(("yeah, you can cd " + projName + ' and npm install').yellow);
}
