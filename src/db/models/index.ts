import { Sequelize } from 'sequelize';
import { USER_TABLET, User, userSchema } from './user.model';


export default function setupModels(sequelize: Sequelize){
  User.init(userSchema, User.config(sequelize))
}

