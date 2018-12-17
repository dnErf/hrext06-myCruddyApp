var acm = (function(data,state) {
  // receives the data and state then formulate the action that we will dispatch
  const model = data()
  return {
    model : model ,
    state : state
  }
}(Folders,State))
