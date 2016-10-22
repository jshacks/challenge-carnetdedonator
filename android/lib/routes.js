FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/register', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'register' } ); 
  },
  name: 'register'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'login' } ); 
  },
  name: 'login'
});

FlowRouter.route( '/welcome', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'welcome' } ); 
  },
  name: 'welcome'
});