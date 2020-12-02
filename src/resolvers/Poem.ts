import {  gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type' 

const typeDef = gql`
  type Poem {
    id: ID!
    title: String!
    author: String!
    Article: String!
    created: Date
    author_id: Int!
  }

  extend type Query {
    poem (id: ID): Poem
    poems (author: String): [Poem!]
  }
`


const resolver: IResolverObject<any, graphContext> = {
  Query: {
    poem: ({}={}, { id }, { models }) => {
      return models.Poem.findByPk(id)
    },
    poems: ({}={}, { author }, { models }) => {
      if (author) {
        return models.Poem.findAll({
          where: {
            author
          }
        })
      } else {
        return models.Poem.findAll()
      }
    }
  }
}

export { typeDef, resolver } 