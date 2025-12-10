import Image from "next/image";
const PhotoDes = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black md:text-[41px] text-[32px] pb-14">
                Time management, simplified.
            </div>
            <div className=" bg-stone-100 rounded-xl w-[340px] h-[374px] md:w-5xl md:h-[682px] mb-5   pt-7 md:py-7 text-black text-xl">
                <div className="md:px-[34px] px-5">
                    <Image
                        src="/thunder.png"
                        width={30}
                        height={20}
                        alt="small blue"
                    />
                </div>
                <div className="text-black text-lg font-[1000] pt-2 px-[25px] md:px-[34px]">
                    See your schedule at a glance
                </div>
                <div className="max-w-xl text-[17px] font-extralight pt-1 px-[25px] md:px-[34px] md:pb-[50px] pb-[29px]">
                    Join meetings directly from the menu bar so you can stay
                    focused on the work that matters.
                </div>
                <Image
                    src="/photowithdes.png"
                    width={810}
                    height={640}
                    alt="video ake image"
                    className="md:w-[975px] w-[320px] h-[174px] md:h-[486px]"
                />
            </div>
        </>
    );
};
export default PhotoDes;
