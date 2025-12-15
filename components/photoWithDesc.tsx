import Image from "next/image";
const PhotoDes = () => {
    return (
        <div
            className="text-black flex flex-col items-center md:mt-40
            mt-36 "
        >
            <h1 className="font-[1000]  md:text-[41px] text-center text-[32px] pb-14">
                Time management, simplified.
            </h1>
            <div className=" bg-stone-100 rounded-xl md:pt-6 pt-3 md:w-full w-[90%] md:pr-14 flex flex-col md:items-start items-center mb-6  ">
                <div className=" md:ml-3 space-y-1 pb-6  ">
                    <Image
                        src="/thunder.png"
                        width={30}
                        height={20}
                        alt="small blue"
                    />
                    <div className=" text-lg font-[1000]  ">
                        See your schedule at a glance
                    </div>
                    <div className="md:max-w-xl max-w-[300px] text-[17px] font-extralight">
                        Join meetings directly from the menu bar so you can stay
                        focused on the work that matters.
                    </div>
                </div>
                <Image
                    src="/photowithdes.png"
                    width={810}
                    height={640}
                    alt="video ake image"
                    className="md:w-[970px] pr-9.5 left-0"
                    // photo too small had to specify size
                />
            </div>
        </div>
    );
};
export default PhotoDes;
