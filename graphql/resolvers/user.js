import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { requiresAuth } from '../../permissions'

export default {
  User: {
    sections: requiresAuth.createResolver(async ({ id }, args, { models }) => {
      return await models.Sections.findAll({where: {sectionId: id},})
    }),
  },
  Query: {
    me: async (parent, args, { models, user }) => {
      if (!user) return null;
      return user;
    },
},
  Mutation: {
    register: async (parent, args, { models }) => {
      const SALTROUNDS = 10;
      args.password = await bcrypt.hash(args.password, SALTROUNDS);
      return await models.User.create(args);
    },
    login: async (parent, { username, password} , { models, SECRET }) => {
      const user = await models.User.findOne({ where: {username: username},})
      if (!user) throw new Error("Invalid username or password. Please try again");
      
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error('Invalid username or password. Please try again');

      const token = jwt.sign({ user: user, },
        SECRET, { expiresIn: '1y', });
      return token;
    },
  },
};
