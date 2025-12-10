import Image from "next/image";
const Video = () => {
    return (
        <div className=" bg-stone-100 rounded-xl md:w-5xl md:h-[575px] px-5 md:mb-40 mb-36 md:px-23 md:py-10 py-3 text-black text-xl text-center items-center siz w-[340px] h-[202px]">
            <Image
                src="/video.png"
                width={300}
                height={100}
                alt="video ake image"
                className="md:w-[820px] md:h-[535px]"
            />
        </div>
    );
};
export default Video;
