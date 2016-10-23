import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Donations } from '../api/donations/donations.js';


//Template.body.onCreated(function bodyOnCreated() {
//  this.state = new ReactiveDict();
//  Meteor.subscribe('donations');
//});

import './donations.html';


Template.donations.helpers({
 donations() {
   return Donations.find({});
 },
});
