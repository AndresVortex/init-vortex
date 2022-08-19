// import saveUser from '../core/interactors'
import {login} from '../core/interactors'

import {Request, Response, NextFunction} from 'express'
import respuesta from '../helpers/respuesta'
import IUser from '../core/entities/User';


const Login = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const user: any = req.user
    const data: IUser = {
      ...user
    }
    const token = login.generateToken(data)

    return respuesta(res, true, 200, 'Registro completado', {user, token} )

  } catch (error) {
    next(error)
  }
}




export default Login