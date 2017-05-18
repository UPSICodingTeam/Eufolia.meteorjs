Status = new Mongo.Collection('status');

Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images"),
    new FS.Store.FileSystem("thumb", {
      beforeWrite: function(fileObj) {
        // We return an object, which will change the
        // filename extension and type for this store only.
        return {
          extension: 'jpeg',
          type: 'image/*'
        };
      },
      transformWrite : resizeImageStream ({
        width:562,
        height:562,
        quality:50
      })
    })
  ]
});

Status.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Images.allow ({
  update: function(userId) {
        return true;
        },
  insert: function(userId){
    return true;
        },
  download: function(userId){
    return true;
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
    type: String,
    optional: true,
    autoform: {
      label: false,
      afFieldInput: {
        type: "fileUpload",
        collection: "images",
        label: "Choose an image from your computer",
        previewTemplate: 'myFilePreview'
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
