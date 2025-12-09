import Image from "next/image";
const Video = () => {
    return (
        <div className=" bg-stone-100 rounded-xl md:w-5xl md:h-[575px] px-2 mb-40 md:px-23 py-10 text-black text-xl text-center items-center siz w-[300px] h-[222px]">
            <Image
                src="/video.png"
                width={600}
                height={400}
                alt="video ake image"
                className="md:w-[840px] md:h-[540px]"
            />
        </div>
    );
};
export default Video;
