export type LoaderConfig = {
    text: string,
    state: boolean
};
export type ModalConfig = {
    title: string;
    message: string;
    onClose: () => void;
    /* buttonsProps?: {
        cancelButton?: {
            type: ButtonsTypes,
            text: string,
            handleClick: () => void,
        },
        acceptButton?: {
            type: ButtonsTypes
            text: string
            handleClick: () => void,
        }
    } */
};



export type IconSVGProptypes = {
    fill: string,
}

export type IconsList = 
    | "shoping_car"
    | "user"
    | "close";

export type InputsTypes = 
    | "text"
    | "positive_number"
    | "email"
    | "only_text"
    | "zip_code"
    | "phone";
