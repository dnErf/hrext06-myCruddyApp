var Folders = function() {
  const data = JSON.parse(localStorage.getItem('H06'))
  return data
}

var State = (function() {
  let abc = function() {
    let status = false
    return function(state) {
      return state !== undefined ? status = state : status
    }
  }
  return {
    isReady : true ,
    appBusy : abc()
  }
}())
