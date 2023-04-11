import { Controller } from '../core/interfaces/controllers';
import { Request, Response } from 'express';
import { HttpRequest } from '../core/interfaces/http-interface';
export const AdapterRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      user: req.user
    }

    const httpResponse = await controller.handle(httpRequest)

    return res.status(httpResponse.statusCode).json({
      success: httpResponse.success,
      message: httpResponse.message,
      body: httpResponse.body
    })
  }
}
