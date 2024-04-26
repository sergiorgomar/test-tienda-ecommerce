
import styles from "./Header.styles.module.scss";

import { IconFactory } from "@ui/atoms";

export default function Header(){
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>
                <a href="/">E-COMMERCE TEST</a>
            </h1>
            <div className={styles.icons_container}>
                <IconFactory iconType="shoping_car" />
                <IconFactory iconType="user" />
            </div>
        </header>
    )

}