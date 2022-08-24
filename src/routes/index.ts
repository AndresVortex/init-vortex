import {Express, Router} from 'express'
import usersRouter from './user.routes'
import loginRouter from './auth.routes'
import rolRouter from './rol.routes'

import validatorSession from '../middlewares/validate.sesion';
import passport from 'passport';
import { userRepository } from '../core/interactors/index';

export default function routesApi(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/rol',passport.authenticate('jwt', {session: false} ), validatorSession(userRepository), rolRouter)
  router.use('/', loginRouter )
  router.use('/user', usersRouter )

}
