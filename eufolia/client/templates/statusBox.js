Template.statusBox.helpers({
  statuses: function(){
    return Status.find({}, {sort: {createdAt: -1}});
  }
});
