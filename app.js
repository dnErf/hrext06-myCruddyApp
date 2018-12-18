$(document).ready(function(){

  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  // $('.btn-submit').on('click', function(){
  //   localStorage.setItem('inputFieldValue', $('.text-entry').val());
  //   var myItemInStorage = localStorage.getItem('inputFieldValue');
  //   console.log('myItemInStorage', myItemInStorage);

  //   // display the value here
  //   $('.list-display-field').text(myItemInStorage); // ??

  // });

  // delete from local storage when delete button clicked
  // $('.btn-delete').on('click', function(){
  //   localStorage.removeItem('inputFieldValue');
  // });

  // while everything is fine on the code above we just need something more ...

  var $container = $('.container')

  var $content = $('<div class="content"></div>')

  $content
    .append(ContentForm.view)
    .append(ContentList.view)

  $container
    .append(Menu.view)
    // .append(Content.view)
    .append($content)
    

});