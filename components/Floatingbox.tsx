import Image from "next/image";
import React from "react";
import * as Icons from "lucide-react";

type FloatingBoxProps = {
    color: string;
    positionX: string;
    positionY: string;
    icon: React.ReactNode;
    boxSize?: string;
    innerSize?: string;
};
export default function FloatingBox(props: FloatingBoxProps) {
    const {
        color,
        positionX,
        positionY,
        icon,
        boxSize = "md:w-23 w-17 h-15 md:h-20 -z-10",
        innerSize = "md:w-20 md:h-20 w-15 h-15 -z-10",
    } = props;

    return (
        <div
            className={`absolute ${positionX} ${positionY}  ${boxSize} bg-${color}-500 flex flex-col items-end rounded-lg`}
        >
            <div
                className={`relative  ${innerSize} bg-${color}-100 justify-center flex items-center rounded-r-md`}
            >
                {icon}
            </div>
        </div>
    );
}
