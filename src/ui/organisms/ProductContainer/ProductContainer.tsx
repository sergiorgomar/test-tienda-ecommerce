
'use client'
import { useEffect, useState } from "react";

import { ProductContainerProps } from "./ProductContainer.proptypes";

import styles from "./ProductContainer.styles.module.scss";

import { getProductByIDService } from "@frontendServices"

import { Product } from "@appTypes/services.types";

import useFetching from "@hooks/useFetching";

import { GiantModal } from "@ui/molecules";

export default function ProductContainer( {idProduct } : ProductContainerProps ){

    const [product, setProduct] = useState<Product | null>();

    const [isBuyedClick, setIsBuyedClick] = useState(false)

    const { makeFetchPost } = useFetching();

    useEffect(() => {
        makeFetchPost(getProductByIDService, idProduct, "Obteniendo producto")
        .then(data => {
            if(data) {  
                setProduct(data.product)
            }
        })
    }, [])

    return (
        <section className={styles.container}>
            
            <GiantModal visibility ={isBuyedClick} onClose={() => setIsBuyedClick(false)}>
                FORM DE ENVIO
            </GiantModal>
            
            {product && 
                <>
                    <div className={styles.title_container}>
                        <p className={styles.title}>{product.name}</p>
                    </div>
                    <div className={styles.product_container}>
                        <div className={styles.product_content}>
                            <img src={product.img_url} alt={`${name}_img`} />
                            <div className={styles.description_container}>
                                <p className={styles.name}>{product.name}</p>
                                <p className={styles.price}>{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN'})}</p>
                                <div className={styles.button} onClick={() => setIsBuyedClick(true) }>Comprar</div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    )

}

