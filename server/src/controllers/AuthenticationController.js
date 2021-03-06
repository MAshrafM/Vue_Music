const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// JsonWebToken with secret token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // Register Authentication
  async register (req, res) {
    try{
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: user.toJSON,
        token: jwtSignUser(userJson)
      })
    } catch (err){
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  // Login Authentication
  async login (req, res) {
    try{
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err){
      res.status(500).send({
        error: 'An error has occurend tryuing to log in'
      })
    }
  }
}
