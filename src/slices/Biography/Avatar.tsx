'use client';

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { clsx } from "clsx";

import { useRef } from "react";


type AvatarProps = {
    image: ImageField;
    className?: string;
};

export default function Avatar({ image, className}: AvatarProps) {
    const component = useRef(null);
    return (
        <div ref={component} className={clsx("relative h-full w-full", className)}>
            <div className="avatar aspect-square ">
                <PrismicNextImage
                    field={image}
                />
            </div>
        </div>
        
    )
}