var acm = (function(data,state) {
  // receives the data and state then formulate the action that we will dispatch
  let model = data()
  
  let 
    stringe = ''
    , updateLocalStorage = function() {
      stringe = JSON.stringify(model)
      localStorage.setItem('H06',stringe)
    }

  return {
    model : model['hrext'] ,
    state : state ,
    add (url) {
      model['hrext'].bookmarks.push(url)
      updateLocalStorage()
      state.appBusy(true)
    } ,
    clear () {
      model['hrext'].bookmarks = []
      updateLocalStorage()
      state.appBusy(true)
    } ,
    remove (idx) {
      model['hrext'].bookmarks = model['hrext'].bookmarks.filter((_,i)=>{
        return !(i === Number(idx))
      })
      updateLocalStorage()
    } ,
    edit (idx, desc) {
      model['hrext'].bookmarks[idx].description = desc
      updateLocalStorage()
    } ,
    search (term)  {
      // console.log(term)
      model['hrext'].bookmarks = model['hrext'].bookmarks.filter((value) => {
        return String(value.url).includes(term)
      })
      state.appBusy(true)
    } ,
    reset () {
      model = data()
      this.model = model['hrext']
      state.appBusy(true)
    } ,
    test() {
      state.appBusy(true)
    }
  }

}(Folders,State))

var observer = (function Observer(c) {
  const observee = {}
  console.log(c.state.appBusy())
  c.state.appBusy.map((v) => {
    if (v) {
      for (let obi in observee) {
        observee[obi].view.remove()
        observee[obi].fn(c)
        $content.append(observee[obi].view)
      }
    }
    return false
  })
  return {
    observee ,
    subscribe (obseen) {
      observee[Object.keys(obseen)] = obseen[Object.keys(obseen)]
    } ,
  }
}(acm))