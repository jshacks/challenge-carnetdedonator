import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Donations = new Mongo.Collection('donations');

// Donations.schema = new SimpleSchema({
//   userId: {type: String, regEx: SimpleSchema.RegEx.Id},
//   date: {type: Date},
//   address: {type: String},
//   center: {type: String}
// });