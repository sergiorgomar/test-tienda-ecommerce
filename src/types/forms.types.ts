
import { IconsList, InputsTypes } from "@appTypes/common.types";

export type FormFieldStates = {
  value: string,
  mood: FormFieldMoods,
  helperText: string,
}
export type FormFieldMoods = "error" | "filled" | "default" | "active" | "disabled" | "required";

export type GenericFormFieldStates<TValue> = {
  value: TValue,
  mood: FormFieldMoods,
  helperText: string,
}
export type FormFieldEventsInitiators = "blur" | "focus" | "change";

export type SelectOptions = {id: number, description: string};

//Tal vez este no sea su lugar.
export type ToggleOptions = {
  value: string,
  status: boolean,
};


///FORM FACTORY
export type DefaultFormEntry = {
  identifier: string,
  states: FormFieldStates, 
  placeholder: string,
  isRequired?: boolean;
}
export type InputFormEntry = DefaultFormEntry & {
  formElement: "input",
  inputType: InputsTypes,
  rigthIcon?: IconsList,
  leftIcon?: IconsList,
  rigthText?: string,
  leftText?: string,
  maxDate?: Date,
  minDate?: Date,
}
export type SelectFormEntry = DefaultFormEntry & {
  formElement: "select",
  selectValues: any//SelectElements,
}

export type DisabledElementEntry = {
  formElement: "disabledElement",
  text: string,
  required: boolean,
}

export type FormConfig = Array<SelectFormEntry | InputFormEntry>