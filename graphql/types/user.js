export default `
  type User {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    createdAt: String!
    updatedAt: String!
    sections: [Sections!]
  }

  type Query {
    me: User
  }

  type Mutation {
    register(username: String!, email: String!, password: String!, firstName: String!, lastName: String!, phoneNumber: String!): User!
    login(username: String!, password: String!): String!
  }
  
`;
