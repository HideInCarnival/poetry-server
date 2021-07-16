import { gql } from 'apollo-server-koa'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const typeDefs = gql`
  scalar Date
`

const myDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value)
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10)
    }
    else return null
  }
})

const resolvers = {
  Date: myDate
}

export { typeDefs, resolvers }