import Image from "next/image";
const PhotoDes = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black md:text-[41px] text-[30px] pb-14">
                Time management, simplified.
            </div>
            <div className=" bg-stone-100 rounded-xl w-[300px] h-[420px] md:w-5xl md:h-[682px] mb-5  py-7 text-black text-xl">
                <div className="px-[34px]">
                    <Image
                        src="/thunder.png"
                        width={30}
                        height={20}
                        alt="small blue"
                    />
                </div>
                <div className="text-black text-lg font-[1000] pt-2 px-[34px]">
                    See your schedule at a glance
                </div>
                <div className="max-w-xl text-[17px] font-extralight pt-1 px-[34px] pb-[50px]">
                    Join meetings directly from the menu bar so you can stay
                    focused on the work that matters.
                </div>
                <Image
                    src="/photowithdes.png"
                    width={975}
                    height={650}
                    alt="video ake image"
                />
            </div>
        </>
    );
};
export default PhotoDes;
