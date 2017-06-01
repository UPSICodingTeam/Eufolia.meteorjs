Story = new Mongo.Collection('stories');

Story.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

StorySchema = new SimpleSchema({
  title: {
    type: String,
    optional: false,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"The title goes here",
      class:"hz-storiestitle"
    }
  },
  story: {
    type: String,
    optional: false,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"The story is about...",
      class:"hz-storiescontent"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created at",
    autoValue: function(){
      return new Date()
    }
    ,
    autoform: {
      type: "hidden"
    }
  }
});

Story.attachSchema( StorySchema );
