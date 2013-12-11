var
    utils    = require('../../lib/utils'),
    _        = require('underscore'),
	sendmail = require('sendmail')(),
    NotFound = utils.NotFound,
    checkErr = utils.checkErr,
    log      = console.log,
    ConctactController;

ContactController = function(app,  config) {


  app.post('/contact_submit', function create(req, res, next) {
    // disallow other fields besides those listed below
	// 
	var from = req.body.contact_name;
	var email = req.body.contact_email;
	var subject = req.body.contact_subject;
	var content= req.body.contact_message;
	var errorhtml = "<div class='icon-exclamation-sign icon-large'></div>&nbsp;&nbsp;<span class='text-error'>";
	var successhtml = "<div class='icon-ok icon-large'></div>&nbsp;&nbsp;<span class='text-success'>";
	if(typeof from == "undefined" || from.length <=0 ){
		res.json({"html":errorhtml+"Error: A name is required.</span>"});
	}
	else if(typeof email == "undefined" || email.length <=0 ){
		res.json({"html":errorhtml+"Error: A reply email is required.</span>"});
	}
	else if(typeof subject == "undefined" || subject.length <=0 ){
		res.json({"html":errorhtml+"Error: A subject is required.</span>"});
	}
	else if(typeof content== "undefined" || content.length <=0 ){
		res.json({"html":errorhtml+"Error: A message is required.</span>"});
	}
	else{
		sendmail({
			from: from + "<" + email + ">",
			to: config.mail_to_email,
			subject: subject,
			content: content,
		  }, function(err, reply) {
			console.log(err && err.stack);
			console.dir(reply);
		}); 
		res.json({"html":successhtml+"Contact form submitted successfully.</span>"});
	  }

	  });


};

module.exports = ContactController;
