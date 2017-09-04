import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  User: {
    sections: async ({ id }, args, {models}) => {
      return await models.Tasks.findAll({where: {taskId: id},})
    },
  },
  Query: {
    // allUsers: async (parent, args, { models }) => {
    //   const users = await models.User.findAll();
    //   if (!users) throw new Error('There are currently no users in the database');
    //   return users;
    // },
    me: async (parent, args, { models, user }) => {
      console.log(user);
      if (!user) {
        return null;
      }
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
      if (!user) {
        throw new Error("Invalid username or password. Please try again");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid username or password. Please try again');
      }      

      const token = jwt.sign({
        user: user,
      }, SECRET, {
        expiresIn: '1y',
      });
      return token;
    },
  },
};
