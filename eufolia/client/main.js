Template.statusBox.helpers({
  statuses: function(){
    return Status.find({}, {sort: {createdAt: -1}});
  }
});

Template.statusPost.events({
  'submit #stathz': function (event){
    event.preventDefault();
    var statustext = document.getElementById('eustatus').textContent;
    //console.log(status);
    Status.insert({status: statustext, createdAt: new Date() });
  }
});
