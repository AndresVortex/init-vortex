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
  constructor(){}
  signToken(user: IUser): string {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.secret)
    return token
  }
  async sendRecovery(email: string): Promise<void> {
    // const user =   await service.findByEmail(email)
    // if(!user){
    //   throw (boom.unauthorized())
    // }
    // const payload = {
    //   sub: user.id
    // }
    // const token = jwt.sign(payload,config.secret, {expiresIn: '15min'})
    // const link = `https://urlfront/recovery?token=${token}`
    // await service.update(user.id, {recoveryToken: token })
    // const mail = {
    //   from: 'nacicar@gmail.com',
    //   // to: 'andrescamachoclaros@gmail.com',
    //   to: `${user.email}`,
    //   subject: "Recuperar contraseña",

    //   html: `<h1> Ingresa a este link para recuperar la contraseña  --> ${link} </h1>`
    // }
    // this.sendMail(mail)
  }
  async getUser(email: string, password: string): Promise<IUser> {
    const user = await userDataSource.getByEmail(email)
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch){
      throw (Boom.unauthorized())
    }
    return user
  }

}
