import { _$post, _$get } from "@utils/fetching";
import * as ServicesTypes from "@appTypes/services.types";

const authTokenLocal = process.env.NEXT_PUBLIC_LOCAL_AUTH_TOKEN;
export async function getAllProductsService() {
    const path = `/products/getAllProducts`;
    const response = await _$get<ServicesTypes.getAllProductsOutput>(
        path, authTokenLocal,
    );
    return response;
}

export async function getProductByIDService( idProduct: number ) {
    const path = `/products/getProduct/${idProduct}`;
    const response = await _$get<ServicesTypes.getProductOutput>(
        path, authTokenLocal,
    );
    return response;
}