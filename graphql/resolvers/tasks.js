export default {
  Mutation: {
    createTask: async (parent, args, { models }) => {
      return await models.Tasks.create(args)
    },
  },
}
