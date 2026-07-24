"use client";
import { useConfig } from "nextra-theme-docs";
import { TimeToRead } from "./TimeToRead";
import { TargetAudiences } from "./TargetAudiences";

export function DocMetadata() {
    const metadata = useConfig().normalizePagesResult.activeMetadata;

    return <>
        <TargetAudiences metadata={metadata} />
        <TimeToRead metadata={metadata} />
    </>
}