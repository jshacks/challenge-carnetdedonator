import { Meteor } from 'meteor/meteor';

import { Donations } from '../donations.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('donations', function donationsPublication() {
    return Donations.find({owner: this.userId});
  });
}
