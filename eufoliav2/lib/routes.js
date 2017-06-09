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
