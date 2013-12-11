var 
    utils    = require('../../lib/utils'),
    _        = require('underscore'),
    NotFound = utils.NotFound,
    checkErr = utils.checkErr,
    log      = console.log,
    ProjectsController;

ProjectsController = function(app, config) {


  app.get( '/projects', function index(req, res, next) {

  });

  app.get('/projects/:id', function show(req, res, next) {
	  //req.params.id
  });

  app.post('/projects', function create(req, res, next) {
		//res.setHeader('Location', loc);
        //res.json({}, 201);
  });

  app.put('/projects/:id', function update(req, res, next) {
	  //req.params.id
  });

  app.del('/projects/:id', function destroy(req, res, next) {
	  //req.params.id
  });

};

module.exports = ProjectsController;
