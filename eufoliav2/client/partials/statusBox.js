Template.statusBox.helpers({
  statuses: function(){
    return Status.find({}, {sort: {createdAt: -1}});
  },
  formattedDate: function(){
    var timecreated = this.createdAt;
    return moment(timecreated).fromNow();
  },
  author: function(){
    return Status.author;
  }

});
