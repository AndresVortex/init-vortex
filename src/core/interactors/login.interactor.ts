import AuthRepository from "../repositories/authRepository";
import IUser from '../entities/User';


// const  generateToken = (authRepository: AuthRepository) =>
//  (user: IUser):string => {

//   const token = authRepository.signToken(user)

//   return token

// }
// export default generateToken

export default class Login {

  constructor(private readonly authRepository: AuthRepository){
    this.authRepository= authRepository
  }

  generateToken(user?: IUser ):string {
    const token = this.authRepository.signToken(user)
    return token
  }
}
