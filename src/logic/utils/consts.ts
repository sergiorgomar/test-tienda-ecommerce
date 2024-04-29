import { FormFieldStates } from "@appTypes/forms.types";
export const DEFAULT_FORM_FIELD_STATE = ( value: string ) : FormFieldStates => { return { value: value, mood: "default", helperText: ""} };
export const FILLED_FORM_FIELD_STATE = ( value: string ) : FormFieldStates => { return { value: value, mood: "filled", helperText: ""} };
export const DISABLED_FORM_FIELD_STATE = ( value: string ) : FormFieldStates => { return { value: value, mood: "disabled", helperText: ""} };
export const REQUIRED_FORM_FIELD_STATE = ( value: string ) : FormFieldStates => { return { value: value, mood: "required", helperText: ""} };
