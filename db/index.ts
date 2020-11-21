import { Sequelize } from 'sequelize-typescript'
import appConfig from '../config'
import * as models from './models'


const sequelize = new Sequelize({
  ...appConfig.db,
  define: {
    timestamps: false
  }
});

sequelize.addModels(Object.values(models));

export default sequelize
export { models }