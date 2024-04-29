
'use client'
import { useEffect, useMemo, useState } from "react";
import styles from "./ProductContainer.styles.module.scss";
import { ProductContainerProps } from "./ProductContainer.proptypes";

import useFetching from "@hooks/useFetching";

import { getProductByIDService } from "@frontendServices"

import { Product } from "@appTypes/services.types";

import { GiantModal, SendForm } from "@ui/molecules";

export default function ProductContainer( { idProduct } : ProductContainerProps ){

    const { makeFetchPost } = useMemo(useFetching, []);

    const [product, setProduct] = useState<Product | null | undefined>(undefined);
    const [isGiantModal, setIsGiantModal] = useState(false)

    useEffect(() => {
        makeFetchPost(getProductByIDService, idProduct, "Obteniendo producto")
        .then(data => {
            if(data) {  
                setProduct(data.product)
            }
        })
    }, [makeFetchPost, idProduct]);
    
    return (
        <section className={styles.container}>
            
            <GiantModal visibility ={isGiantModal} onClose={() => setIsGiantModal(false)}>
                <SendForm 
                    isGiantModal={isGiantModal}
                    closeGiantModal={() => { setIsGiantModal(false); }}
                />
            </GiantModal>

            {product !== undefined ? 
                <>
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
                                        <div className={styles.button} onClick={() => setIsGiantModal(true) }>Comprar</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </>
            : <p>Obteniendo producto..</p>}
        </section>
    )

}

