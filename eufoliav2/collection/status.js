Status = new Mongo.Collection('status');

Status.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Images.allow ({
  'insert': function(userId, doc){
    return !!userId;
  }
});


StatusSchema = new SimpleSchema({
  status: {
    type: String,
    optional: true,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"What's on your mind?",
      class:"hz-statuscontent"
    }
  },
  images: {
    type: [String],
    autoform: {
      label: false,
      afFieldInput: {
        type: "cfs-files",
        collection: "images",
        placeholder: "Click to upload an image, or drop it here",
        class: "hz-imageupload text-center"
      }
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

Status.attachSchema( StatusSchema );
