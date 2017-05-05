FlowRouter.route('/', {
  name: 'index',
  action(){
    BlazeLayout.render('index');
  }
});

FlowRouter.route('/home', {
  name: 'home',
  action(){
    BlazeLayout.render('home');
  }
});
