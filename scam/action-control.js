var acm = (function(data,state) {
  // receives the data and state then formulate the action that we will dispatch
  const model = data()
  let stringe = ''

  return {
    model : model['hrext'] ,
    state : state ,
    add (url) {
      model['hrext'].bookmarks.push(url)
      stringe = JSON.stringify(model)
      localStorage.setItem('H06',stringe)
    } ,
    clear () {
      console.log(model['hrext'].bookmarks)
      model['hrext'].bookmarks = []
      stringe = JSON.stringify(model)
      localStorage.setItem('H06',stringe)
    } ,
    remove (idx) {
      model['hrext'].bookmarks = model['hrext'].bookmarks.filter((_,i)=>{
        return (!i === idx)
      })
      stringe = JSON.stringify(model)
      localStorage.setItem('H06', stringe)
    } ,
    edit (idx, desc) {
      model['hrext'].bookmarks[idx].description = desc
      stringe = JSON.stringify(model)
      localStorage.setItem('H06', stringe)
    }

  }
}(Folders,State))
