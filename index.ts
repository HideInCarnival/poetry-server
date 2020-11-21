import Koa from 'koa'
import { typeDefs, resolvers } from './src'
import { ApolloServer } from 'apollo-server-koa'
import { models } from './db'

const app = new Koa()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }: { ctx: Koa.Context}) => {
    const body = ctx.request.body
    return {
      body,
      models
    }
  }
});

server.applyMiddleware({app});
const port = process.env.PORT || 4000
app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})
