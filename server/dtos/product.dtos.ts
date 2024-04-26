export type Product = {
    id?: number,
    name: string,
    description?: string,
    img_url: string,
    price: number,
    height: number,
    length: number,
    width: number,
}


export type getAllProductsOutputDTO = {
    products: Product[];
}


export type getProductOutputDTO = {
    product: Product | null;
} | null


export type createProductInputDTO = {
    product: Product;
}
export type createProductOutputDTO = {
    idProduct: number;
} | null


