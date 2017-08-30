export default `
  type Sections {
    id: Int!
    states: String
    createdAt: String!
    updatedAt: String!
    sectionId: Int!
    tasks: [Tasks!]!
  }

  type Mutation {
    createSection(states: String!, sectionId: Int!): Sections
  }
`;