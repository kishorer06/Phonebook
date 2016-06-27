User= {
isLoggedOut: function(){
  return ! User.isLoggedIn();
},
isLoggedIn: function(){
  return !! Meteor.userId();
}, 
};