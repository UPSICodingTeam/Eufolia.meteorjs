var text2 = document.getElementsByClassName('hz-lptopic');
var text3 = document.getElementsByClassName('hz-lpsubtopic');

AutoForm.hooks({
  insertLpForm: {
    onSuccess: function(){
      text2[0].innerHTML = '';
      text3[0].innerHTML = '';
    }
  }
});
