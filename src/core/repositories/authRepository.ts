import IUser from '../entities/User';


export default interface AuthRepository {
  getUser(email: string, password: string): Promise<IUser>
  signToken(user?: IUser ): string;
  sendRecovery(email: IUser['email']): Promise<void>;
}
