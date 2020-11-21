import path from 'path'
import fs from 'fs'
import { DocumentNode } from 'graphql';
import { IResolvers } from 'apollo-server-koa';
import _ from 'lodash';
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers} from './scalars'


interface Resolver {
  typeDefs: DocumentNode[],
  resolvers: IResolvers
}

const initResolver: Resolver = {
  typeDefs: [scalarTypeDefs],
  resolvers: { ...scalarResolvers }
}

const shemaFiles: string[] = fs.readdirSync(path.resolve(__dirname, 'resolvers'));
const {typeDefs, resolvers} = shemaFiles.reduce( ({ typeDefs, resolvers}, file) => {
  const { typeDef, resolver } = require(`./resolvers/${file}`)
  return {
    typeDefs: [...typeDefs, typeDef],
    resolvers: _.merge(resolvers, resolver)
  }
}, initResolver )

export { typeDefs, resolvers}