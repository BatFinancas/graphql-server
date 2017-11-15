import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Schema defines how the user data will be stored in MongoDB
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// Hash the user's password before saving an user
UserSchema.pre('save', async function (next) {
  let user = this
  if (this.isModified('password') || this.isNew) {
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    next()
  } else {
    return next()
  }
})

UserSchema.statics.new = async function (user) {
  var newUser = new this(user)
  newUser = await newUser.save()
  if (!newUser) {
    throw new Error('Error adding new user')
  }
  return newUser
}

UserSchema.statics.login = async function (args) {
  let user = await this.findOne({email: args.email})

  if (!user) {
    throw new Error('Check your credentials.')
  }

  // Compare password input to password saved in database
  if (!await bcrypt.compare(args.password, user.password)) {
    throw new Error('Check your credentials.')
  }

  return jwt.sign(user, 'secret')
}

UserSchema.methods.changePassword = async function (args) {
  // Compare password input to password saved in database
  if (!await bcrypt.compare(args.oldPassword, this.password)) {
    throw new Error('Check your credentials.')
  }
  this.password = args.newPassword
  // invalidate tokens here
  this.save()
}
// Export the model
module.exports = mongoose.model('User', UserSchema)
