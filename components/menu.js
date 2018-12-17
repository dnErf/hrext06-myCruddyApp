var Menu = (function Component(ctrl) {

  console.log(ctrl)
  const $menu = $('<div class="menu ba">Meenuudoo</div>')

  return {
    fn : Component ,
    view : $menu
  }
  
}(acm))