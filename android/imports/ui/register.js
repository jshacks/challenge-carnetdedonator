import { Template } from 'meteor/templating';
import './register.html';

Template.register.onRendered( function() {
  $( "#registerForm" ).validate();
});

Template.register.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    
    let data = {
      emailAddress: template.find( '#lastName' ).value,
      password: template.find( '#password' ).value
    };
    console.log(data);
  },
  'click #registerSubmit' (event, template) {
    event.preventDefault();
    console.log(event);
    template.find('form').submit();
  },
  'click .back' (event) {
    FlowRouter.go('welcome');
  }
});