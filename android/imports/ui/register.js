import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './register.html';

Template.register.onRendered( function() {
  $( "#registerForm" ).validate();
});

Template.register.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    // Retrieve the input field values
    let email = template.find( '#email' ).value,
    firstName = template.find( '#firstName' ).value,
    lastName = template.find( '#lastName' ).value,
    password = template.find( '#password' ).value,
    cnp = template.find( '#cnp' ).value
    rh = template.find( 'input[name=rh]' ).value,

    Accounts.createUser({
     email: email,
     password: password,
     profile: {
       firstName: firstName,
       lastName: lastName,
       cnp: cnp,
       rh: rh,
       createdOn: new Date()
     }
   }, function(error) {
     if (error) {
      console.log("Error: " + error.reason);
    } else {
      FlowRouter.go('/');
    }
  });
    return false;
  },
  'click .back' (event) {
    FlowRouter.go('welcome');
  }
});
