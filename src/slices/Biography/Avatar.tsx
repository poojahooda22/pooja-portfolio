import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Component } from "react";
import { useRef } from "react";


type AvatarProps = {
    image: ImageField;
    className?: string;
};

export default function Avatar({ image, className}: AvatarProps) {

    return (
        <div ref={component}>
            <div>
                <PrismicNextImage
                    field={image}
                    className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 rounded-xl"
                />
            </div>
        </div>
        
    )
}