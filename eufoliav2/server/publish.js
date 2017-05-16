Meteor.publish('status', function(){
  return Status.find();
});

Meteor.publish('images', function(){
  return Images.find();
});
