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
        Bert.alert( 'Incearca din nou!', 'danger', 'growl-top-right' );

        console.log(Error.reason);
      } else {
        // console.log('yuhuu');
        Bert.alert( 'Te-ai logat!', 'success', 'growl-top-right' );
        FlowRouter.go('/main');
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
    FlowRouter.go('/');
  }
});