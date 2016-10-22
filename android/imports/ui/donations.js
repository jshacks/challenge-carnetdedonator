import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Donations } from '../api/donations.js';

import './donations.html';

Template.donations.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('donations');
});
