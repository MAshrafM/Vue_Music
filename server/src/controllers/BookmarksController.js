const {Bookmark} = require('../models')

module.exports = {
  // Index Bookmarks
  async index (req, res) {
    try {
      const {songId} = req.query 
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  }
}