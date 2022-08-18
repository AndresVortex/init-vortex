import { Router } from 'express'
import registerUser from '../controllers/register.controller'
import validatorHandler from '../middlewares/validator.handler'
import { createUserSchema } from '../schemas/createUser.schema'

const router = Router()


router.post('/register', validatorHandler(createUserSchema, 'body'), registerUser)



export default router


