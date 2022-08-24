import {Model, DataType, Sequelize, DataTypes} from 'sequelize'
import IRole, {CreateRole} from '../../core/entities/Role';

export const ROLE_TABLE = 'roles'

export default class Role extends Model<IRole, CreateRole>{
  public id!: IRole['id']
  public name!: IRole['name']
  public description!: IRole['description']

   // timestamps!
  public createdAt!: IRole['createdAt']
  public updatedAt!: IRole['updatedAt']


  //methods
  static associate() {
    //models associate
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: true
    }
  }


}

export const roleSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}
