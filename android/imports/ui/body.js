import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';

// Initialize app
var myApp = new Framework7({
  modalTitle: 'Carnet de Donator',
  // Enable Material theme
  material: true,
  domCache: true //enable inline pages
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
});

// Template.main.onCreated(function() {
//   this.visitsHistory = new ReactiveVar;
//   Meteor.call('checkVisits', function(error, response){
//     this.visitsHistory.set(response.content);
//   });

//   this.alertsHistory = new ReactiveVar;
//   Meteor.call('checkAlerts', function(error, response){
//     this.alertsHistory.set(response.content);
//   });
// });

Template.main.helpers({
  visitsHistory: function() {
    var result = ReactiveMethod.call('checkVisits');
    return result.content;
  },
  alertsHistory: function() {
    var result = ReactiveMethod.call('checkAlerts');
    return result.content;
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


