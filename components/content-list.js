var ContentList = (function Component(ctrl) {

  const $form_list = $(`<div class="dsply- -list"></div>`)

  $form_list.empty()
  $form_list.html('')

  let
    { bookmarks } = ctrl.model
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
      e.stopPropagation()
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

  observer.subscribe({'form-list':{fn:Component,view:$form_list}})

  return {
    fn : Component ,
    view : $form_list
  }

}(acm))