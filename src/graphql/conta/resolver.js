import Morador from '@/models/morador'
import Conta from '@/models/conta'

exports.resolver = {
  Conta: {
    pagou (conta) {
      return Morador.findById(conta.pagou)
    }
  },
  Mutation: {
    createConta (root, args, context) {
      context.ability.throwUnlessCan('create', 'conta')
      args.conta.republica = context.user.republica
      return Conta.create(args.conta)
    },
    updateConta (root, args, context) {
      context.ability.throwUnlessCan('update', 'conta')
      return Conta.findOneAndUpdate({_id: args.id, republica: context.user.republica}, args.conta)
    },
    deleteConta (root, args, context) {
      context.ability.throwUnlessCan('delete', 'conta')
      return Conta.findOneAndRemove({_id: args.id, republica: context.user.republica})
    }
  }
}
