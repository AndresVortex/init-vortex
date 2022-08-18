import User from "../entities/User";
import { CreateUser } from '../entities/User';

export default interface UserRepository {
  // getById(id: User['id']): Promise<User>;
  create(user: CreateUser): Promise<User>;
}
