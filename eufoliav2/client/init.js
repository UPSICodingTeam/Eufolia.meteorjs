Meteor.startup(() => {
  // code to run on server at startup
  WebFontConfig = {
    google: { families: [ 'Palanquin Dark', 'Varela Round'] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  //Settings for Notification system
  _.extend(Notifications.defaultOptions, {
        timeout: 5000,
        animationSpeed: 200
    });
});

//console.log helper
Template.registerHelper("log", function(something) {
  console.log(something);
});
