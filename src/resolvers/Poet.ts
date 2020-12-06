import { gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type'
import { Op } from 'sequelize'
const typeDef = gql`
  type Poet {
    id: ID!
    name: String!
    introduction: String!
    nationality: String!
  }

  type PoetRow {
    dataValues: Poet
  }

  type PoetPage {
    count: Int
    rows: [PoetRow]
  }

  extend type Query {
    poet (id: ID): Poet
    poets (nationality: String): [Poet]
    poetsByPage (nationality: String, offset: Int!, limit: Int!): PoetPage
    poetLike (name: String!): [Poet]
  }
`

const resolver:IResolverObject<any, graphContext> = {
  Query: {
    poet: ({}={}, { id }, { models }) => {
      return models.Poet.findByPk(id)
    },
    poets: ({}={}, { nationality }, { models }) => {
      if (nationality) {
        return models.Poet.findAll({
          where: {
            nationality
          }
        })
      } else {
        return models.Poet.findAll()
      }
    },
    poetsByPage: ({}={}, { nationality, offset, limit }, { models }) => {
      if (nationality) {
        return models.Poet.findAndCountAll({
          where: {
            nationality
          },
          offset,
          limit
        })
      } else {
        return models.Poet.findAndCountAll({
          offset,
          limit
        })
      }
    },
    poetLike: ({}={}, { name }, { models }) => {
      return models.Poet.findAll({
        where: {
          name: {
            [Op.substring]: name
          }
        }
      })
    }
  }
}

export { typeDef, resolver }