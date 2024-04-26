import {
  LoginObserverEvents, LoginObserverDataTypes,
  InvocationsObserverEvents, InvocationsObserverDataTypes,
} from "@appTypes/observers.types";

//Escuchar los eventos de fetching para aparecer modal y/o loaders en cada fetching de datos
export class FetchObserver{
  static listeners = {} as any;
  static subscribe<TEvent extends LoginObserverEvents>(event: TEvent, callback: (data: LoginObserverDataTypes<TEvent>)=> void) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
  };
  static emit<TEvent extends LoginObserverEvents>(event: TEvent, data: LoginObserverDataTypes<TEvent>) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(
        (callback: (data: LoginObserverDataTypes<TEvent>) => void) => callback(data)
      );
    }
  };
  static unsubscribe<TEvent extends LoginObserverEvents>(
    event: TEvent,
    callback: (data: LoginObserverDataTypes<TEvent>) => void
  ) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      this.listeners[event] = eventListeners.filter(
        (listener: any) => listener !== callback
      );
    }
  }

};

//Esuchar eventos de invocacion de elementos graficos como modales o loaders.
export class GUIInvokerObserver{
  static listeners = {} as any;
  static subscribe<TEvent extends InvocationsObserverEvents>(event: TEvent, callback: (data: InvocationsObserverDataTypes<TEvent>) => void) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
  };
  static emit<TEvent extends InvocationsObserverEvents>(event: TEvent, data: InvocationsObserverDataTypes<TEvent>) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(
          (callback: (data: InvocationsObserverDataTypes<TEvent>) => void) => callback(data)
        );
      }
  };
  static unsubscribe<TEvent extends InvocationsObserverEvents>(
    event: TEvent,
    callback: (data: InvocationsObserverDataTypes<TEvent>) => void
  ) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      this.listeners[event] = eventListeners.filter(
        (listener: any) => listener !== callback
      );
    }
  }
};
