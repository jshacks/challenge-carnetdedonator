import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   console.log(user);
   return user;
});

Meteor.startup(() => {
  // code to run on server at startup
});
