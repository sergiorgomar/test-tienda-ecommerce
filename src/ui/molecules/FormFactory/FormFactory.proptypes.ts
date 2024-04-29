import { FormConfig, FormFieldEventsInitiators, FormFieldStates } from "@appTypes/forms.types";

export type FormFactoryProps = {
    formConfig: FormConfig,
    onFormChange?: (states: FormFieldStates, identifier: string, eventInitiator?: FormFieldEventsInitiators) => void,
}

