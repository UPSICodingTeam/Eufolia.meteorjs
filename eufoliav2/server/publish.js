/*
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
*/
// Publishing users to client-side
Meteor.publish('allUsers', function() {
  return Meteor.users.find({});
});
//Multiple cursors : https://github.com/englue/meteor-publish-composite/issues/36
Meteor.publishComposite('newnewsfeed', function(limit){
    return [
      {
        find: function(){
        return Status.find({}, {limit:limit, sort: {createdAt:-1}});
        },
        children: [
          {
              find: function(){
              return Images.find({});
            }
          }
        ]
      },
      {
        find: function(){
        return Story.find({}, {limit:limit, sort: {createdAt:-1}});
        }
      },
      {
        find: function(){
        return Lesson.find({}, {limit:limit, sort: {createdAt:-1}});
        },
        children: [
          {
              find: function(){
              return Documents.find({}, {limit:limit, sort: {createdAt:-1}});
            }
          }
        ]
      }/*,
      {
        find: function(){
        return Images.find({});
        }
      },
      {
        find: function(){
        return Documents.find({});
        }
      } */
    ];
});

/*
Meteor.publishComposite('newnewsfeed', function(limit){
  return {
    find: function(){
      collectionName: 'Status',
      console.log('returned Status');
      return Status.find({}, {limit:limit, sort: {createdAt:-1}});
    },
    find: function(){
      collectionName: 'Story',
      console.log('returned Story');
      return Story.find({}, {limit:limit, sort: {createdAt:-1}});
    },
    find: function(){
      collectionName: 'Lesson',
      console.log('returned Lesson');
      return Lesson.find({}, {limit:limit, sort: {createdAt:-1}});
    },
    find: function(){
      collectionName: 'Images',
      console.log('returned Images');
      return Images.find();
    },
    find: function(){
      collectionName: 'Documents',
      console.log('returned Statusv2');
      return Status.find();
    }
  }
});
*/
