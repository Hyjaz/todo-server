import express from 'express'
import models from './models/index'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(typesArray);

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
