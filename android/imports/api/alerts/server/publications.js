import { Meteor } from 'meteor/meteor';

import { Alerts } from '../alerts.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('alerts', function alertsPublication() {
    return Alerts.find({owner: this.userId});
  });
}
