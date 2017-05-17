Template.home.onRendered(function(){
  $(document).foundation();
});

Comments.ui.config({
  template: 'foundation'
});

Comments.config({
  rating: 'likes-and-dislikes'
});

Meteor.subscribe('status');
Meteor.subscribe('images');
