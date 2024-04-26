import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import { HTTPResponse } from "../dtos/application.dtos";

import TokenModel from "../models/token.model";

// Middleware para manejar errores de validación de Joi
export const joiErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Joi.ValidationError) {
    // Si es una excepción de validación de Joi, respondemos con un código de estado 400 y los detalles del error
    return res.status(422).json({ 
        success: false,
        message: "Error validando esquema de datos de entrada.",
        payload: {
            error: err.details.map(detail => detail.message)
        },
     });
  } else {
    // Si no es una excepción de validación de Joi, pasamos al siguiente middleware de manejo de errores
    next(err);
  }
}


export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  const authorizationHeader = req.headers['authorization'];

  //If token is not provided
  if (!authorizationHeader) {
    return res.status(401).json(toJSONResponse("Token de autorización es requerido.", false));
  } 

  const tokenValue = authorizationHeader?.split(" ")[1]
  //if token provided does not have the correct format, bearer autorization
  if (!tokenValue) {
    return res.status(401).json(toJSONResponse("Formato de token inválido. Proporcione el formato Bearer <token>", false));
  }

  const tokenFinded = await TokenModel.findOne({where: {token: tokenValue}})
  //if token value provided does not exist on database
  if (!tokenFinded) {
    return res.status(401).json(toJSONResponse("Token inválido", false));
  }

  next();
}


export const toJSONResponse = <TPayload>(message: string = "", success: boolean = true, payload: TPayload | null = null ) : HTTPResponse<TPayload>=> {
  return {
    success: success, 
    message: message, 
    payload: payload
  }
}


/* export const fabricateJSONResponse = <TPayload>(codeStatus: number, payload: TPayload, success: boolean = true) => : Response {
  return new Response()
} */