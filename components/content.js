var Content = (function Component(ctrl) {

  console.log(ctrl)
  const $content = $('<div class="content"></div>')

  let
    txtAdd = '' 
    , $form_container = $(`<div class="-form -ctrl"></div>`)
    , $form_controls = (function() {
        return ([
          $(`<input type="text" class="-ctrl -addTxt" placeholder="enter your information" />`)
          .keyup(function(e) {
            txtAdd = e.currentTarget.value
          }) ,
          $(`<button class="-ctrl -btn -add">Add</button>`) ,
          $(`<button class="-ctrl -btn -search">Search</button>`)
        ])
      })  
    , $form_list = $(`
        <div class="-form -dataList">nothing</div>
      `)
    
  $form_container
      .append($form_controls)

  $content
    .append($form_container)
    .append($form_list)

  return {
    fn : Component ,
    view : $content
  }
}(acm))