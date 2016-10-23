import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Locations } from '../api/locations/locations.js';


//Template.body.onCreated(function bodyOnCreated() {
//  this.state = new ReactiveDict();
//  Meteor.subscribe('alerts');
//});

import './locations.html';


Template.locations.helpers({
 locations() {
   return Locations.find({});
 },
});
