import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import IUser from '../../core/entities/User';
import { listUser } from '../../core/interactors';
const createRole = async (req: Request, res: Response, next: NextFunction) => {

  try {


    return respuesta(res, true, 200, 'Creación del rol completa', )

  } catch (error) {
    next(error)
  }
}

export default createRole
