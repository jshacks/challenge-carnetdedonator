import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Donations = new Mongo.Collection('donations');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('donations', function donationsPublication() {
    return Donations.find();
  });
}
