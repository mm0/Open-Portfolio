requirejs.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
	'lightbox': {
		deps: ['jquery'],
		exports : '$'
	}
  },
  /**
   * HACK:
   * Modified Underscore and Backbone to be AMD compatible (define themselves)
   * since it didn't work properly with the RequireJS shim when optimizing
   */
  paths: {
    'text'             : 'lib/text',
    'jquery'           : 'lib/jquery',
    'underscore'       : 'lib/underscore-amd',
    'backbone'         : 'lib/backbone-amd',
  //  'bootstrap'        : 'lib/bootstrap',
    'bootstrap-lightbox'        : 'lib/bootstrap-lightbox',
    'moment'           : 'lib/moment',
    'Mediator'         : 'lib/mediator',
    'App'              : 'app',
    'Router'           : 'router',
    'HomeView'         : 'views/home',
    'AboutView'        : 'views/about',
    'ContactView'      : 'views/contact',
    'ResumeView'       : 'views/resume',
    'PortfolioView'    : 'views/portfolio',
    'LinksView'        : 'views/links',
    'HeaderView'       : 'views/header',
  }
});

require(['App'], function(App, Contact) {
  App.initialize();
});
