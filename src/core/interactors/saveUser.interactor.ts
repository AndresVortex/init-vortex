import User from "../entities/User";
import UserRepository from '../repositories/userRepository';
import EncryptRepository from '../repositories/authRepository';
import NotifierRepository from "../repositories/notifierRespository";
import AuthRepository from '../repositories/authRepository';

const saveUser = (
  userRepository: UserRepository,
  authRepository: AuthRepository,
  notifierRepository: NotifierRepository
  ) => async (user: User): Promise<{user: User, token: string }> => {


  //Crear usuario
  const newUser = await userRepository.create(user)

  const token  = await  authRepository.signToken(newUser)
  //Notificar por correo al usuario creado
  notifierRepository.notifyUser(newUser)

  //Return del usuario creado
  return {user: newUser, token}

}

export default saveUser
