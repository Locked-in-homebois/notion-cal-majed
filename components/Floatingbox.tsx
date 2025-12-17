import Image from "next/image";
import React from "react";

type FloatingBoxProps = {
    color: string;
    positionX: string;
    positionY: string;
    icon: React.ReactNode;
};
export default function FloatingBox(props: FloatingBoxProps) {
    const { color, positionX, positionY, icon } = props;

    return (
        <div className={`${positionX} ${positionY} w-20 h-20 bg-${color}-200`}>
            <div className="text-5xl">{icon}</div>
        </div>
    );
}
