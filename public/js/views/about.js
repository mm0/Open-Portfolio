define('AboutView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about.html'
], function($, _, Backbone, tpl) {
  var AboutView;

  AboutView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
      $(this.el).html(this.template());
	  console.log(this);
      return this;
    }
  });

  return AboutView;
});
