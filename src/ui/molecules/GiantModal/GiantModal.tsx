"use client"
import { useRef, useEffect } from "react";
import * as proptypes from "./GiantModal.proptypes";
import styles from "./GiantModal.styles.module.scss";
import { IconFactory } from "@ui/atoms";

export default function GiantModal( { onClose, children, visibility } : proptypes.GiantModalProps ) {

    const modalContainerRef = useRef<HTMLDivElement | null>(null);


    const handleKeyDown = (event: KeyboardEvent) => {
        /* if (event.key === 'Escape') {
            onClose && onClose();
        } */
    };
    const handleMouseDown = (event: MouseEvent) => {
        /* if (modalContainerRef.current && !modalContainerRef.current.contains(event.target as Node)) {
          onClose && onClose();
        } */
    };


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);


    return (
        <>
            <div className={`${styles.container} ${styles[`container_`]} ${visibility ? styles.container_visible : styles.container_invisible}`} >
                <div className={styles.content} ref={modalContainerRef}>
                    <div className={styles.header}>
                        <div onClick={() => onClose && onClose()}><IconFactory iconType="close" fill="#000"/></div>
                    </div>
                    <div className={styles.children_content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}