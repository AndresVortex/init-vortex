import User from "../../entities/User";
import UserRepository from '../../repositories/userRepository';
import NotifierRepository from "../../repositories/notifierRespository";
import AuthRepository from '../../repositories/authRepository';
import { Interactors } from '../../interfaces/interactors';


//!Clase
export default class SaveUser  {

  constructor(
    private readonly userRepository: UserRepository,
    private readonly notifierRepository: NotifierRepository) {
      this.notifierRepository = notifierRepository
      this.userRepository = userRepository
  }

  async handle(user: User ): Promise<{}> {
    // Crear usuario
    const newUser = await this.userRepository.create(user)
    return {}
  }

}


//!Función
// const saveUser = (
//   userRepository: UserRepository,
//   notifierRepository: NotifierRepository
//   ) => async (user: User): Promise<{user: User, token?: string }> => {


//   //Crear usuario
//   const newUser = await userRepository.create(user)

//   //Notificar por correo al usuario creado
//   notifierRepository.notifyUser(newUser)

//   //Return del usuario creado
//   return {user: newUser}

// }

// export default saveUser

// export default class SaveUser  {

//   constructor(
//     private readonly userRepository: UserRepository,
//     private readonly notifierRepository: NotifierRepository) {
//       this.notifierRepository = notifierRepository
//       this.userRepository = userRepository
//   }

//   async handle(data: {}): Promise<{}> {
//     return {}
//   }

// }
