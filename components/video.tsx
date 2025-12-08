import Image from "next/image";
const Video = () => {
    return (
        <div className=" bg-stone-100 rounded-xl w-5xl h-[575px] mb-40 px-23 py-10 text-black text-xl text-center items-center">
            <Image
                src="/video.png"
                width={840}
                height={540}
                alt="video ake image"
            />
        </div>
    );
};
export default Video;
