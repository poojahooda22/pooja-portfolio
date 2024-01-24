'use client';

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';  


type AvatarProps = {
    image: ImageField;
    className?: string;
};

export default function Avatar({ image, className}: AvatarProps) {
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".avatar",
                { opacity: 0, scale: 1.4},
                { scale: 1, opacity: 1.3, }
            )
        })
    })
    return (
        <div ref={component} className={clsx("relative h-full w-full", className)}>
            <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0f">
                <PrismicNextImage
                    field={image}
                    className="avatar-image h-full w-full object-fill"
                    imgixParams={{ q: 90 }}
                />
                <div 
                    className="highlight absolute inset-0 hiddenf w-full scale-110 
                    bg-radient-to-tr from-transparent via-white to-transparent opacity-0f md:block"
                >
                </div>
            </div>
        </div>
        
    )
}