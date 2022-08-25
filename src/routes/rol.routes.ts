import { Router } from 'express'
import passport from 'passport'

import recoveryPassword from '../controllers/auth/recoveryPassword.controller'
import validatorHandler from '../middlewares/validator.handler';
import { createRoleSchema, updateRoleSchema, getRoleSchema} from '../schemas/role.schema';
import changePassword from '../controllers/auth/changePassword.controller';
import refreshToken from '../controllers/auth/refreshToken.controller'
import createRole from '../controllers/roles/createRole.controller'
import getDetailRole from '../controllers/roles/getDetailRole.controller';


const router = Router()





//Ruta para crear rol
router.post('/', validatorHandler(createRoleSchema, 'body'), createRole )


//Ruta para listar los roles
router.get('/' , changePassword)


//Ruta para ver el detalle de un  rol
router.get('/:id',validatorHandler(getRoleSchema, 'params') , getDetailRole )

//Ruta para actualizar un rol
router.put('/:id', validatorHandler(updateRoleSchema, 'body'), validatorHandler(getRoleSchema, 'params'), recoveryPassword )

//Ruta para eliminar rol
router.delete('/:id', validatorHandler(getRoleSchema, 'body'), recoveryPassword )

export default router


