import { Router } from 'express'
import passport from 'passport'
import Login from '../controllers/login.controller'
import registerUser from '../controllers/register.controller'
import updateUser from '../controllers/update.controllers'
import validatorHandler from '../middlewares/validator.handler'
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema'

const router = Router()


router.post('/register',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createUserSchema, 'body'),
  registerUser
)

router.put('/edit/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
)

router.post('/login',
  passport.authenticate('local', {session: false}),
  Login
)

export default router


