#!/usr/bin/env node
var fs = require('fs')

var args = process.argv;
args.shift();
args.shift();

(function next() {
  if (args.length) {
    fs.createReadStream(args.shift())
    .on('close', next)
    .pipe(process.stdout)
  } else if (!process.stdin.isTTY) {
    process.stdin.pipe(process.stdout)
  }
})();
