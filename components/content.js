var Content = (function Component(ctrl) {

  console.log(observer.redraw())
  const $content = $('<div class="content"></div>')

  let
    { bookmarks } = ctrl.model 
    , txtUrl = '' , txtSearch = '' 
    , $form_container = $(`<div class="ctrl- -form ba"><span class="-header">Bookmarks</span></div>`)
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
    , $form_list = $(`<div class="dsply- -list"></div>`)
    , $list_items = function(item,i) {
        $(`
          <div class="-item ba -open" data-id="${i}">
            <span class="-btn_i -collapse"><i class="fas fa-chevron-circle-right"></i></span>
            <span class="-url"><a href="${item.url}" target="blank">${item.url}</a></span>
            <span class="-btn_i -remove"><i class="fas fa-trash-alt"></i></span>
            <div class="-item -desc -hidden">
              <div class="-desc_input" data-id="${i}">
                <input type="text" class="-describe -itxt" placeholder="" />
                <button class="-describe -btn fr">Save</button>
              </div>
              <span class="-desc_span">${item.description ? item.description : 'Add Description'}</span>
            </div>
          </div>
        `)
        .appendTo($form_list)
      }
  
  // fetch data from the array bookmarks then apply it to the $list_items
  bookmarks.forEach($list_items)
  
  // form list events
  $form_list
    .on('click','.-item .-remove', function(e) {
      e.preventDefault()
      ctrl.remove(e.target.parentElement.dataset.id)
      $(this).parent().remove()
    })
    .on('click','.-item .-collapse', function(e) {

      e.preventDefault()

      let 
        $desc = $(this).parent().find('.-desc')
        $fas = $(this).find('.fas')

      $desc.toggleClass('-hidden')

      if ($fas.hasClass('fa-chevron-circle-right')) {
        $fas.removeClass('fa-chevron-circle-right')
        $fas.addClass('fa-chevron-circle-down')
      }
      else {
        $fas.removeClass('fa-chevron-circle-down')
        $fas.addClass('fa-chevron-circle-right')
      }

    })
    .on('click','.-desc .-desc_span', function(e) {
      $(this).hide()
      $(this).parent().find('.-describe').val(e.currentTarget.textContent)
      $(this).parent().find('.-describe').show()
    })
    .on('click','.-desc .-btn', desc_io_event)
    .on('blur','.-desc .-itxt', desc_io_event)

  function desc_io_event (e) {

    let
      $desc = $(this).parent().find('.-describe')
      $desc_span = $(this).parent().parent().find('.-desc_span')
      $desc_input = $(this).parent().find('.-itxt')

    ctrl.edit(e.target.parentElement.dataset.id , $desc_input.val())

    $desc.hide()
    $desc_span.text($desc_input.val())
    $desc_span.show()

    // if ($(this).parent().find('.-itxt').is(':visible')) { console.log('clicked') }

  }

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