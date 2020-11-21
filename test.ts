import { models } from './db'

models.Poem.findByPk(2).then(res => {
  console.log(res)
})

