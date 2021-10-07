const { gql } = require("apollo-server");
const typeDefs = gql`
type Query {
  Students: [Student!]!
  Student(id: ID!): Student
}

type Mutation {
  addStudent(username: String!, password: String!): Student!
}


type Student {
  id: ID
  username: String
  password: String
}
`
module.exports = typeDefs;