import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type ButtonProps = {
    linkField: LinkField;
    label: KeyTextField;
    showIcon?: boolean;
    className?: string;
}

export default function Button ({
    linkField,
    label, 
    showIcon,
    className,
}: ButtonProps)