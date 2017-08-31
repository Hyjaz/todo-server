export default {
  Mutation: {
    createTask: async (parent, args, { models }) => {
      return models.Tasks.create(args)
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
    },
  },
}