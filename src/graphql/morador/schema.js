exports.schema = `
type Morador inherits Node {
  nome: String
  entrou: String
  saiu: String
  aluguel: Float
  saldo: Float
  user: User
  contasPagas: [Conta]
}

input MoradorInput {
  nome: String
  aluguel: Float
  saldo: Float
  entrou: String
  saiu: String
}
`

exports.mutation = `
createMorador(
  morador: MoradorInput!
  user: Credentials!
): Morador

updateMorador(
  id: ID!
  morador: MoradorInput!
): Morador
`
