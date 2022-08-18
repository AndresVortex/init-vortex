import {Express, Router} from 'express'
import usersRouter from './user.routes'


export default function routesApi(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/user', usersRouter )
}
