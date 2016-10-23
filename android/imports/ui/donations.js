import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Donations } from '../api/donations.js';


//Template.body.onCreated(function bodyOnCreated() {
//  this.state = new ReactiveDict();
//  Meteor.subscribe('donations');
//});

import './donations.html';

Template.donations.onRender({
  donationsList() { 
      return [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
      ];
  }
});


//Template.body.helpers({
//  donations() {
//    return Donations.find({});
//  },
//});
