// import '/imports/ui/body.js';
import '/imports/startup/client';

Meteor.startup(() => {
  Push.Configure({
    android: {
      senderID: 602945370675,
      alert: true,
      badge: true,
      sound: true,
      vibrate: true,
      clearNotifications: true
      // icon: '',
      // iconColor: ''
    }
  });
});
