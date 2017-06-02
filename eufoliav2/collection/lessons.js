Lesson = new Mongo.Collection('lesson');
pdfStore = new FS.Store.FileSystem("documents");

Documents = new FS.Collection("documents", {
  stores: [pdfStore],
  filter: {
    allow: {
      extensions: ['pdf','doc','docx'] // Currently not working for .doc and .docx document file types.
    },
    onInvalid: function (message){
      Notifications.error('Incompatible Format', 'The system do not support the type of document you are trying to upload. Kindly select different file');
    }
  }
});

Lesson.allow({
  insert: function(userId, doc) {
    return !!userId;
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

LessonSchema = new SimpleSchema({
  level: {
    type: String,
    optional: false,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"What level is this lesson plan for? (e.g. Form 4)",
      class:"hz-lplevel"
    }
  },
  subject: {
    type: String,
    optional: false,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"Subject (e.g. English or Bahasa Malaysia)",
      class:"hz-lpsubject"
    }
  },
  topic: {
    type: String,
    optional: false,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"Topic (e.g. Writing or Tatabahasa)",
      class:"hz-lptopic"
    }
  },
  subtopic: {
    type: String,
    optional: true,
    autoform: {
      type: 'contenteditable',
      label: false,
      placeholder:"Sub-Topic (if available)",
      class:"hz-lpsubtopic"
    }
  },
  lpdoc: {
    type: String,
    optional: true,
    autoform: {
      label: false,
      afFieldInput: {
        type: "fileUpload",
        collection: "documents",
        label: "Upload a lesson plan from your computer",
        previewTemplate: 'myLpFilePreview'
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

Lesson.attachSchema( LessonSchema );
