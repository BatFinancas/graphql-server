import UserModel from '../models/user'
import jwt from 'jsonwebtoken'

module.exports = async function (req, res, next) {
  if (!req.headers.token) {
    return next()
  }
  try {
    var teste = await jwt.verify(req.headers.token, 'secret')
  } catch (err) {
    console.log(err)
    return next()
  }

  let user = await UserModel.findById(teste._doc._id)

  if (!user) {
    return next()
  }
  req.context.user = user
  return next()
}
