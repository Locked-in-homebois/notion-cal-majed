import Image from "next/image";
const PhotoDes = () => {
    return (
        <div className="text-black flex flex-col items-center">
            <h1 className="text-center font-[1000]  md:text-[41px]  text-[32px] pb-14">
                Time management, simplified.
            </h1>
            <div className=" bg-stone-100 rounded-xl md:pt-6 pt-3 pr-8 w-fit md:pr-14 flex flex-col md:items-start items-center mb-6  ">
                <div className=" ml-3 pb-6  ">
                    <div className="">
                        <Image
                            src="/thunder.png"
                            width={30}
                            height={20}
                            alt="small blue"
                        />
                    </div>
                    <div className=" text-lg font-[1000]  ">
                        See your schedule at a glance
                    </div>
                    <div className="md:max-w-xl max-w-[250px] text-[17px] font-extralight">
                        Join meetings directly from the menu bar so you can stay
                        focused on the work that matters.
                    </div>
                </div>
                <Image
                    src="/photowithdes.png"
                    width={810}
                    height={640}
                    alt="video ake image"
                    className="md:w-[975px] w-[300px] h-[174px] md:h-[486px]"
                />
            </div>
        </div>
    );
};
export default PhotoDes;
