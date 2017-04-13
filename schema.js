// const {
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLObjectType,
// } = require('graphql');

// let text = 'Heeey';

// const QueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: '...',
//   fields: () => ({
//     hello: {
//       type: GraphQLString,
//       resolve: () => text
//     },
//   })
// });

// export default new GraphQLSchema({
//   query: QueryType
// });

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObject
} from 'graphql';

let count = 5;

import data from './data';

// console.log(data[1])

// console.log(data.filter((item) => {
//   return item.id === 1
// }));

const HeroType = new GraphQLObjectType({
  name: 'Hero',
  description: '...',
  fields: () => ({
    name: { type: GraphQLString },
    aliases: { type: new GraphQLList(GraphQLString) },
    occupation: { type: GraphQLString },
    gender: { type: GraphQLString },
    height: { type: new GraphQLList(GraphQLObject),
      ft: { type: GraphQLInt },
      in: { type: GraphQLInt }
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    count: {
      type: GraphQLString,
      resolve: () => count
    },
    hero: {
      type: HeroType,
      args: {
        id: {type: GraphQLInt}
      },
      resolve: (root, args) => 
        data.find((hero) => {
          return hero.id === args.id
        })
    }
  }
});

export default new GraphQLSchema({
  query: QueryType
});
