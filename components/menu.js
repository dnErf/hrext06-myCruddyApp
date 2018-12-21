var Menu = (function Component(ctrl) {
  
  const $menu = $('<div class="menu ba"></div>')

  let $header = $('<span class="-header">HREXT06</span>')
  $header.click(function(e) {
    e.preventDefault()
    ctrl.reset()
  })

  $menu
    .append($header)
    
  return {
    fn : Component ,
    view : $menu
  }
  
}(acm))