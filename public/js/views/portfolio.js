define('PortfolioView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/portfolio.html'
], function($, _, Backbone, tpl) {
  var PortfolioView;

  PortfolioView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

  return PortfolioView;
});
