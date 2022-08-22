import AuthRepository from "../repositories/authRepository";
import IUser from '../entities/User';
import UserRepository from '../repositories/userRepository';


// const  generateToken = (authRepository: AuthRepository) =>
//  (user: IUser):string => {

//   const token = authRepository.signToken(user)

//   return token

// }
// export default generateToken

export default class Login {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
    ){
    this.authRepository= authRepository
    this.userRepository = userRepository
  }

  generateToken(user?: IUser ):string {
    const token = this.authRepository.signToken(user)
    return token
  }
  async changeStatus(id:IUser['id'], status: IUser['status'] ): Promise<IUser> {
    const  userActive = await this.userRepository.update(id, {status})
    return userActive

  }
  async changeLogin(id:IUser['id'], login: IUser['login'] ): Promise<IUser> {
    const  userLogin = await this.userRepository.update(id, {login})
    return userLogin

  }
}
