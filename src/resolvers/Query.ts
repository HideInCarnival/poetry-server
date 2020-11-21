import { gql, IResolverObject } from 'apollo-server-koa'

const typeDef = gql`
  type Query {
    hello: String
  }
`

const resolver: IResolverObject = {
  Query: {
    hello: () => 'hello,world!'
  }
}

export { typeDef, resolver }