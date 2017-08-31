export default {
  Users: {
    sections: async ({ id }, args, {models}) => {
      return models.Tasks.findAll({where: {taskId: id},})
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
    },
  },
  Query: {
    allUsers: async (parent, args, { models }) => {
      return models.Users.findAll()
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
    },
    getUser: async (parent, { username }, { models }) => {
      return models.Users.findOne({ where: {username: username},})
      .then(myResult => myResult)
      .catch(err => console.log("Uh Oh, something went wrong.", err));
  },
},
  Mutation: {
    createUser: async (parent, args, { models }) => {
      return models.Users.create(args)
      .then(result => result)
      .catch(err => {
        console.log("Uh Oh, something went wrong.", err);
      });
    },
  },
}