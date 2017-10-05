const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy
 = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')


module.exports = (app) => {
  //register a user end-point
  // Authentication Rules/Polices
  // Authentication Controller
  app.post('/register', AuthenticationControllerPolicy.register,AuthenticationController.register)
  // login end-point
  // Login Controller
  app.post('/login', AuthenticationController.login)
  // songs end-point
  // GetAll
  app.get('/songs', SongsController.index)
  // Create a song end-point
  app.post('/songs', SongsController.post)
  // Show song 
  app.get('/songs/:songId', SongsController.show)
  // Update/Edit Songs
  app.put('/songs/:songId', SongsController.put)
  
  // bookmarks 
  // Index all bookmarks
  app.get('/bookmarks', BookmarksController.index)
  // Post a bookmark
  app.post('/bookmarks', BookmarksController.post)
  // delete a bookmark
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
  
  //History
  // get all recent
  app.get('/histories', HistoriesController.index)
  // add recent
  app.post('/histories', HistoriesController.post)
}
