# hrext06-myCruddyApp
Create Read Update Delete using localStorage with JS, HTML and CSS

## To Do List

### Done Sprint (Template)
(the unchecked boxes are required to finish)
- [x] Form with input fields
- [x] Write to local storage
- [x] Read from local storage
- [x] Display stored value in proper div

### Required Features
- [x] Edit local storage
    - [ ] What about if we have more than one value?
    - [ ] how do we add multiple values?
        - [ ] maybe use an array?
        - [ ] maybe use multiple keys? create new keyname each time
- [x] Delete local storage
    - [x] delete button storage.removeItem()
    - [ ] delete all storage.clear()

### Main Feature
- [x] This App is about making bookmarks, todo list and notes
- [ ] Setup a SCAM (State Control Action Model) // ( We have MVC FLUX etc. so why not name one for this proj. Its just a function anyway. )

### Optional Feature
- [ ] Hosting it on repl.it (html,css, js)

### Next Sprints
> (^) donotes that it can be expanded or add some feature on top of it

Story #1
- [ ] visualize the data thru creating a data.json (^)
- [ ] implement SCAM
    - [ ] create model function that retrieves data from localStorage
    - [ ] app global state declaration (isReady,Updated)
    - [ ] generate action thru what we can do on the data (this is what scam is really about)
    - [ ] make an observer (^)
    - [ ] encasulate our form and dispatch the action controlled model

Story #2
- [ ] styled like slack
    - [ ] seperated by two panels Menu and Content

