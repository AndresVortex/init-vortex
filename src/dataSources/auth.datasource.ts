import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';



import { config } from '../config';
import IUser from '../core/entities/User';
import AuthRepository from '../core/repositories/authRepository';

import UserDataSource from './user.datasource'
import EmailNotifier from './emailNotify.datasource';
const userDataSource = new UserDataSource()
const emailDataSource = new EmailNotifier()
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
    const user =   await userDataSource.getByEmail(email)
    if(!user){
      throw (boom.unauthorized())
    }
    const payload = {
      sub: user.id
    }
    const token = jwt.sign(payload,config.secretPassword, {expiresIn: '15min'})
    const link = `https://urlfront/recovery?token=${token}`
    await userDataSource.update(user.id, {recoveryToken: token })
    const mail = {
      from: config.emailUser,
      to: `${user.email}`,
      subject: "Recuperar contraseña",
      html: `<h1> Ingresa a este link para recuperar la contraseña  --> ${link} </h1>`
    }
    emailDataSource.sendMail(mail)
  }
  async getUser(email: string, password: string): Promise<IUser> {
    const user = await userDataSource.getByEmail(email)
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch){
      throw (boom.unauthorized())
    }
    return user
  }
  async changePassword(token: string, newPassword: string): Promise<void> {
    try {

      const {sub } = jwt.verify(token, config.secretPassword)

      const id = parseInt(sub as string)
      const user = await userDataSource.getById(id)

      if (user.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const hash = await bcrypt.hash(newPassword, 10)
      userDataSource.update(user.id, {password: hash, recoveryToken: ''})
    } catch (error) {
      throw boom.unauthorized('Error al cambiar a contraseña')
    }

  }



}
