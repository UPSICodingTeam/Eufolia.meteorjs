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
  download: function(){
    return true;
  }
});

LessonSchema = new SimpleSchema({
  level: {
    type: String,
    optional: false,
    allowedValues: ['Standard 1','Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Form 6'],
    autoform: {
      type: 'select',
      label: true,
      placeholder:"What level is this lesson plan for? (e.g. Form 4)",
      class:"hz-lplevel",
      options: [
        {label:"Standard 1", value:"Standard 1"},
        {label:"Standard 2", value:"Standard 2"},
        {label:"Standard 3", value:"Standard 3"},
        {label:"Standard 4", value:"Standard 4"},
        {label:"Standard 5", value:"Standard 5"},
        {label:"Standard 6", value:"Standard 6"},
        {label:"Form 1", value:"Form 1"},
        {label:"Form 2", value:"Form 2"},
        {label:"Form 3", value:"Form 3"},
        {label:"Form 4", value:"Form 4"},
        {label:"Form 5", value:"Form 5"},
        {label:"Form 6", value:"Form 6"}
      ]
    }
  },
  subject: {
    type: String,
    optional: false,
    allowedValues: ['Malay Language','English Language','Mathematics','Science','Additional Mathematics','Biology','Chemistry','Physics','History','Islamic Studies','Moral Studies','Dunia Sains & Teknologi','Art Education','Sports Science','Dunia Muzik','Tamil Language','Chinese Language','Geography','Living Skills'],
    autoform: {
      type: 'select',
      label: true,
      placeholder:"Subject (e.g. English or Bahasa Malaysia)",
      class:"hz-lpsubject",
      options: [
        {label:"Malay Language", value:"Malay Language"},
        {label:"English Language", value:"English Language"},
        {label:"Mathematics", value:"Mathematics"},
        {label:"Additional Mathematics", value:"Additional Mathematics"},
        {label:"Science", value:"Science"},
        {label:"Biology", value:"Biology"},
        {label:"Chemistry", value:"Chemistry"},
        {label:"Physics", value:"Physics"},
        {label:"History", value:"History"},
        {label:"Islamic Studies", value:"Islamic Studies"},
        {label:"Moral Studies", value:"Moral Studies"},
        {label:"Dunia Sains & Teknologi", value:"Dunia Sains & Teknologi"},
        {label:"Art Education", value:"Art Education"},
        {label:"Sports Science", value:"Sports Science"},
        {label:"Dunia Muzik", value:"Dunia Muzik"},
        {label:"Tamil Language", value:"Tamil Language"},
        {label:"Chinese Language", value:"Chinese Language"},
        {label:"Geography", value:"Geography"},
        {label:"Living Skills", value:"Living Skills"},
      ]
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
    optional: false,
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
    },
    autoform: {
      type: "hidden"
    }
  }
});

Lesson.attachSchema( LessonSchema );
