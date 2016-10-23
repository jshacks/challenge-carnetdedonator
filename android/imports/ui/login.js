import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './login.html';

Template.login.onRendered( function() {
  $( "#loginForm" ).validate();
});
Template.login.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    
    let data = {
      email: template.find( '#email' ).value,
      password: template.find( '#password' ).value
    };
    Meteor.loginWithPassword(data.emailAddress, data.password, function(Error) {
      if (Error) {
        console.log(Error.reason);
      } else {
        console.log('yuhuu');
        FlowRouter.go('/');
      }
    })
    console.log(data);
  },
  'click #loginSubmit' (event, template) {
    event.preventDefault();
    console.log(event);
    template.find('form').submit();
  },
  'click .back' (event) {
    FlowRouter.go('welcome');
  }
});