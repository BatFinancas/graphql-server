exports.schema = `
type User {
  id: ID!
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
changePassword(oldPassword: String!, newPassword: String!): User
`
