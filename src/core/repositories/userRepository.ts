import User from "../entities/User";
import { CreateUser } from '../entities/User';

export default interface UserRepository {
  getByEmail(email: User['email']): Promise<User>;
  create(user: CreateUser): Promise<User>;
}
