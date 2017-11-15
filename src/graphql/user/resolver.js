import UserModel from '../../models/user'

exports.resolver = {
  Query: {
    login (_, args) {
      return UserModel.login(args.credentials)
    },
    me (_, args, req) {
      return req.user
    }
  },
  Mutation: {
    createUser (_, args) {
      return UserModel.new(args.credentials)
    },
    changePassword (_, args, req) {
      return req.user.changePassword(args)
    }
  }
}
