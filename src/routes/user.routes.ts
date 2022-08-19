import { Router } from 'express'
import passport from 'passport'
import Login from '../controllers/login.controller'
import registerUser from '../controllers/register.controller'
import validatorHandler from '../middlewares/validator.handler'
import { createUserSchema } from '../schemas/createUser.schema'

const router = Router()


router.post('/register',passport.authenticate('jwt', { session: false }), validatorHandler(createUserSchema, 'body'), registerUser)

router.get('/login', passport.authenticate('local', {session: false}), Login)

export default router


