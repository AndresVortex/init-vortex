import jwt from 'jsonwebtoken'
import { config } from '../config';
import User from '../core/entities/User';
import AuthRepository, { userJwt } from '../core/repositories/authRepository';

interface PayloadJwt {
  sub: number,
  role: string,
}

export default class AuthDataSource implements AuthRepository {
  signToken(user: User): string {
    const payload: PayloadJwt = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.secret)
    return token
  }
  sendRecovery(email: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
