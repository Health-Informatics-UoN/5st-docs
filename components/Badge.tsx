import { JSX, PropsWithChildren } from "react";

export function Badge({ children, className, ...p }: PropsWithChildren<JSX.IntrinsicElements["span"]>) {
    return <span className={`px-2 py-1 rounded-xl bg-blue-300 text-blue-700 text-sm ${className}`} {...p}>
        {children}
    </span>
}