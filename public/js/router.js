define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'HomeView',
  'HeaderView',
  'AboutView',
  'ContactView',
  'ResumeView',
  'PortfolioView',
  'ProjectsView',
  'LinksView',
], function($, _, Backbone, HomeView, HeaderView, AboutView, ContactView,ResumeView, PortfolioView, ProjectsView, LinksView) {
  var AppRouter, initialize;

  AppRouter = Backbone.Router.extend({
    routes: {
      ''            		: 'home',
      'home'        		: 'home',
      'about'         		: 'about',
      'contact'         	: 'contact',
      'resume'         		: 'resume',
      'portfolio'   		: 'portfolio',
      'links'       		: 'links',
	  'projects/:project' 	: 'showProject',
      // any other action defaults to the following handler
      '*actions'    		: 'defaultAction'
    },
    initialize: function() {
      this.headerView = new HeaderView();
      // cached elements
      this.elms = {
        'page-content': $('.page-content'),
	  	'container' : $('#center'),
	  	'all'	: $("*")
      };
      $('header').hide().html(this.headerView.render().el).fadeIn('slow');
	  $("nav.navbar-collapse li").live("click",function(){$("nav.navbar-collapse").collapse("toggle");});
      $('footer').fadeIn('slow');
    },
    home: function() {
      this.headerView.select('home-menu');
	  $("nav.navbar-collapse").collapse("hide");

      if (!this.homeView) {
        this.homeView = new HomeView();
      }
	  this.elms['page-content'].addClass("home");
	  this.elms['container'].addClass("home");
      this.elms['page-content'].html(this.homeView.render().el);
	   $(document).ready(function(){
		       $('.carousel').carousel();
		 });
    },
    about: function() {
      this.headerView.select('about-menu');

      if (!this.aboutView) {
        this.aboutView = new AboutView();
      }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.aboutView.render().el);
    },
    contact: function() {
      this.headerView.select('contact-menu');

      if (!this.contactView) {
        this.contactView = new ContactView();
      }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.contactView.render().el);
    },
    resume: function() {
      this.headerView.select('resume-menu');

      if (!this.resumeView) {
        this.resumeView = new ResumeView();
      }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.resumeView.render().el);
    },
    portfolio: function() {
      this.headerView.select('portfolio-menu');

      if (!this.portfolioView) {
        this.portfolioView = new PortfolioView();
      }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.portfolioView.render().el);
    },
    showProject: function(project) {
      this.headerView.select('portfolio-menu');
	  //commented since might have loaded a different project already
      //if (!this.projectsView) {
        this.projectsView = new ProjectsView(project);
    //  }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.projectsView.render().el);
    },
    links: function() {
      this.headerView.select('links-menu');

      if (!this.linksView) {
        this.linksView = new LinksView();
      }
	  this.elms['all'].removeClass("home");
      this.elms['page-content'].html(this.linksView.render().el);
    },
    defaultAction: function(actions) {
      // No matching route, log the route?
    }
  });

  return AppRouter;
});
