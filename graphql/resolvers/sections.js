import { requiresAuth } from '../../permissions';

export default {
  Sections: {
    tasks: requiresAuth.createResolver(async ({ id }, args, { models }) => (
      models.Tasks.findAll({ where: { taskId: id } }))),
  },
  Mutation: {
    createSection: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      if (!user) throw new Error('Unauthenticated user tried to use service.');
      return models.Sections.create(args);
    }),
  },
};
