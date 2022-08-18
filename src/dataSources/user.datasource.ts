import bcrypt from 'bcrypt'
import User from '../core/entities/User';
import UserRepository from '../core/repositories/userRepository';
// import sequelize from '../libs/sequelize'
import UserModel from '../db/models/user.model'
import { CreateUser } from '../core/entities/User';
import Boom from '@hapi/boom';


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
  async getByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw Boom.badRequest()
    }
    return user
  }
}
