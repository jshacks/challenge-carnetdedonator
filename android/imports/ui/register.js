import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './register.html';

Template.register.onRendered( function() {
  $( "#registerForm" ).validate();
});

Template.register.events({
  // 'submit form' ( event, template ) {
  //   event.preventDefault();
    
  //   let user = {
  //     email: template.find( '#email' ).value,
  //     password: template.find( '#password' ).value
  //   };

  //   Accounts.createUser( user, ( error ) => {
  //     if ( error ) {
  //       Bert.alert( error.reason, 'danger' );
  //     } else {
  //       console.log(user);
  //     }
  //   });
  // },
  'submit form' ( event, template ) {
    console.log(event);
    event.preventDefault();
    console.log(template);
     // Retrieve the input field values
     let email = template.find( '#email' ).value,
         firstName = template.find( '#firstName' ).value,
         lastName = template.find( '#lastName' ).value,
         password = template.find( '#password' ).value,
         cnp = template.find( '#cnp' ).value
         // rh = template.find( 'input[name=rh]' ).value,
         // profilePic = Session.get('profilePicURL');
    // Trim Helper
    let trimInput = function(val) {
       return val.replace(/^\s*|\s*$/g, "");
    };
    email = trimInput(email);

    // If validation passes, supply the appropriate fields to the
    // Accounts.createUser function.
       Accounts.createUser({
           email: email,
           password: password,
           firstName: firstName,
           lastName: lastName,
           cnp: cnp,
           // rh: rh,
           // profilePic: profilePic,
           createdOn: new Date()
      }, function(error) {
         if (error) {
            console.log("Error: " + error.reason);
         } else {
          console.log('wtf');
            FlowRouter.go('/');
         }
      });
    return false;
  },
  'click .back' (event) {
    FlowRouter.go('welcome');
  }
});

// Template.register.events({
//     'submit form': function(event){
//         event.preventDefault();
//         var email = $('[name=email]').val();
//         var password = $('[name=password]').val();
//         Accounts.createUser({
//             email: email,
//             password: password
//         });
//     }
// });
