import IUser, { UpdateUser } from '../entities/User';
import UserRepository from '../repositories/userRepository';


// const  generateToken = (authRepository: AuthRepository) =>
//  (user: IUser):string => {

//   const token = authRepository.signToken(user)

//   return token

// }
// export default generateToken

export default class UpdateUsers {

  constructor(private readonly userRepository: UserRepository){
    this.userRepository= userRepository
  }

  async handle(id: IUser['id'], changes: UpdateUser ): Promise<any> {
    const user = await this.userRepository.update(id, changes)
    return user
  }
}
