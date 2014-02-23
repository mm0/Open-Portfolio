define('LinksView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/links.html'
], function($, _, Backbone, tpl) {
  var LinksView;

  LinksView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

  return LinksView;
});
