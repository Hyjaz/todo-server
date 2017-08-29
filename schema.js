export default `
  type Users {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    createdAt: String!
    updatedAt: String!
    sectionId: [Sections!]!
  }

  type Sections {
    id: Int!
    states: String
    createdAt: String!
    updatedAt: String!
    sectionId: Int!
    taskId: [Tasks!]!
  }

  type Tasks {
    id: Int!
    title: String!
    description: String!
    taskId: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    allUsers: [Users!]!
    getUser(username: String!): Users
  }

  type Mutation {
    createUser(username: String!, firstName: String!, lastName: String!, phoneNumber: String!): Users
    createSection(states: String!, sectionId: Int!): Sections
    createTask(title: String!, description: String!, taskId: Int!): Tasks
  }
`;
