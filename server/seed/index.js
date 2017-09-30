const {
  sequelize,
  Song,
  User
  } = require('../src/models')

const Promise = require('bluebird')
const songs = require('./song.json')
const users = require('./user.json')

sequelize.sync({force: true})
  .then(async function() {
    await Promise.all(
      users.map(user =>{
        User.create(user)
      })
    )
    
    await Promise.all(
      songss.map(song =>{
        Song.create(song)
      })
    )
  })
