/**
 * Jake is a JavaScript build tool for Node.js
 * http://howtonode.org/intro-to-jake
 * https://github.com/mde/jake
 *
 * To find out the available tasks for Jake run:
 * jake -T
 *
 * To run a task do:
 * jake db:reset
 *
 * To run a task with params do:
 * jake db:populate[20]
 */
var 
    colors       = require('colors'),
    assetBuilder = require('./lib/assetBuilder'),
    log          = console.log,
    JK           = {};

// desc('Initialize stuff.');
task('init', [], function() {
  JK.utils = JK.utils || require('./lib/utils');
  // make sure the configs are loaded only once
  if (!JK.config) {
    JK.utils.loadConfig(__dirname + '/config', function(config) {
      JK.config = config;
      complete();
    });
  }
}, { async: true });

namespace('app', function() {

  desc('Compress JS & CSS and make 1 JS && 1 CSS file. Run this before deploying to production.');
  task('assets', [], function(done) {
    assetBuilder(function() {
      log('- packed up JS & CSS files'.yellow);
      complete();
    });
  }, { async: true });

});

