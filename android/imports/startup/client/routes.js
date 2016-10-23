import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/body.js';
import '../../ui/body.html';
import '../../ui/donations.js';
import '../../ui/alerts.js';
import '../../ui/register.js';
import '../../ui/login.js';
import '../../ui/welcome.js';


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
