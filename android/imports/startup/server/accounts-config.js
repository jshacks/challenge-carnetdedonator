Accounts.onCreateUser(function(options, user) {
  // We're enforcing at least an empty profile object to avoid needing to check
  // for its existence later.
  user.profile = options.profile ? options.profile : {};
  console.log('a trecut si pe aici');
   // Use provided profile in options, or create an empty object
   console.log(user);
   return user;
});