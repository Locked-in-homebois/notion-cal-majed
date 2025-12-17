import Image from "next/image";
import FloatingBox from "./Floatingbox";
import * as Icons from "lucide-react";
const Video = () => {
    return (
        <>
            <FloatingBox
                color="blue"
                positionX="md:mr-[1240px]"
                positionY="md:my-[100px]"
                icon=<Icons.LaptopIcon size={40} className="text-blue-600" />
            />
            <FloatingBox
                color="yellow"
                positionX="md:mr-[700px]"
                positionY="md:my-[240px]"
                icon=<Icons.Balloon size={40} className="text-yellow-600" />
            />
            <FloatingBox
                color="teal"
                positionX="md:mr-[1000px]"
                positionY="md:my-[470px]"
                icon=<Icons.FileIcon size={40} className="text-teal-600" />
            />
            <FloatingBox
                color="red"
                positionX="md:mr-[1250px]"
                positionY="md:my-[350px]"
                icon=<Icons.Cat size={40} className="text-red-600" />
            />
            <FloatingBox
                color="teal"
                positionX="md:ml-[1200px]"
                positionY="md:my-[80px]"
                icon=<Icons.BicepsFlexed size={40} className="text-teal-600" />
            />
            <FloatingBox
                color="purple"
                positionX="md:ml-[700px]"
                positionY="md:my-[120px]"
                icon=<Icons.ListChecksIcon
                    size={40}
                    className="text-purple-600"
                />
            />
            <FloatingBox
                color="orange"
                positionX="md:ml-[1000px]"
                positionY="md:my-[320px]"
                icon=<Icons.Coffee size={40} className="text-orange-600" />
            />
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
            </div>
        </>
    );
};
export default Video;
