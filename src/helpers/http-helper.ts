import { HttpResponse } from '../core/interfaces/http-interface';
import { ServerError } from './server-error';


export const success = <T>(data: T, message: string, success=true) : HttpResponse => ({
  statusCode: 200,
  body: data,
  message,
  success

})

export const serverError = (error: Error | unknown,  message= 'Algo salio mal', success=false) : HttpResponse => ({
  statusCode: 500,
  body: error instanceof Error ? new ServerError(error.stack) : 'Error sin identificar',
  message,
  success

})
