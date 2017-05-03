Template.statusPost.events({
  'submit #stathz': function (event){
    event.preventDefault();
    var statustext = document.getElementById('eustatus').value;
    //console.log(status);
    Status.insert({status: statustext, createdAt: new Date() });
  }
});
