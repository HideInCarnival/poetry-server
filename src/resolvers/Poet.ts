import { gql, IResolverObject } from 'apollo-server-koa'
import { graphContext } from '../../type'

const typeDef = gql`
  type Poet {
    id: ID!
    name: String!
    introduction: String!
    nationality: String!
  }

  extend type Query {
    poet (id: ID): Poet
    poets (nationality: String): [Poet]
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
    }
  }
}

export { typeDef, resolver }