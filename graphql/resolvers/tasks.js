import { requiresAuth } from '../../permissions';

export default {
  Mutation: {
    createTask: requiresAuth.createResolver(async (parent, args, { models }) => (
      models.Tasks.create(args))),
  },
};
