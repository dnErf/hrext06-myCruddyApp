var Folders = function() {
  // fetch data from localStorage : sample data on data.json
  const data = JSON.parse(localStorage.getItem('H06'))
  return data
}

var State = (function() {
  // app global state
  // toggle that can be use if the app is busy
  let abc = s()
  return {
    isReady : true ,
    appBusy : abc
  }
}())
