import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import { makeExecutableSchema } from 'graphql-tools'
import models from './models/index'
import resolvers from './graphql/resolvers/index'
import typeDefs from './graphql/types/index'

const myExecutableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const SECRET = process.env.SECRET
const app = express();

const isUserAuthenticated =  async (req) => {
  const token = req.headers.authorization;
  try {
    const { user } = await jwt.verify(token, SECRET);
    req.user = user;
  } catch (err) {
    console.log('Unauthenticated user tried to use service.');
  }
  req.next();
}

app.use(cors('*'));
app.use(isUserAuthenticated);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use('/graphql',
        bodyParser.json(),
        graphqlExpress(req => ({
          schema: myExecutableSchema,
          context: { models, SECRET, user: req.user, },
          pretty: true, })));

models.sequelize.sync()
  .then(() => app.listen(process.env.SERVER_PORT))
  .then(() => {
    console.log(`Serving on http://localhost:${process.env.SERVER_PORT}/graphiql`)
  });
