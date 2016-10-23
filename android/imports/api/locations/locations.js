import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Locations = new Mongo.Collection('locations');

// Donations.schema = new SimpleSchema({
//   userId: {type: String, regEx: SimpleSchema.RegEx.Id},
//   date: {type: Date},
//   address: {type: String},
//   center: {type: String}
// });