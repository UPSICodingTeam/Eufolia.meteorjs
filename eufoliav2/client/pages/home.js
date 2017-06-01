Template.home.onRendered(function(){
  $(document).foundation();
});

Comments.ui.config({
  template: 'foundation',
  defaultAvatar:'https://api.adorable.io/avatars/200'
});

Comments.config({
  rating: 'likes-and-dislikes'
});
