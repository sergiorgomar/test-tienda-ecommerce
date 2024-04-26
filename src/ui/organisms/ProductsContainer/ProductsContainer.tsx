

'use client'
import { useEffect, useState } from "react";

import { GUIInvokerObserver } from "@utils/observers";
import styles from "./ProductsContainer.styles.module.scss";

import { ProductCard } from "@ui/molecules";

import { getAllProductsService } from "@frontendServices"

import { Product } from "@appTypes/services.types";

import useFetching from "@hooks/useFetching";

export default function ProductContainer(){

    const [products, setProducts] = useState<Product[] | null>();

    const { makeFetchGet } = useFetching();

    useEffect(() => {
        makeFetchGet(getAllProductsService, "Obteniendo productos")
        .then(data => {
            if(data) {  
                setProducts(data.products)
            }
        })
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.title_container}>
                <p className={styles.title}>Productos</p>
            </div>
            <div className={styles.cards_container}>
                { products ? 
                    products.map((product) => {
                        return (
                            <ProductCard 
                                key={product.id}
                                productID={product.id}
                                name={product.name}
                                imgURL={product.img_url}
                                price={product.price}
                            />
                        )
                    })
                : <p>No se han encontrado productos</p>}
            </div>
        </section>
    )

}