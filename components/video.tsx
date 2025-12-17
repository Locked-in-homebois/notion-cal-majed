import Image from "next/image";
import FloatingBox from "./Floatingbox";
import * as Icons from "lucide-react";
const Video = () => {
    return (
        <div className="pt-12 px-4">
            <div className="bg-stone-100 rounded-xl place-items-center md:px-23 px-4 pt-9 justify-end ">
                <Image
                    src="/video.png"
                    width={1200}
                    height={800}
                    alt="video aka image"
                    className="w-fit md:h-[80%]"
                />
            </div>
            <FloatingBox
                color="yellow"
                positionX="mx-10"
                positionY="my-10"
                icon=<Icons.LaptopIcon />
            />
        </div>
    );
};
export default Video;
