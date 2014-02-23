define('ResumeView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/resume.html'
], function($, _, Backbone, tpl) {
  var ResumeView;

  ResumeView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

  return ResumeView;
});
