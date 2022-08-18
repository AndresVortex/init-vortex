import boom  from '@hapi/boom'
import { NextFunction, Request, Response } from 'express';
import  { config } from '../config'
// import  { api_key } = config

// function checkApiKey ( req, res, next){
//   const apiKey = req.headers['api']
//   if(apiKey === api_key ){
//     next()
//   }else {
//     next(boom.unauthorized())
//   }

// }

function checkAdminRole(req: Request, res: Response, next: NextFunction){
  const user = req.user;
  if(user.role === 'admin'){
    next()
  }else {
    next(boom.unauthorized())
  }
}

function checkRoles (...roles: string[]){
  return (req: Request, res: Response, next: NextFunction ) => {
    const user = req.user;
  if(roles.includes(user.role)){
    next()
  }else {
    next(boom.unauthorized())
  }
  }
}


module.exports = {  checkAdminRole, checkRoles }
