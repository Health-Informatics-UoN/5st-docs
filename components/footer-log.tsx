// components/FooterLogo.tsx
"use client";

import Image from "next/image";

export function FooterLogo() {
    return (
        <>
            <Image
                src="/5st-docs/logo-UoN-light.png"
                alt="University of Nottingham"
                width={200}
                height={200}
                className="block dark:hidden"
            />

            <Image
                src="/5st-docs/logo-UoN-dark.png"
                alt="University of Nottingham"
                width={200}
                height={200}
                className="hidden dark:block"
            />
        </>
    );
}