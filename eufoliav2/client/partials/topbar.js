Template.topbar.events({
  'click .hz-logout-btn': ()=> {
    AccountsTemplates.logout();
  }
});

Template.topbar.helpers({
  author: function(){
    return Meteor.user();
  }
});
