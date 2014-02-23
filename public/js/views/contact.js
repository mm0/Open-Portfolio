define('ContactView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact.html',
], function($, _, Backbone, tpl) {
  var ContactView;

  ContactView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(tpl);
    },
    render: function() {
				var that = this;
      $(this.el).html(this.template());
		$(function(){
			$("#contact_submit").live("click",function(e){
				e.preventDefault(); // Prevents the page from refreshing
				var $this = $("#contact_form"); // `this` refers to the current form element
				$.post(
					$this.attr("action"), // Gets the URL to sent the post to
					$this.serialize(), // Serializes form data in standard format
					function(data) { 
						$("#contactModal .modal-body").html(data.html);
						$(".ajax-loader").attr("style","");
						//$("#contactModal").modal("show");
		// code to handle response  
		 			},
					"json" // The format the response should be in
				);
				return false;
			});
		});
      return this;
    }
  });

  return ContactView;
});
