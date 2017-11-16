import UserModel from '@/models/user'
import Republica from '@/models/republica'

exports.resolver = {
  User: {
    republica (user) {
      return user.getRepublica()
    }
  },
  Query: {
    login (root, args) {
      return UserModel.login(args.credentials)
    },
    me (root, args, context) {
      return context.user
    }
  },
  Mutation: {
    async createUser (root, args) {
      let newUser = await UserModel.create(args.credentials)
      args.republica.admin = newUser
      newUser.republica = await Republica.create(args.republica)
      newUser.save()
      return newUser
    },
    changePassword (root, args, context) {
      return context.user.changePassword(args)
    }
  }
}
