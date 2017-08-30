export default {
  Users: {
    sections: ({ id }, args, {models}) => models.Sections.findAll({where: {sectionId: id},}),
  },
  Sections: {
    tasks: ({ id }, args, { models }) => models.Tasks.findAll({where: {taskId: id},}),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.Users.findAll(),
    getUser: (parent, { username }, { models }) => models.Users.findOne({ where: {username: username},}),
  },
  Mutation: {
    createUser: (parent, args, { models }) => {
      models.Users.create(args)
      .then(result => {
        console.log(result);
        return result;
      });
    },
    createSection: (parent, args, { models }) => models.Sections.create(args),
    createTask: (parent, args, { models }) => models.Tasks.create(args),
  }
};
