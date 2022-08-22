import { Router } from 'express'
import passport from 'passport'

import Login from '../controllers/login/login.controller'
import logOut from '../controllers/login/logout.controller'


const router = Router()


// Ruta para iniciar sesión
router.post('/login',
  passport.authenticate('local', {session: false}),
  Login
)


//Ruta para cerrar sesión
router.get('/logout', passport.authenticate('jwt', { session: false }), logOut)

export default router


