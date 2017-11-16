
import Morador from '@/models/morador'
import User from '@/models/user'
import Conta from '@/models/conta'

exports.resolver = {
  Republica: {
    moradores (republica) {
      return Morador.findByRepublica(republica)
    },
    admin (republica) {
      return User.findById(republica.admin)
    },
    contas (republica) {
      return Conta.findByRepublica(republica)
    }
  }
}
