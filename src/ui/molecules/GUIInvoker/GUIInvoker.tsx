"use client"
import { useEffect, useState, Fragment } from "react";
import { GUIInvokerObserver } from "@utils/observers";

import { ModalConfig, LoaderConfig } from "@appTypes/common.types";

import { Loader, Modal } from "@ui/atoms";

export default function GUIInvoker() {

    const [isModal, setIsModal] = useState(false);
    const [loaderConfig, setIsLoaderConfig] = useState<LoaderConfig>({
        text: "",
        state: false
    });
    const [modalConfig, setModalConfig] = useState<ModalConfig>({
        title: "",
        message: "",
        onClose: () => GUIInvokerObserver.emit("invokeModal", false),
    });

    useEffect(() => {

        GUIInvokerObserver.subscribe("invokeLoader", (state) => {
            setIsLoaderConfig({
                text: "",
                state: state
            });
        });

        GUIInvokerObserver.subscribe("invokeLoaderWithText", (configLoader) => {
            setIsLoaderConfig(configLoader);
        });

        GUIInvokerObserver.subscribe("configModal", (modalData) => {
            setModalConfig({
                ...modalConfig,
                title: modalData.title,
                message: modalData.message,
                buttonsProps: modalData.buttonsProps,
            });
        });

        GUIInvokerObserver.subscribe("invokeModal", (state) => {
            setIsModal(state);
        });

        GUIInvokerObserver.subscribe("invokeModalWithConfig", (modalData) => {
            setIsModal(true);
            setModalConfig({
                ...modalConfig,
                title: modalData.title,
                message: modalData.message,
                buttonsProps: modalData.buttonsProps,
            });
        });

        GUIInvokerObserver.subscribe("invokeModalDatosObligatorios", () => {
            setIsModal(true);
            setModalConfig({
                ...modalConfig,
                title: "Aviso",
                message: "Favor de llenar los campos marcados como obligatorios",
            });
        });

        GUIInvokerObserver.subscribe("invokeModalCamposConError", () => {
            setIsModal(true);
            setModalConfig({
                ...modalConfig,
                title: "Aviso",
                message: "Algunos campos requieren revisión.",
            });
        });


    }, [])

    return (
        <Fragment>

            {loaderConfig.state && <Loader text={loaderConfig.text} /> }

            {isModal &&
                <Modal
                    title={modalConfig.title}
                    message={modalConfig.message}
                    onClose={modalConfig.onClose}
                    buttonsProps={modalConfig.buttonsProps}
                />
            }

        </Fragment>
    )

}
