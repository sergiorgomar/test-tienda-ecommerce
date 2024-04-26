import { LoaderConfig, ModalConfig } from "@appTypes/common.types";

/// 🟥🟥 LOGIN observer types
export type ApiError = {
    detail: string,
    code: number
};
export type LoginObserverEvents =
  | "networkError"
  | "apiError"
  | "expiredToken";

export type LoginObserverDataTypes<TObserverEvent extends LoginObserverEvents> =
  TObserverEvent extends "networkError" ? string :
  TObserverEvent extends "apiError" ? ApiError :
  TObserverEvent extends "expiredToken" ? null :
  never;


/// 🟥🟥 GUIInvoker observer types
export type InvocationsObserverEvents =
  | "invokeLoader"
  | "invokeLoaderWithText"
  | "invokeModal"
  | "configModal"
  | "invokeModalWithConfig"
  | "invokeModalDatosObligatorios"
  | "invokeModalTokenExpirado"
  | "invokeModalCamposConError";

export type InvocationsObserverDataTypes<TObserverEvent extends InvocationsObserverEvents> =
  TObserverEvent extends "invokeLoader" ? boolean :
  TObserverEvent extends "invokeLoaderWithText" ? LoaderConfig :
  TObserverEvent extends "invokeModal" ? boolean :
  TObserverEvent extends "configModal" ? Omit<ModalConfig, "onClose" > :
  TObserverEvent extends "invokeModalWithConfig" ? Omit<ModalConfig, "onClose" > :
  TObserverEvent extends "invokeModalDatosObligatorios" ? null | undefined :
  TObserverEvent extends "invokeModalTokenExpirado" ? null | undefined :
  TObserverEvent extends "invokeModalCamposConError" ? null | undefined :
  never;