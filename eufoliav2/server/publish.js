Meteor.publish('statuses', function(){
  return Status.find();
});
