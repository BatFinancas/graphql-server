import UserModel from '../../models/user'

exports.resolver = {
  Query: {
    login (root, args) {
      return UserModel.login(args.credentials)
    },
    me (root, args, context) {
      return context.user
    }
  },
  Mutation: {
    createUser (root, args) {
      return UserModel.new(args.credentials)
    },
    changePassword (root, args, context) {
      return context.user.changePassword(args)
    }
  }
}
