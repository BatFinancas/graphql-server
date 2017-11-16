exports.schema = `
type Conta inherits Node {
  nome: String
  data: String
  valor: Float
  pagou: Morador
}

input ContaInput {
  nome: String
  data: String
  valor: Float
  pagou: ID
}
`

exports.mutation = `
createConta(conta: ContaInput!): Conta
updateConta(id: ID!, conta: ContaInput!): Conta
deleteConta(id: ID!): Conta
`
