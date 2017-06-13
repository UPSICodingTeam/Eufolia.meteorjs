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

Template.home.helpers({
  author: function(){
    return Meteor.user();
  }
});

Template.home.events({
  'click .resend-verification-link' (event, template) {
    Meteor.call('sendVerificationLink', (error, response) =>{
      if (error) {
        Notifications.warn( error.reason, 'Something\'s fishy going on here. Try again. If problem persist, contact Sherlock Holmes (read:our support team).');
      } else {
        let email = Meteor.user().emails[0].address;
        Notifications.success('Verification sent to ${ email }!', 'You should check your inbox now.');
      }
    });
  }
});
