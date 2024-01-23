import clsx from "clsx";
import React from "react";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
};

export default function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",

}: HeadingProps) {
    return (
        <Comp
            className={clsx(
                "font-bold leading-tight tracking-tight text-slate-300",
                size === "xl" && "text-7xl md:text-9xl",
            )}
        >

        </Comp>
    )
}

