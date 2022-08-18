import User from '../entities/User';

export interface userJwt {
  user: User,
  token: string
}
export default interface AuthRepository {
  signToken(user: User): string;
  sendRecovery(email: User['email']): Promise<void>;
}
