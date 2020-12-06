// import { Op } from 'sequelize'
import { models } from './db'

// models.Poem.findAll({
//   where: {
//     title: {
//       [Op.substring]: '爱'
//     }
//   }
// }).then(res => {
//   console.log(res)
// })

models.Poem.findAll({
  limit: 10
}).then(res => {
  console.log(res)
})
