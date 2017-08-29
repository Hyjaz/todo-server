export default {
  Users: {
    sectionId: ({ id }, args, {models}) => models.Sections.findAll({where: {sectionId: id},}),
  },
  Sections: {
    taskId: ({ id }, args, { models }) => models.Tasks.findAll({where: {taskId: id},}),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.Users.findAll(),
    getUser: (parent, { username }, { models }) => models.Users.findOne({ where: {username: username},}),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.Users.create(args),
    createSection: (parent, args, { models }) => models.Sections.create(args),
    createTask: (parent, args, { models }) => models.Tasks.create(args),
  }
};
