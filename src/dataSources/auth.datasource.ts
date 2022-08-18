import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import { config } from '../config';
import IUser from '../core/entities/User';
import AuthRepository from '../core/repositories/authRepository';

import UserDataSource from './user.datasource'
const userDataSource = new UserDataSource()
interface PayloadJwt {
  sub: number,
  role: string,
}

export default class AuthDataSource implements AuthRepository {
  signToken(user: IUser): string {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.secret)
    return token
  }
  sendRecovery(email: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async getUser(email: string, password: string): Promise<IUser> {
    const user = await userDataSource.getByEmail(email)
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      throw (Boom.unauthorized())
    }
    return user
  }

}
