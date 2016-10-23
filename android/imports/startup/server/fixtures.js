import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Donations } from '../../api/donations/donations.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    const data = [
      {
        name: 'Laura Ionescu',
        cnp: '2880208123412',
        email: 'laura.ionescu@mailinator.com',
        bloodType: '01',
        rh: '+',
        latitude: 44.4268,
        longitude: 26.1025,
        donations: [{
          date: new Date(2016, 0, 15),
          center: 'Centrul de Transfuzie Sanguină București',
          address: 'Str. C.Caracaş nr. 2-8'
        }, {
          date: new Date(2016, 3, 23),
          center: 'Institutul Clinic Fundeni',
          address: 'Calea București 258'
        }, {
          date: new Date(2016, 7, 31),
          center: 'Spitalul Universitar de Urgență',
          address: 'Splaiul Independenței nr. 69'
        }],
      },
      {
        name: 'Vlad Bărbulescu',
        cnp: '1750208432135',
        email: 'vladb@mailinator.com',
        bloodType: 'AB4',
        rh: '+',
        latitude: 44.4268,
        longitude: 26.1025,
        donations: [{
          date: new Date(2015, 10, 8),
          center: 'Spitalul Militar',
          address: 'Str. Mircea Vulcănescu 88'
        },{
          date: new Date(2016, 1, 8),
          center: 'Centrul de Transfuzie Sanguină București',
          address: 'Str. C.Caracaş nr. 2-8'
        }, {
          date: new Date(2016, 5, 1),
          center: 'Spitalul Universitar de Urgență',
          address: 'Splaiul Independenței nr. 69'
        }, {
          date: new Date(2016, 9, 22),
          center: 'Institutul Clinic Fundeni',
          address: 'Calea București 258'
        }],
      }
    ];

    let timestamp = (new Date()).getTime();

    data.forEach((user) => {
      const userId = Accounts.createUser({
        name: user.name,
        cnp: user.cnp,
        email: user.email,
        bloodType: user.bloodType,
        rh: user.rh,
        latitude: user.latitude,
        longitude: user.longitude
      });

      user.donations.forEach((donation) => {
        Donations.insert({
          userId: userId,
          date: donation.date,
          center: donation.center,
          address: donation.address,
          createdAt: new Date(timestamp)
        });

        timestamp += 1;
      });
    });
  }
});
