#!/usr/bin/env node
var big = require('big');
big.spawn('website', {
  site: {
    domain: "marak.com",
    root: __dirname + "/public",
    view: __dirname + "/view"
  }
});