Status = new Mongo.Collection('status');

imagesStore = new FS.Store.FileSystem("images");
pdfStore = new FS.Store.FileSystem("documents");
thumbs = new FS.Store.FileSystem("thumb", {
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
});

smallerthumbs = new FS.Store.FileSystem("sthumb", {
  beforeWrite: function(fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
      extension: 'jpeg',
      type: 'image/*'
    };
  },
  transformWrite : resizeImageStream ({
    width:80,
    height:80,
    quality:30
  })
});

Images = new FS.Collection("images", {
  stores: [imagesStore,thumbs,smallerthumbs],
  filter: {
    allow: {
      contentTypes: ['image/*']
    },
    onInvalid: function(message) {
      Notifications.error('Incompatible Format', 'The system do not support the type of document you are trying to upload. Kindly select different file');
    }
  }
});

Documents = new FS.Collection("documents", {
  stores: [pdfStore],
  filter: {
    allow: {
      contentTypes: ['application/pdf'],
      extension: ['pdf']
    },
    onInvalid: function (message){
      Notifications.error('Incompatible Format', 'The system do not support the type of document you are trying to upload. Kindly select different file');
    }
  }
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

Documents.allow ({
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
    optional: false,
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
