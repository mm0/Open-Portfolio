var connect        = require('connect'),
    express        = require('express'),
    connectTimeout = require('connect-timeout'),
    gzippo         = require('gzippo'),
    utils          = require('./lib/utils'),
    EventEmitter   = require('events').EventEmitter,
    AppEmitter     = new EventEmitter(),
    app            = express(),
    log            = console.log,
	config		   = require('./config/config.json');


function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something blew up!' });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

//utils.loadConfig(__dirname + '/config', function(config) {
  app.use(function(req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
  });
  app.configure(function() {
  app.use(gzippo.compress());
  app.use(express.favicon());
  app.use(express['static'](__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(clientErrorHandler);
  app.use(errorHandler);
  app.use(connectTimeout({
	time: parseInt(config.REQ_TIMEOUT, 10)
  }));


  // register models
 // require('./app/models/client')(mongoose);

  // register controllers
  config.controllers.forEach(function(controller) {
    require(config.directories.controllers + 
		controller + config.controller_suffix)(app, config);
  });

  app.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
      log('Address in use, retrying...');
      setTimeout(function () {
        app.close();
        app.listen(config.PORT, function() {
          app.serverUp = true;
        });
      }, 1000);
    }
  });

  if (!module.parent) {
    app.listen(config.PORT, function() {
      app.serverUp = true;
    });
    log('Express server listening on port %d', config.PORT);
  }

  AppEmitter.on('checkApp', function() {
    AppEmitter.emit('getApp', app);
  });

});

/**
 * export AppEmitter for external services so that the callback can execute
 * when the app has finished loading the configuration
 */
 process.once('SIGUSR2', function () {
	 console.log('siggy');
		   var build = require (config.build_script);
		   build(function(){
		       process.kill(process.pid, 'SIGUSR2'); 
			     });
 });
module.exports = AppEmitter;
