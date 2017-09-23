const {Song} = require('../models')

module.exports = {
  // Index: Get All Songs
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get All songs'
      })
    }
  },
  // Post: Create Songs
  async post (req, res) {
    try{
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err){
      res.status(500).send({
        error: 'An error has occured trying to create a song'
      })
    }
  },
  // Show song
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show a song'
      })
    }
  },
  // Edit|Update Song
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to edit a song'
      })
    }
  }
}
