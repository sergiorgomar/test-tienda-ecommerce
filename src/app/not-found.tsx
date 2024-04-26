import styles from "./not-found.styles.module.scss";
export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>404</h1>
                <h4>Página no encontrada.</h4>
                <h6><a href="/">Ir a inicio</a></h6>
            </div>
        </div>
    )

}