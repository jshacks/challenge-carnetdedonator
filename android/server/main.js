import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   console.log(user);
   return user;
});

import '../imports/startup/server';

Meteor.startup(() => {

  // TODO: move this someplace else
  Push.Configure({
    gcm: {
      apiKey: 'AIzaSyC_dCmhKhG8ecCMCfJfV0sAA2FgXH7ESJU',
      projectNumber: 602945370675
    }
    // production: true,
    // 'sound' true,
    // 'badge' true,
    // 'alert' true,
    // 'vibrate' true,
    // 'sendInterval': 15000, Configurable interval between sending
    // 'sendBatchSize': 1, Configurable number of notifications to send per batch
    // 'keepNotifications': false,
//
  });

});

