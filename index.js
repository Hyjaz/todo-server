import bodyParser from 'body-parser'
import express from 'express'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import models from './models/index'
import resolvers from './graphql/resolvers/index'
import typeDefs from './graphql/types/index'

const myExecutableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use('/graphql',
        bodyParser.json(),
        graphqlExpress({ schema: myExecutableSchema, context: { models }, pretty: true, }));

models.sequelize.sync()
  .then(() => app.listen(process.env.SERVER_PORT))
  .then(() => {
    console.log(`Serving on http://localhost:${process.env.SERVER_PORT}/graphiql`)
  });
