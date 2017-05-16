Template.home.onRendered(function(){
  $(document).foundation();
});

Meteor.subscribe('status');
Meteor.subscribe('images');
