FlowRouter.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('IndexLayout');
  }
});
