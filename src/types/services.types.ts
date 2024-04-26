
export type Product = {
    id: number,
    name: string,
    description: string,
    img_url: string,
    price: number,
    height: number,
    length: number,
    width: number,
}



export type getAllProductsOutput = {
    products: Array<Product>
}


export type getProductOutput = {
    product: Product
}