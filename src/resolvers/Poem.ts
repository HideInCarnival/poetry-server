import {  gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type' 
import { Op } from 'sequelize'
const typeDef = gql`
  type Poem {
    id: ID!
    title: String!
    author: String!
    article: String!
    created: Date
    author_id: Int!
  }

  type PoemRow {
    dataValues: Poem
  }

  type PoemPage {
    count: Int
    rows: [PoemRow]
  }

  extend type Query {
    poem (id: ID): Poem
    poems (author: String): [Poem!]
    poemsByPage (author: String, offset: Int!, limit: Int!): PoemPage
    poemLike (title: String!): [Poem]
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
          },
        })
      } else {
        return models.Poem.findAll()
      }
    },
    poemsByPage: ({}={}, { author, offset, limit }, { models }) => {
      if (author) {
        return models.Poem.findAndCountAll({
          where: {
            author
          },
          offset,
          limit
        })
      } else {
        return models.Poem.findAndCountAll({
          offset,
          limit
        })
      }
    },
    poemLike: ({}={}, { title }, { models }) => {
      return models.Poem.findAll({
        where: {
          title: {
            [Op.substring]: title
          }
        }
      })
    }
  }
}

export { typeDef, resolver } 