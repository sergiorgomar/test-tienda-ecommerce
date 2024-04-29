import { FormFieldStates } from "@appTypes/forms.types";
import { DEFAULT_FORM_FIELD_STATE } from "@utils/consts";

export type SendFormProps = {
    isGiantModal: boolean;
    closeGiantModal: () => void;
 };



export type SendFormType = {
    origin: {
        name: FormFieldStates,
        company: FormFieldStates,
        email: FormFieldStates,
        phone: FormFieldStates,
        street: FormFieldStates,
        number: FormFieldStates,
        city: FormFieldStates,
        state: FormFieldStates,
        country: FormFieldStates,
        postalCode: FormFieldStates,
        reference: FormFieldStates,
    },
    destination: {
        name: FormFieldStates,
        company: FormFieldStates,
        email: FormFieldStates,
        phone: FormFieldStates,
        street: FormFieldStates,
        number: FormFieldStates,
        city: FormFieldStates,
        state: FormFieldStates,
        country: FormFieldStates,
        postalCode: FormFieldStates,
        reference: FormFieldStates,
    }
}


export const DEFAULT_SEND_FORM_STATE : SendFormType = {
    origin: {
        name: DEFAULT_FORM_FIELD_STATE(""),
        company: DEFAULT_FORM_FIELD_STATE(""),
        email: DEFAULT_FORM_FIELD_STATE(""),
        phone: DEFAULT_FORM_FIELD_STATE(""),
        street: DEFAULT_FORM_FIELD_STATE(""),
        number: DEFAULT_FORM_FIELD_STATE(""),
        city: DEFAULT_FORM_FIELD_STATE(""),
        state: DEFAULT_FORM_FIELD_STATE(""),
        country: DEFAULT_FORM_FIELD_STATE(""),
        postalCode: DEFAULT_FORM_FIELD_STATE(""),
        reference: DEFAULT_FORM_FIELD_STATE(""),
    },
    destination: {
        name: DEFAULT_FORM_FIELD_STATE(""),
        company: DEFAULT_FORM_FIELD_STATE(""),
        email: DEFAULT_FORM_FIELD_STATE(""),
        phone: DEFAULT_FORM_FIELD_STATE(""),
        street: DEFAULT_FORM_FIELD_STATE(""),
        number: DEFAULT_FORM_FIELD_STATE(""),
        city: DEFAULT_FORM_FIELD_STATE(""),
        state: DEFAULT_FORM_FIELD_STATE(""),
        country: DEFAULT_FORM_FIELD_STATE(""),
        postalCode: DEFAULT_FORM_FIELD_STATE(""),
        reference: DEFAULT_FORM_FIELD_STATE(""),
    }
}