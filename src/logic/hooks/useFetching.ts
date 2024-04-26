import { FetchOutput } from "@appTypes/fetching.types";
import { FetchObserver, GUIInvokerObserver } from "@utils/observers";
/*
    Este hook solo puede y debe ser usado en fetching de datos del lado del cliente.
    El FetchObserver suscrito se puede encontrar en el layout raiz de la aplicación "GlobalServerListener - FetchListener"
    es donde se maneja la lógica de los fetchings de datos para la invocación de modales.

    El proposito del hook es manejar la logica de errores de los fetchings de datos mediante el hook,
    y no en funciones aisladas.

    La funcion makeFetching recibe como parametro una función que realiza los tipos de datos.
    No es indispensable añadir los tipos genericos en la funcion, en la mayoria de situaciones
    se pueden inferir por los parámetros indicados.
*/
export default function useFetching() {

    const makeFetchPost = async <TDataToSend, TPayload>(
        fetchingFunction: (dataToSend: TDataToSend) => Promise<FetchOutput<TPayload>>,
        dataToSend: TDataToSend,
        loaderText?: string,
    ) : Promise<TPayload | undefined> =>  {

        GUIInvokerObserver.emit("invokeLoaderWithText", { text: loaderText || "", state: true} );
        const response = await fetchingFunction(dataToSend);
        GUIInvokerObserver.emit("invokeLoader", false);

        if ('error' in response) { //Error de comunicación con api, error generado por fetch del navegador
            FetchObserver.emit("networkError", response.error);
            throw new Error("Network error");
        } else if (response.data.tokenStatus === false) { //Si expiró la sesión o token es inválido
            FetchObserver.emit("expiredToken", null);
            throw new Error("Expired token");
        } else if (response.data.success === false || !response.data.success) { //Error obtenido desde api
            FetchObserver.emit("apiError", { detail: response.data.detail, code: response.codeStatus });
            throw new Error("Api Error");
        } else { //La api responde 200 y tenemos algun payload desde la api
            return response.data.payload;
        }
    };

    const makeFetchGet = async <TPayload>(
        fetchingFunction: () => Promise<FetchOutput<TPayload>>,
        loaderText?: string,
    ) : Promise<TPayload | undefined> =>  {

        GUIInvokerObserver.emit("invokeLoaderWithText", { text: loaderText || "", state: true} );
        const response = await fetchingFunction();
        GUIInvokerObserver.emit("invokeLoader", false);

        if ('error' in response) {
            FetchObserver.emit("networkError", response.error);
            throw new Error("Network error");
        } else if (response.data.tokenStatus === false) {
            FetchObserver.emit("expiredToken", null);
            throw new Error("Expired token");
        } else if (response.data.success === false || !response.data.success) {
            FetchObserver.emit("apiError", { detail: response.data.detail, code: response.codeStatus });
            throw new Error("Api Error");
        } else {
            return response.data.payload;
        }
    };



    return { makeFetchGet, makeFetchPost }
}