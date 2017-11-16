exports.schema = `
type User inherits Node {
  email: String
  republica: Republica
}

input Credentials {
  email: String!
  password: String!
}
`

exports.query = `
login(credentials: Credentials!): String
me: User
`

exports.mutation = `
createUser(credentials: Credentials!, republica: RepublicaInput!): User
changePassword(oldPassword: String!, newPassword: String!): String
`
