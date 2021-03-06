import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Alerts } from '../api/alerts/alerts.js';


//Template.body.onCreated(function bodyOnCreated() {
//  this.state = new ReactiveDict();
//  Meteor.subscribe('alerts');
//});

import './alerts.html';


Template.alerts.helpers({
 alerts() {
   return Alerts.find({});
 },
 statusClass() {
  console.log(this.status);
  return this.status === 'Activa' ? 'active' : 'inactive';
 }
});
