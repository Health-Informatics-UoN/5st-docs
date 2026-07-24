"use client";
import { useConfig } from "nextra-theme-docs";
import { TimeToRead } from "./TimeToRead";

export function DocMetadata() {
    const metadata = useConfig().normalizePagesResult.activeMetadata;

    return <>
        <TimeToRead metadata={metadata} />
    </>
}