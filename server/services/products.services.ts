//models
import { Product } from '../dtos/product.dtos';
import ProductModel from '../models/product.model';

export const getAllProductsService = async () : Promise<Product[]> => {
    const products = await ProductModel.findAll({attributes: {exclude: ['updatedAt', 'createdAt']}});
    const productsJson = products.map(product => product.toJSON());
    return productsJson;
}


export const getProductByIDService = async (idProduct: number) : Promise<Product | null> => {
    const Product = await ProductModel.findOne({where: {id: idProduct}})
    return Product ? Product.toJSON() : null;
}

export const createProductService = async (product: Product) : Promise<number | undefined> => {
   const newProduct = await ProductModel.create(product)
   return newProduct.toJSON().id;
}


export const updateProductService = async (product: Product, idProduct: number) : Promise<number | null> => {
    const productToUpdate = await ProductModel.findByPk(idProduct);
    if (productToUpdate) {
        await productToUpdate.update(product);
        return idProduct;
     } else {
        return null;
    }
}


export const deleteProductService = async (idProduct: number) : Promise<number | null> => {
    const productToUpdate = await ProductModel.findByPk(idProduct);
    if (productToUpdate) {
        await productToUpdate.destroy();
        return idProduct;
     } else {
        return null;
    }
}