import {Model, DataType, Sequelize, DataTypes} from 'sequelize'
import IUser from '../../core/entities/User'
import { CreateUser } from '../../core/entities/User';

export const USER_TABLET = ' users'





export class User extends Model<IUser, CreateUser> {
  public id!: IUser['id']
  public name!: IUser['name']
  public lastName!: IUser['lastName']
  public email!: IUser['email']
  public password!: IUser['password']
  public dateBirth!: IUser['dateBirth']
  public role!: IUser['role']
  public recoveryToken!: IUser['recoveryToken']


  // timestamps!
  public readonly createdAt!: IUser['createdAt']
  public readonly updatedAt!: IUser['updatedAt']
  // public readonly deletedAt!: Date // activar paranoid



  //methods
  static associate() {
    //models associate
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLET,
      modelName: 'User',
      timestamps: true
    }
  }

}

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateBirth: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'date_birth'
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  recoveryToken: {
    allowNull: true,
    field: 'recovery_token',
    type: DataTypes.STRING,
  },
}


export default User
