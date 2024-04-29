'use client'
import styles from './Button.styles.module.scss';
import { ButtonProps } from "./Button.proptypes";

export default function Button( {text, handleButtonClick, width } : ButtonProps) {
    return (
        <div className={styles.button} onClick={handleButtonClick} style={{width: width}}>
            {text}
        </div>
    )
}