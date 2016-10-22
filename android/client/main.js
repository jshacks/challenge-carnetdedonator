import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

//invoke the server method
if (Meteor.isClient) {
  Meteor.call("checkVisits", function(error, results) {
    console.log(results.content); //results.data should be a JSON object
  });
  Meteor.call("checkAlerts", function(error, results) {
    console.log(results.content); //results.data should be a JSON object
  });
}

