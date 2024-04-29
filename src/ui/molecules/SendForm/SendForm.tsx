
'use client'
import { useEffect, useState } from "react";
import styles from "./SendForm.styles.module.scss";
import { SendFormProps, DEFAULT_SEND_FORM_STATE } from "./SendForm.proptypes";

import { FormConfig } from "@appTypes/forms.types";

import { Button } from "@ui/atoms";
import { FormFactory } from "@ui/molecules";

import { GUIInvokerObserver } from "@utils/observers";
import { validateInputState } from "@utils/utils";

export default function SendForm( { isGiantModal, closeGiantModal } : SendFormProps ){

    const [formStateOrigin, setFormStateOrigin] = useState(DEFAULT_SEND_FORM_STATE.origin);
    const [formStateDestination, setFormStateDestination] = useState(DEFAULT_SEND_FORM_STATE.destination);

    const [costoEnvio, setCostoEnvio] = useState<number | undefined>(undefined);
 
    const originFormConfig: FormConfig = [
        { formElement: "input", inputType: "only_text", placeholder: "Nombre completo", identifier: "name", states: formStateOrigin.name, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Compañia", identifier: "company", states: formStateOrigin.company, isRequired: true },
        { formElement: "input", inputType: "email", placeholder: "Correo electrónico", identifier: "email", states: formStateOrigin.email, isRequired: true },
        { formElement: "input", inputType: "phone", placeholder: "Teléfono celular", identifier: "phone", states: formStateOrigin.phone, /* leftText: "+52", */ isRequired: true },
        { formElement: "input", inputType: "text", placeholder: "Calle", identifier: "street", states: formStateOrigin.street, isRequired: true },
        { formElement: "input", inputType: "positive_number", placeholder: "Número", identifier: "number", states: formStateOrigin.number, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Ciudad", identifier: "city", states: formStateOrigin.city, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Estado", identifier: "state", states: formStateOrigin.state, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "País", identifier: "country", states: formStateOrigin.country, isRequired: true },
        { formElement: "input", inputType: "zip_code", placeholder: "Código postal", identifier: "postalCode", states: formStateOrigin.postalCode, isRequired: true },
        { formElement: "input", inputType: "text", placeholder: "Referencia", identifier: "reference", states: formStateOrigin.reference, isRequired: true },

    ];

    const destinationFormConfig: FormConfig = [
        { formElement: "input", inputType: "only_text", placeholder: "Nombre completo", identifier: "name", states: formStateDestination.name, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Compañia", identifier: "company", states: formStateDestination.company, isRequired: true },
        { formElement: "input", inputType: "email", placeholder: "Correo electrónico", identifier: "email", states: formStateDestination.email, isRequired: true },
        { formElement: "input", inputType: "phone", placeholder: "Teléfono celular", identifier: "phone", states: formStateDestination.phone, /* leftText: "+52", */ isRequired: true },
        { formElement: "input", inputType: "text", placeholder: "Calle", identifier: "street", states: formStateDestination.street, isRequired: true },
        { formElement: "input", inputType: "positive_number", placeholder: "Número", identifier: "number", states: formStateDestination.number, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Ciudad", identifier: "city", states: formStateDestination.city, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "Estado", identifier: "state", states: formStateDestination.state, isRequired: true },
        { formElement: "input", inputType: "only_text", placeholder: "País", identifier: "country", states: formStateDestination.country, isRequired: true },
        { formElement: "input", inputType: "zip_code", placeholder: "Código postal", identifier: "postalCode", states: formStateDestination.postalCode, isRequired: true },
        { formElement: "input", inputType: "text", placeholder: "Referencia", identifier: "reference", states: formStateDestination.reference, isRequired: true },
    ];

    useEffect(() => {
        //reset de datos
        if (!isGiantModal) {
            setFormStateOrigin(DEFAULT_SEND_FORM_STATE.origin);
            setFormStateDestination(DEFAULT_SEND_FORM_STATE.destination);
            setCostoEnvio(undefined);
        }

    }, [isGiantModal]);

    const handleSendQuote = () => {

        //VALIDATE FORM
        const camposValidadosOrigin = {
            name: validateInputState(formStateOrigin.name, "text"),
            company: validateInputState(formStateOrigin.company, "text"),
            email: validateInputState(formStateOrigin.email, "email"),
            phone: validateInputState(formStateOrigin.phone, "phone"),
            street: validateInputState(formStateOrigin.street, "text"),
            number: validateInputState(formStateOrigin.number, "text"),
            city: validateInputState(formStateOrigin.city, "text"),
            state: validateInputState(formStateOrigin.state, "text"),
            country: validateInputState(formStateOrigin.country, "text"),
            postalCode: validateInputState(formStateOrigin.postalCode, "zip_code"),
            reference: validateInputState(formStateOrigin.reference, "text"),
        };

        const isValidOriginForm = !Object.values(camposValidadosOrigin).some(valor => valor.mood === 'error');


        console.log(camposValidadosOrigin)


        const camposValidadosDestination = {
            name: validateInputState(formStateDestination.name, "text"),
            company: validateInputState(formStateDestination.company, "text"),
            email: validateInputState(formStateDestination.email, "email"),
            phone: validateInputState(formStateDestination.phone, "phone"),
            street: validateInputState(formStateDestination.street, "text"),
            number: validateInputState(formStateDestination.number, "text"),
            city: validateInputState(formStateDestination.city, "text"),
            state: validateInputState(formStateDestination.state, "text"),
            country: validateInputState(formStateDestination.country, "text"),
            postalCode: validateInputState(formStateDestination.postalCode, "zip_code"),
            reference: validateInputState(formStateDestination.reference, "text"),
        };



        const isValidDestinationForm = !Object.values(camposValidadosDestination).some(valor => valor.mood === 'error');

        setFormStateOrigin(camposValidadosOrigin);
        setFormStateDestination(camposValidadosDestination);

        if( !isValidOriginForm || !isValidDestinationForm) {
            GUIInvokerObserver.emit("invokeModalCamposConError", null);
            return;
        };


        GUIInvokerObserver.emit("invokeLoaderWithText", { state: true, text: "Obteniendo cotización"});
        //Simulación de llamada a api https://api-test.envia.com/ship/rate/
        setTimeout(()=> {
            GUIInvokerObserver.emit("invokeLoader", false);
            setFormStateOrigin(DEFAULT_SEND_FORM_STATE.origin);
            setFormStateDestination(DEFAULT_SEND_FORM_STATE.destination);
            setCostoEnvio(Math.random()*100 + 100);
        }, 1000);
    }

    const handleSendToSend = () => {
        GUIInvokerObserver.emit("invokeLoaderWithText", { state: true, text: "Enviando producto"})

        //Simulacion de llamada a api https://api-test.envia.com/ship/generate/
        setTimeout(()=> {
            GUIInvokerObserver.emit("invokeLoader", false);

            closeGiantModal();
            setFormStateOrigin(DEFAULT_SEND_FORM_STATE.origin);
            setFormStateDestination(DEFAULT_SEND_FORM_STATE.destination);
            setCostoEnvio(undefined);

            GUIInvokerObserver.emit("invokeModalWithConfig", {
                title: "Aviso",
                message: "Producto enviado con éxito",
            });

        }, 1000);
    }
    return (
        <div className={styles.container}>

                {!costoEnvio &&
                    <>
                        <h1 className={styles.title}>Formulario de envío</h1>
                        <h2 className={styles.subtitle}>Origen</h2>
                        <FormFactory
                            formConfig={originFormConfig}
                            onFormChange={(states, identifier) => { setFormStateOrigin({...formStateOrigin, [identifier]: states}) }}
                        />
                        <h2 className={styles.subtitle}>Destino</h2>
                        <FormFactory
                            formConfig={destinationFormConfig}
                            onFormChange={(states, identifier) => {  setFormStateDestination({...formStateDestination, [identifier]: states}) }}
                        />
                        
                        <Button 
                            text="cotizar"
                            handleButtonClick={handleSendQuote}
                            width="50%"
                        />
                    </>
                }

                {costoEnvio &&
                    <>
                        <h2 className={styles.subtitle}>Costo envio: {costoEnvio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN'})} MXN</h2>
                        <h2 className={styles.subtitle}>Paqueteria: USPS</h2>
                        <h2 className={styles.subtitle}>Servicio: Usps Priority CPP</h2>
                        <h2 className={styles.subtitle}>Tiempo entrega estimado: 1-3 días</h2>
                        <Button 
                            text="Enviar"
                            handleButtonClick={handleSendToSend}
                            width="50%"
                        />
                    </>
                }


        </div>
    )

}