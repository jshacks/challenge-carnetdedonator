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

  if (Meteor.isCordova) {
    window.alert = navigator.notification.alert;
  }

  Push.addListener('message', function(notification) {
    // Called on every message
    console.log(JSON.stringify(notification))

    function alertDismissed() {
      // NotificationHistory.update({_id: notification.payload.historyId}, {
      //   $set: {
      //     "recievedAt": new Date()
      //   }
      // });
    }
    alert(notification.message, alertDismissed, notification.payload.title, "Ok");
  });
});
