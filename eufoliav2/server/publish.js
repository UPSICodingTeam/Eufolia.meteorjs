Meteor.publish('newsfeed', function(limit){
  data = [
    Status.find({}, {limit:limit}),
    Story.find({}, {limit:limit}),
    Images.find()
  ];
  if (data){
    return data;
  }
  return this.ready();
});
