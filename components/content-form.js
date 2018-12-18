var ContentForm = (function Component(ctrl) {

  const $form = $(`<div class="ctrl- -form ba"><span class="-header">Bookmarks</span></div>`)

  let
    txtUrl = '' , txtSearch = ''
    , $form_controls = (function() {
        return ([
          $(`<input type="text" class="-add -itxt" placeholder="url..." />`)
          .keyup(function(e) {
            txtUrl = e.currentTarget.value
          }) ,
          $(`<span class="-btn_i"><i class="fas fa-plus-circle"></i></span>`)
          .click(function(e) {
            e.preventDefault()
            ctrl.add({
              url : txtUrl ,
              description : ''
            })
          }) ,
          $(`<input type="text" class="-search -itxt" placeholder="search..." />`)
          .keyup(function(e) {
            txtSearch = e.currentTarget.value
          }) ,
          $(`<button class="-btn">Search</button>`)
          .click(function(e) {
            e.preventDefault()
            ctrl.test()
          }) ,
          $(`<button class="-btn -clear">Clear</button>`)
          .click(function(e) {
            e.preventDefault()
            ctrl.clear()
          })
        ])
      })  
    

  $form
    .append($form_controls)

  return {
    fn : Component ,
    view : $form
  }

}(acm))