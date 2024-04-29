"use client"
import { ChangeEvent, useState, useRef, useEffect } from "react";
import * as proptypes from "./Input.proptypes";
import styles from "./Input.styles.module.scss";
import { IconFactory } from "@ui/atoms";
import { FormFieldStates, FormFieldMoods } from "@appTypes/forms.types";

export default function Input({
    placeholder,
    identifier,
    states,
    isRequired=false, 
    leftIcon,
    rightIcon,
    rightText,
    leftText,
    dispatch,
    type,
    maxDate,
    minDate,
} : proptypes.InputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        const mood = states.mood;
        let value = states.value;

        if (mood === "disabled") return -1;

   

        const newStates: FormFieldStates = {
            value: value,
            mood: mood === "error" ? "error" : "active",
            helperText: mood === "error" ? states.helperText : ""
        }
        dispatch(newStates, identifier, "focus");
    }

    const handleDesFocus = () => {
        const mood = states.mood;
        let value = states.value;

        if (states.mood === "disabled") return -1;

        const moodFilled = states.value ? ("filled"): ("default");
        const newStates: FormFieldStates = {
            value: value,
            mood: mood === "error" ? "error" : moodFilled,
            helperText: mood === "error" ? states.helperText : ""
        }
        dispatch(newStates, identifier, "blur");
    };

    /* Para cambiar el valor de input */
    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {

        if (states.mood === "disabled") return -1;

        let value = event.target.value;
        let mood : FormFieldMoods = value ? ("filled") : ("active");
        let helperText = "";

        
        if (type === "only_text") {
            //este regex acepta texto sin numeros, acepta texto con espacios y cadenas vacias
            let regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(value) ) return;
        }

        if (type === "zip_code") {
            //Soloa cepta numeros y que longitud no sea mayor a 5
            let regex = /^\d{0,5}$/;
            if (!regex.test(value) ) return;
        }

        if (type === "phone") {
            //Soloa cepta numeros y longitud no mayor a 10
            let regex = /^\d{0,10}$/;
            if (!regex.test(value) ) return;
        }

        if (type === "positive_number") {
            //Soloa cepta numeros
            let regex = /^\d+$/;
            if (!regex.test(value) ) return;
        }

        if (type === "email") {
            //siempre en minisculas
            value = value.toLowerCase()
        }


        const newStates: FormFieldStates = {
            value: value,
            mood: mood,
            helperText: helperText
        }

        dispatch(newStates, identifier, "change");
    };

    return (
        <div className={styles.container + " " + styles[`${states.mood}`]} >
            <div className={styles.input_container} onFocus={handleFocus} onBlur={handleDesFocus} >
                <span
                    className={styles.top_text + " " + (states.mood !== "default" ? styles.span_fijo_arriba : undefined) }
                    onClick={() => { if (inputRef.current) inputRef.current.focus() }}
                >
                    { placeholder ? isRequired ? `${placeholder}*` : placeholder : "" }
                </span>
                {leftIcon ? <IconFactory iconType={leftIcon} /> : null}

                {leftText ? <span className={styles.texts}>{leftText}</span> : null }

                <input
                    ref={inputRef}
                    value={states.value}
                    type={type ? type : "text"}
                    onChange={handleChangeValue}
                    disabled={states.mood === "disabled"}
                    max={maxDate?.toISOString().split("T")[0]}
                    min={minDate?.toISOString().split("T")[0]}
                />

                {rightIcon ? <IconFactory iconType={rightIcon} /> : null}

                {rightText ? <span className={styles.texts}>{rightText}</span> : null }

            </div>

            { states.helperText ? <span className={styles.helper_text}>{states.helperText}</span> : null}

        </div>
    );
}