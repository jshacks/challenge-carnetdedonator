if (Meteor.isServer) {
  Meteor.methods({
    checkVisits: function () {
      this.unblock();
      return Meteor.http.call("GET", "http://api.com/search.json?q=history");
    },
    checkAlerts: function () {
      this.unblock();
      return Meteor.http.call("GET", "http://api.com/search.json?q=history");
    }
  });
}