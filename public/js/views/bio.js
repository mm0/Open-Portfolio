define('BioView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/bio.html'
], function($, _, Backbone, tpl) {
  var BioView;

  BioView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
      $(this.el).html(this.template());
	  console.log(this);
      return this;
    }
  });

  return BioView;
});
