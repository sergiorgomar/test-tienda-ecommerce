
import styles from "./ProductCard.styles.module.scss";

import { ProductCardProps } from "./ProductCard.proptypes";

export default function ProductCard( {name, imgURL, price, productID} : ProductCardProps ){

    return (
        <div className={styles.card_container} onClick={() => { location.href = `/productDetail/${productID}` }}>
           <img src={imgURL} alt={`${name}_img`} />
           <p className={styles.name}>{name}</p>
           <p className={styles.price}>{price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN'})}</p>
           <div className={styles.button} >Ver más</div>
        </div>
    )

}