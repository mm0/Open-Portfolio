define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router',
  'bootstrap','bootstrap-lightbox'
], function($, _, Backbone, Router,lightbox) {

  function initialize() {
    var app = new Router();

    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
