import Morador from '@/models/morador'
import User from '@/models/user'
import Conta from '@/models/conta'

exports.resolver = {
  Morador: {
    user (morador) {
      return User.findById(morador.user)
    },
    contasPagas (morador) {
      return Conta.find({pagou: morador})
    }
  },
  Mutation: {
    async createMorador (root, args, context) {
      context.ability.throwUnlessCan('create', 'morador')
      args.user.republica = args.morador.republica = context.user.republica
      args.morador.user = await User.create(args.user)
      return Morador.create(args.morador)
    },
    updateMorador (root, args, context) {
      context.ability.throwUnlessCan('update', 'morador')
      return Morador.findOneAndUpdate({'_id': args.id, republica: context.user.republica}, args.morador)
    }
  }
}
