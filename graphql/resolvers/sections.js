export default {
  Sections: {
    tasks: async ({ id }, args, { models }) => {
      return models.Tasks.findAll({where: {taskId: id},})
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
    },
  },
  Mutation: {
    createSection: async (parent, args, { models }) => {
      return models.Sections.create(args)
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
    },
  },
}