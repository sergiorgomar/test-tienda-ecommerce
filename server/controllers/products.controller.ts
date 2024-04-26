import { Response, Router } from 'express';
const router = Router();

//services
import { getAllProductsService, getProductByIDService, createProductService, updateProductService, deleteProductService } from '../services/products.services';

//schemas 
import productSchema from '../schemas/product.schema';

//dtos
import { createProductOutputDTO, getAllProductsOutputDTO, getProductOutputDTO } from '../dtos/product.dtos';
import { HTTPResponse } from '../dtos/application.dtos';

import { toJSONResponse, /* fabricateJSONResponse */ } from "../utils/handlers"


//Obtener todos los productos
router.get('/getAllProducts', async (_, res: Response<HTTPResponse<getAllProductsOutputDTO>>) => {
    const products = await getAllProductsService();
    return res.status(200).json(toJSONResponse<getAllProductsOutputDTO>(
        "Productos obtenidos con éxito",
        true,
        { products: products}
    ));
});


router.get('/getProduct/:productID', async (req, res: Response<HTTPResponse<getProductOutputDTO>>) => {

    const productID = req.params.productID;
    if (!productID || isNaN(Number(productID))) {
        return res.status(400).json(toJSONResponse("ID de producto inválido", true, null));
    }
    
    const product = await getProductByIDService(Number(productID));
    return res.status(product ? 200 : 404).json(toJSONResponse<getProductOutputDTO>(
        product ? "Producto obtenido con éxito" : "Producto no encontrado",
        product ? true : false,
        { product: product }
    ));

});


router.post('/createProduct', async (req, res: Response<HTTPResponse<createProductOutputDTO>>, next) => {
    const product = req.body;

    const { error } = productSchema.validate(product);
    if (error) {
        return next(error);
    }

    const idProduct = await createProductService(product);

    return res.status(idProduct ? 200 : 500).json(toJSONResponse<createProductOutputDTO>(
        idProduct ? "Producto creado con éxito" : "Producto no creado, error del servidor.",
        idProduct ? true : false,
        idProduct ? { idProduct: idProduct } : null
    ));
  
});


router.put('/updateProduct/:productID', async (req, res: Response<HTTPResponse<createProductOutputDTO>>, next) => {

    const productID = req.params.productID;
    if (!productID || isNaN(Number(productID))) {
        return res.status(400).json(toJSONResponse("ID de producto inválido", true, null));
    }

    const product = req.body;

    const { error } = productSchema.validate(product);
    if (error) {
        return next(error);
    }

    const idProduct = await updateProductService(product, Number(productID));

    return res.status(idProduct ? 200 : 500).json(toJSONResponse<createProductOutputDTO>(
        idProduct ? "Producto actualizado con éxito" : "Producto no actualizado, error del servidor.",
        idProduct ? true : false,
        idProduct ? { idProduct: idProduct } : null
    ));

  
});


router.delete('/deleteProduct/:productID', async (req, res, next) => {
    const productID = req.params.productID;
    if (!productID || isNaN(Number(productID))) {
        return res.status(400).json(toJSONResponse("ID de producto inválido", true, null));
    }

    const product = req.body;
    const { error } = productSchema.validate(product);
    if (error) {
        return next(error);
    }

    const idProduct = await deleteProductService(Number(productID));

    return res.status(idProduct ? 200 : 500).json(toJSONResponse<createProductOutputDTO>(
        idProduct ? "Producto eliminado con éxito" : "Producto no eliminado, error del servidor.",
        idProduct ? true : false,
        idProduct ? { idProduct: idProduct } : null
    ));
});



export default router;