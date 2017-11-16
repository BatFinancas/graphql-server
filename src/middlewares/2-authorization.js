import { AbilityBuilder, Ability } from 'casl'

module.exports = async function (req, res, next) {
  const { rules, can } = AbilityBuilder.extract()

  let republica = await req.context.user.getRepublica()

  if (req.context.user.equals(republica.admin)) {
    can('manage', ['Conta', 'Morador'])
    can('update', ['Republica'])
  }

  req.context.ability = new Ability(rules)

  return next()
}
