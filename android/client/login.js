Template.login.onRendered( function() {
  $( "#loginForm" ).validate();
});
Template.login.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    
    let data = {
      emailAddress: template.find( '#email' ).value,
      password: template.find( '#password' ).value
    };
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