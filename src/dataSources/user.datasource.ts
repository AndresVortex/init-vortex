import bcrypt from 'bcrypt'
import User from '../core/entities/User';
import UserRepository from '../core/repositories/userRepository';
// import sequelize from '../libs/sequelize'
import UserModel from '../db/models/user.model'
import { CreateUser } from '../core/entities/User';


export default class UserDataSource implements UserRepository {

  public async create(user: CreateUser): Promise<User> {


    const hash = await bcrypt.hash(user.password, 10)
    const userHash = {
      ...user,
      password: hash
    }
    const newUser = await UserModel.create(userHash)
    return newUser

  }
}
