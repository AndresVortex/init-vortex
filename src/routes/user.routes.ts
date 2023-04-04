import { Router } from 'express'
import passport from 'passport'
import getUsers from '../controllers/users/getUsers.controller'
import registerUser from '../controllers/users/register.controller'
import updateUser from '../controllers/users/update.controllers'
import validatorSession from '../middlewares/validate.sesion'
import validatorHandler from '../middlewares/validator.handler'
import { changeStatusUserSchema, createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema'
import { userRepository } from '../core/interactors/index';
import { checkRoles } from '../middlewares/auth.handler'
import { roles } from '../config'
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/create-user';
import { makeGetUsersController } from '../factory/user/get-users';
import { makeUpdateUserController } from '../factory/user/update-user';

const router = Router()

//Ruta para registrar usuarios
//!V2
router.post('/register', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()) )
//!V1
// router.post('/register',
//   passport.authenticate('jwt', { session: false }),
//   validatorHandler(createUserSchema, 'body'),
//   registerUser
// )

//Ruta para editar usuarios
router.put('/update/:id',
  // passport.authenticate('jwt', { session: false }),
  // validatorSession(userRepository),
  // checkRoles(roles.admin),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  AdapterRoute(makeUpdateUserController())
)

//Ruta para listar usuarios
//!V2
router.get('/list', AdapterRoute(makeGetUsersController()))
//!V1
// router.get('/list', getUsers)


//Ruta pra deshabilitar usuarios
router.put('/change-status/:id',
  // passport.authenticate('jwt', {session: false} ),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(changeStatusUserSchema, 'body'),
  AdapterRoute(makeUpdateUserController())
)



export default router


