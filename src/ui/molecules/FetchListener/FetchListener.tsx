"use client"
import { useEffect } from "react";
import { FetchObserver, GUIInvokerObserver } from "@utils/observers";

export default function FetchListener() {
    useEffect(() => {
        FetchObserver.subscribe("expiredToken", () => {
            GUIInvokerObserver.emit("invokeModalTokenExpirado", null)
        });
        FetchObserver.subscribe("apiError", (response) => {
            GUIInvokerObserver.emit("invokeModalWithConfig", {
                title: `Error ${response.code}`,
                message: response.detail,
            });
        });
        FetchObserver.subscribe("networkError", (error) => {
            GUIInvokerObserver.emit("invokeModalWithConfig", {
                title: "Network error.",
                message: `Error ${error}`
            });
        });
    }, [])
    return null
};
