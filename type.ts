import { models } from './db'


export type Models = typeof models

export interface graphContext {
  models: Models
}