define('ProjectsView', [
  'jquery',
  'underscore',
  'backbone',
  'text!templates/vinport.html',
  'text!templates/wondermode.html',
  'text!templates/babeebook.html',
  'text!templates/gatherandsave.html',
  'text!templates/mytowns.html',
  'text!templates/boothify.html',
  'text!templates/apibuilder.html',
  'text!templates/dbautobackup.html',
  'text!templates/googledrive.html',
  'text!templates/prolific.html',
  'text!templates/projectnotfound.html',
  'text!templates/muby.html',
  'text!templates/queryengine.html'
], function($, _, Backbone, vinport,wondermode,babeebook,gatherandsave,mytowns,boothify,apibuilder,dbautobackup,googledrive,prolific,projectnotfound,muby,queryengine) {
  var ProjectsView;

  ProjectsView = Backbone.View.extend({
    initialize: function(template) {
					var to_use;
					switch(template){
						case "wondermode" : 
							to_use = wondermode;
							break;
						case "vinport" : 
							to_use = vinport;
							break;
						case "babeebook" : 
							to_use = babeebook;
							break;
						case "gatherandsave" : 
							to_use = gatherandsave;
							break;
						case "mytowns" : 
							to_use = mytowns;
							break;
						case "boothify" : 
							to_use = boothify;
							break;
						case "googledrive" : 
							to_use = googledrive;
							break;
						case "prolific" : 
							to_use = prolific;
							break;
						case "apibuilder" : 
							to_use = apibuilder;
							break;
						case "dbautobackup" : 
							to_use = dbautobackup;
							break;
						case "muby" : 
							to_use = muby;
							break;
						case "queryengine" : 
							to_use = queryengine;
							break;
						default :
							to_use = projectnotfound;
					}
      this.template = _.template(to_use);
    },
    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

  return ProjectsView;
});
