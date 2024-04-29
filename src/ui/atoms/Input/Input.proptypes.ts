import { IconsList, InputsTypes } from "@appTypes/common.types";
import { FormFieldStates, FormFieldEventsInitiators} from "@appTypes/forms.types";

export type InputProps = {
    placeholder: string; 
    identifier: string;
    states: FormFieldStates;
    isRequired?: boolean;
    rightIcon?: IconsList;
    leftIcon?: IconsList;
    rightText?: string;
    leftText?: string;
    type?: InputsTypes;
    maxDate?: Date;
    minDate?: Date;
    dispatch: (
        states: FormFieldStates,
        identifier: string,
        eventInitiator?: FormFieldEventsInitiators,
    ) => void;
};
