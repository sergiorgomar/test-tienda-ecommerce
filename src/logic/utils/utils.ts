import { InputsTypes } from "@appTypes/common.types";
import { FormFieldStates } from "@appTypes/forms.types";
/*
    ESTA FUNCIÓN VALIDA EL ESTADO DE UN INPUT EN FUNCION DEL TIPO DE INPUT DADO,
    
    REQUIERE UNA COPIA DEL ESTADO A VALIDAR Y RETORNA UNA COPIA DEL NUEV ESTADO

    SI EL ESTADO VIENE CON ERROR SE RETORNA EL ESTADO CON ERROR.
*/
export function validateInputState( state: FormFieldStates, type: InputsTypes ) : FormFieldStates {

    let regex: RegExp = /^.*$/; //default value
    let isValid = true;
    let errorMessage = "";
  
    let value = state.value;
    const mood = state.mood;
  
    //No se validan los campos en disabled
    if (mood === "disabled") return { ...state}
  
    //Solo se validan como vacios los campos cuyo estado se haya quedado en default!
    if (mood == "default") {
      isValid = false;
      errorMessage = "Este campo no puede ir vacío";
      return { ...state, helperText: "Este campo no puede ir vacío", mood: "error" }
    };
  
    switch (type) {
        case "email":
            regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            errorMessage = regex.test(value) ? "" : "Formato de correo inválido"
            break;
        case "text":
            //No valida nada, todo el texto es bienvenido!!!
            regex = /^(.*)$/
            errorMessage = regex.test(value) ? "" : "Texo inválido"
            break;
        case "zip_code":
            regex = /^\S{5}$/;
            if (value.length < 5) {
                errorMessage = "El código postal debe contener 5 caracteres";
            }
            break;
        case "phone":
            regex =  /^[0-9]{10}$/
            if (value.length < 10) {
                errorMessage = "El número telefónico debe contener 10 caracteres"
            }
            break;
      default:
        regex = /^.*$/;
        break;
    }

    isValid = regex.test(value);
  
    return isValid ? {...state} : { ...state, helperText: errorMessage, mood: "error" }
  
  }