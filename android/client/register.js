import { Template } from 'meteor/templating';

// Template.register.onRendered(function () {
//   $('#registerForm').validate();
//   console.log($('#registerForm'));
// });
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
  }
});