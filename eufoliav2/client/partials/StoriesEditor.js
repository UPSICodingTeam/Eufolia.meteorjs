var text = document.getElementsByClassName('hz-storiescontent');
var text1 = document.getElementsByClassName('hz-storiestitle');

AutoForm.hooks({
  insertStoryForm: {
    onSuccess: function(){
      text[0].innerHTML = '';
      text1[0].innerHTML = '';
    }
  }
});
