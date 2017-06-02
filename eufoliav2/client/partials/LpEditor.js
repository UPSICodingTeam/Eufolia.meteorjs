var text = document.getElementsByClassName('hz-lplevel');
var text1 = document.getElementsByClassName('hz-lpsubject');
var text2 = document.getElementsByClassName('hz-lptopic');
var text3 = document.getElementsByClassName('hz-lpsubtopic');

AutoForm.hooks({
  insertStoryForm: {
    onSuccess: function(){
      text[0].innerHTML = '';
      text1[0].innerHTML = '';
      text2[0].innerHTML = '';
      text3[0].innerHTML = '';
    }
  }
});

Template.LpEditor.events({
  'click .hz-reset': function(e){
    e.preventDefault();
    text[0].innerHTML = '';
    text1[0].innerHTML = '';
    text2[0].innerHTML = '';
    text3[0].innerHTML = '';
  }
});
