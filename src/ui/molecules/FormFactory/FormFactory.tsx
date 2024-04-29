"use client"
import { FormFactoryProps } from "./FormFactory.proptypes";
import styles from "./FormFactory.styles.module.scss";

import {  Input  /* Select */ } from "@ui/atoms";




/* 
<Select
                            key={element.identifier}
                            topText={element.topText}
                            elements={element.selectValues}
                            identifier={element.identifier}
                            dispatch={onFormChange ? onFormChange : () => { }}
                            states={element.states}
                        /> */

export default function FormFactory({ formConfig, onFormChange } : FormFactoryProps ) {

    return (
        <form className={styles.form} >
            {formConfig.map((element) => {
                if (element.formElement === "select") {
                    return <>Select</>
                } else {
                    return <Input
                        key={element.identifier}
                        placeholder={element.placeholder || ""}
                        identifier={element.identifier}
                        states={element.states}
                        dispatch={onFormChange ? onFormChange : () => { }}
                        type={element.inputType as any ?? undefined}
                        rightIcon={element.rigthIcon}
                        leftIcon={element.leftIcon}
                        rightText={element.rigthText}
                        leftText={element.leftText}
                        maxDate={element.maxDate}
                        minDate={element.minDate}
                        isRequired={element.isRequired}
                    />
                }
            })}
        </form >
    )
}