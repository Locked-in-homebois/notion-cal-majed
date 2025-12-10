import Image from "next/image";
const Video = () => {
    return (
        <div className=" bg-stone-100 rounded-xl md:w-5xl md:h-[575px] px-5 md:mb-40 mb-36 md:px-23 md:py-10 py-[18px] text-black text-xl text-center items-center siz w-[340px] h-[202px]">
            <Image
                src="/video.png"
                width={1200}
                height={800}
                alt="video ake image"
                className="md:w-[840px] m w-[300] h-[185] md:h-[535px]"
            />
        </div>
    );
};
export default Video;
