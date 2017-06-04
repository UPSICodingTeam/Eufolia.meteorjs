Meteor.publish('newsfeed', function(limit){
  data = [
    Status.find({}, {limit:limit, sort: {createdAt:-1}}),
    Story.find({}, {limit:limit, sort: {createdAt:-1}}),
    Lesson.find({}, {limit:limit, sort: {createdAt:-1}}),
    Images.find(),
    Documents.find()
  ];
  return data;
});
