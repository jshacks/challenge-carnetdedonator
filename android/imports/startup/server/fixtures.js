import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Donations } from '../../api/donations/donations.js';
import { Alerts } from '../../api/alerts/alerts.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Donations.find().count() === 0) {
    var now = new Date().getTime();

    var bogdanId = Meteor.users.insert({
      profile: { name: 'Bogdan Ghervan', gender: 'm', location: 'Bucuresti'  }
    });
    var bogdan = Meteor.users.findOne(bogdanId);

    Donations.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 10 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890123'
    });
    Donations.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 2 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890124'
    });
    Donations.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 5 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890125'
    });
  }

  if (Alerts.find().count() === 0) {
    var now = new Date().getTime();

    var bogdanId = Meteor.users.insert({
      profile: { name: 'Bogdan Ghervan', gender: 'm', location: 'Bucuresti'  }
    });
    var bogdan = Meteor.users.findOne(bogdanId);

    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 10 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      bloodTypes: [ {
          bloodType: '01',
          rh: 'pozitiv'
        },
        {
          bloodType: 'A2',
          rh: 'negativ'
        },
        {
          bloodType: 'AB4',
          rh: 'pozitiv'
        }
      ],
      code: '1234567890123'
    });
    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 2 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      bloodTypes: [ {
          bloodType: '01',
          rh: 'pozitiv'
        },
        {
          bloodType: 'A2',
          rh: 'negativ'
        }
      ],
      city: 'Bucuresti',
      code: '1234567890124'
    });
    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: bogdan._id,
      date: new Date(now - 5 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      bloodTypes: [ {
          bloodType: '01',
          rh: 'pozitiv'
        },
        {
          bloodType: 'B3',
          rh: 'negativ'
        },
        {
          bloodType: 'AB4',
          rh: 'pozitiv'
        }
      ],
      code: '1234567890125'
    });
  }
});
