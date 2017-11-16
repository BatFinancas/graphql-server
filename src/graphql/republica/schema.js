exports.schema = `
type Republica inherits Node {
  nome: String
  caixa: Float
  moradores: [Morador]
  admin: User
  contas: [Conta]
}

input RepublicaInput {
  nome: String!
}
`
