"use client"
import { Fragment } from "react";
import { FetchListener } from "@ui/molecules";
import { GUIInvoker } from "@ui/molecules";

export default function GlobalServerListener() {
    return (
        <Fragment>
            <FetchListener />
            <GUIInvoker />
        </Fragment>
    )
  }