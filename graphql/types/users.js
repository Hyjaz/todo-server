export default `
  type Users {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    createdAt: String!
    updatedAt: String!
    sections: [Sections!]!
  }

  type Query {
    allUsers: [Users!]!
    getUser(username: String!): Users
  }

  type Mutation {
    createUser(username: String!, firstName: String!, lastName: String!, phoneNumber: String!): Users
  }
  
`;
