import Image from "next/image";
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
        </div>
    );
};
export default Video;
