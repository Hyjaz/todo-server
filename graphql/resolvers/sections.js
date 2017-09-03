export default {
  Sections: {
    tasks: async ({ id }, args, { models }) => {
      return await models.Tasks.findAll({where: {taskId: id},})
    },
  },
  Mutation: {
    createSection: async (parent, args, { models }) => {
      return await models.Sections.create(args)
    },
  },
}
