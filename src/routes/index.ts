import {Express, Router} from 'express'
import usersRouter from './user.routes'
import loginRouter from './login.routes'
import validatorSession from '../middlewares/validate.sesion';


export default function routesApi(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/', loginRouter )
  router.use('/user', usersRouter )

}
