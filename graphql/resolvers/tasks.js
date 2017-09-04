import { requiresAuth } from '../../permissions'

export default {
  Mutation: {
    createTask: requiresAuth.createResolver(async (parent, args, { models }) => {
      return await models.Tasks.create(args)
    }),
  },
}
