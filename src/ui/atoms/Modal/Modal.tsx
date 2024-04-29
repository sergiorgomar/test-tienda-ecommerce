"use client"
import { useState, useEffect, useMemo } from "react";
import * as proptypes from "./Modal.proptypes";
import styles from "./Modal.styles.module.scss";
import { IconFactory } from "@ui/atoms";
/* import { Button } from "@ui/atoms"; */

///On close es una funcion que se reemplza el cerrar modal desde fuera se controla desde fuera
export default function Modal({title, message, onClose, buttonsProps } : proptypes.ModalProps) {

    const handleKeyDown = useMemo(() => (event: KeyboardEvent) => {
        event.preventDefault();
        if (event.key === 'Escape') onClose();
    }, [onClose])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (

        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.modal_header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.icon} onClick={onClose}>
                        <IconFactory iconType="close"/>
                    </div>
                </div>

                <div className={styles.modal_message}>
                    <p>{message}</p>
                </div>


                <div className={styles.modal_footer}>

                    {buttonsProps?.cancelButton &&
                        <div className={styles.button_container}>
                            {/* <Button
                                onClick={buttonsProps.cancelButton.handleClick}
                                text={buttonsProps.cancelButton.text}
                                buttonType={buttonsProps.cancelButton.type}
                            /> */}
                        </div>
                    }

                    {buttonsProps?.acceptButton &&
                        <div className={styles.button_container}>
                           {/*  <Button
                                onClick={buttonsProps.acceptButton.handleClick}
                                text={buttonsProps.acceptButton.text}
                                buttonType={buttonsProps.acceptButton.type}
                            /> */}
                        </div>
                    }

                </div>

            </div>
        </div>

    );
}