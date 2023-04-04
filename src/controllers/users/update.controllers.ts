// import saveUser from '../core/interactors'
import {userUpdates} from '../../core/interactors'

import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import IUser from '../../core/entities/User';
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import UserRepository from '../../core/repositories/userRepository';
import { CreateUser } from '../../core/entities/User';


// const updateUser = async(req: Request, res: Response, next: NextFunction) => {
//   try {
//     const id = parseInt(req.params.id)

//     const userUpdate = await userUpdates.handle(id, req.body)
//     return respuesta(res, true, 200, 'Registro completado', userUpdate )

//   } catch (error) {
//     next(error)
//   }
// }




// export default updateUser


export default class UpdateUser implements Controller {

  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const user = await this.userRepository.update(httpRequest.params.id, httpRequest.body)

    try {

      return success<IUser>(user, 'Usuario actualizado')
    } catch (error) {
      return serverError(error)
    }
  }
}
