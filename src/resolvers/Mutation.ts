import { gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type'

const typeDef = gql`
  type Mutation {
    hello: String
  }

  extend type Mutation {
    createPoem(title: String!, author: String!, article: String!): Poem
  }
`

const resolver: IResolverObject<any, graphContext> = {
  Mutation: {
    hello: () => {
      return 'hello, mutation'
    },
    createPoem: ({}={}, {title, author, article}, { models }) => {
      return models.Poem.create({
        title,
        author,
        article,
      })
    }
  }
}

export {typeDef, resolver}