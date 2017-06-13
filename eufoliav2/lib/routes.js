//Routing logic: https://blog.tableflip.io/flow-router-some-useful-patterns/
function checkLoggedIn(ctx, redirect){
  if(!Meteor.userId()){
    redirect('/')
  }
}

function redirectIfLoggedIn(ctx, redirect){
  if(Meteor.userId()){
    redirect('/home')
  }
}


FlowRouter.route('/home', {
  name: 'home',
  triggersEnter: [checkLoggedIn],
  action(){
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/', {
  name: 'index',
  action: function(params){
    Tracker.autorun(function(){
      if(!Meteor.userId()){
        BlazeLayout.render('index');
      } else {
        BlazeLayout.render('home');
      }
    });
  }
});


FlowRouter.route('/people', {
  name: 'people',
  action: function(params){
    Tracker.autorun(function(){
      if(!Meteor.userId()){
        BlazeLayout.render('index');
      } else {
        BlazeLayout.render('people');
      }
    });
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action: function(params){
    Tracker.autorun(function(){
      if(!Meteor.userId()){
        BlazeLayout.render('index');
      } else {
        BlazeLayout.render('profile');
      }
    });
  }
});

//For email verification tuts: https://themeteorchef.com/tutorials/sign-up-with-email-verification
FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  action( params ) {
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        FlowRouter.go( '/' );
        Notifications.warn( error.reason, 'There is something fishy about that. Please email the support team for further assistance. Sorry for any inconvenience caused.' );
      } else {
        FlowRouter.go( '/home' );
        Notifications.success( 'Email verified!', 'You have successfully verified your email address! Please enjoy your stay at Eupholia@UPSI!' );
      }
    });
  }
});
