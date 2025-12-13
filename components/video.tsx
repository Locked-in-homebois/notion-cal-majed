import Image from "next/image";
const Video = () => {
    return (
        <div
            className="flex flex-col bg-stone-100 rounded-xl md:mb-40 
        mb-36 place-items-center md:px-23 px-4 pt-9 text-black text-xl text-center justify-end "
        >
            <Image
                src="/video.png"
                width={1200}
                height={800}
                alt="video aka image"
                className="md:w-[840px] w-[300] h-[185] md:h-[535px]"
            />
        </div>
    );
};
export default Video;
