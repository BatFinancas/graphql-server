exports.schema = `
type User inherits Node {
  email: String
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
createUser(credentials: Credentials!) : User
changePassword(oldPassword: String!, newPassword: String!): String
`
