export default `
  type Tasks {
    id: Int!
    title: String!
    description: String!
    taskId: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createTask(title: String!, description: String!, taskId: Int!): Tasks
  }
`;