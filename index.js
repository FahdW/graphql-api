import express from 'express';
import * as bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';
import { buildSchema } from 'graphql';

import schema from './schema';

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };


const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(4000, () => {console.log('listening at 4000')});