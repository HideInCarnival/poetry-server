import {  gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type' 

const typeDef = gql`
  type Poem {
    id: ID!
    title: String!
    author: String!
    Article: String!
    created: Date
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
      return models.Poem.findAll({
        where: {
          author
        }
      })
    }
  }
}

export { typeDef, resolver } 