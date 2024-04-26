import express from 'express';
import cors from 'cors';

import productsController from './controllers/products.controller';


import { joiErrorHandler, verifyTokenMiddleware } from "./utils/handlers";

const server = express();


//Midlewares
//server.use(express.static('../dist'));
server.use(cors());
server.use(express.json());
server.use(verifyTokenMiddleware);


//Controllers
server.use('/products', productsController);


//Exception
server.use(joiErrorHandler);



export default server;