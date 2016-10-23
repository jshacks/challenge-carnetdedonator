import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './welcome.html';

Template.welcome.events({

  'click .toRegister' () {
    FlowRouter.go('register');
  }
});