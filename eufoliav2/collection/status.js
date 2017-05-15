Status = new Meteor.Collection('status');

StatusSchema = new SimpleSchema({
  status: {
    type: String,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"What's on your mind?",
      class:"hz-statuscontent"
    }
  },
  images: {
    type: String,
    autoform: {
      label: false,
      afFieldInput: {
        type: "cfs-file",
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
