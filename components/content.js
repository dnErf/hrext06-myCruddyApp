var Content = (function Component(ctrl) {

  console.log(ctrl)
  const $content = $('<div class="content"></div>')

  let
    { bookmarks } = ctrl.model 
    , txtUrl = '' , txtSearch = '' 
    , $form_container = $(`<div class="-form -ctrl ba"></div>`)
    , $form_controls = (function() {
        return ([
          $(`<input type="text" class="-ctrl -add -itxt" placeholder="url..." />`)
          .keyup(function(e) {
            txtUrl = e.currentTarget.value
          }) ,
          $(`<button class="-ctrl -btn -add">Add</button>`)
          .click(function(e) {
            e.preventDefault()
            ctrl.add({
              url : txtUrl ,
              description : ''
            })
          }) ,
          $(`<input type="text" class="-ctrl -search -itxt" placeholder="search..." />`)
          .keyup(function(e) {
            txtSearch = e.currentTarget.value
          }) ,
          $(`<button class="-ctrl -btn -search">Search</button>`) ,
          $(`<button class="-ctrl -btn -clear">Clear</button>`)
          .click(function(e) {
            e.preventDefault()
            ctrl.clear()
          })
        ])
      })  
    , $form_list = $(`<div class="-form -list ba">nothing</div>`)
    , $list_items = function(item,i) {
        $(`
          <div class="-item ba" data-id="${i}">
            <span class="-item -url">${item.url}</span>
            <span class="-item -desc">${item.description}</span>
            <button class="-btn -remove">[ x ]<button>
          </div>
        `)
        .appendTo($form_list)
      }
    
  bookmarks.forEach($list_items)
  
  $form_list.on('click','.-item .-remove', function(e) {
    e.preventDefault()
    ctrl.remove(e.target.parentElement.dataset.id)
    $(this).parent().remove()
  })

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