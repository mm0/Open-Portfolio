define('Contact', [
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var contact;


  contact = Backbone.Model.extend({
//    idAttribute: "_id",
    urlRoot: "/contact",
    // set defaults for checking existance in the template for the new model
    defaults: {
      name    : '',
      email   : '',
      subject : '',
      message : ''
    }
 /* ,
    validate: function(attrs) {
      var fields, i, len, nameLen, compLen, errors = {};

      if (!attrs._silent) {
        // check required fields
        fields = ['name', 'email', 'subject', 'message'];
        for (i = 0, len = fields.length; i < len; i++) {
          if (!attrs[fields[i]]) {
            errors[fields[i]] = fields[i] + ' required';
          }
        }

        // check valid name
        nameLen = (attrs.name) ? attrs.name.length : null;
        if (nameLen < 2 || nameLen > 100) {
          errors.name = "invalid name";
        }

        // check valid subject 
        compLen = (attrs.subject) ? attrs.subject.length : null;
        if (!compLen || (compLen < 7 || compLen > 100)) {
          errors.subject= "invalid subject";
        }

        // check valid email
        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(attrs.email))) {
          errors.email = "invalid email";
        }

        if (_.keys(errors).length) {
          return {
            errors: errors
          };
        }
      }

    }
*/
  });


  return contact;
});



