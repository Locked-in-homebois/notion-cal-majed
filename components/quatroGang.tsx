import Image from "next/image";
const Quatro = () => {
    return (
        <div className="pb-[170px]">
            <div className=" md:flex items-center">
                <div className=" bg-stone-100 ml-[20px] md:ml-0 rounded-xl md:w-[500] w-[310px] h-[434px] mb-6 mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 ml-8 font-black">Built-in scheduling</h1>
                    <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                        Send your availability and scheduling link to let others
                        book time with you. No separate app.
                    </p>
                    <Image
                        src="/Q1.png"
                        width={430}
                        height={430}
                        alt="first quarter"
                        className="mx-[35px] mt-[66px] shadow-xs w-[265px] md:w-[390] md:h-[223]"
                    />
                </div>
                <div className=" bg-stone-100 ml-[20px] md:ml-0 rounded-xl md:w-[500] w-[310px] h-[434px] mb-6 mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 ml-8 font-black">Work across time zones</h1>
                    <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                        Thoughtfully collaborate with global teams as you
                        visualize your day across time zones.
                    </p>
                    <Image
                        src="/Q2.png"
                        width={500}
                        height={500}
                        alt="second quarter"
                        className="mt-[53px] md:w-[390] md:h-[323]"
                    />
                </div>
            </div>
            <div className=" md:flex ">
                <div className=" bg-stone-100 ml-[20px] md:ml-0 rounded-xl md:w-[500] w-[310px] h-[434px] mb-6 mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 ml-8 font-black">Modern design</h1>
                    <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                        Use command menu and shortcuts for efficient workflows.
                    </p>
                    <Image
                        src="/Q3.png"
                        width={500}
                        height={500}
                        alt="third quarter"
                        className="mt-[95px]"
                    />
                </div>
                <div className=" bg-stone-100 ml-[20px] md:ml-0 rounded-xl md:w-[500] w-[310px] h-[434px] mb-6 mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 ml-8 font-black">Available in 12 languages</h1>
                    <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                        Supports English, Japanese, Korean, French, German,
                        Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian,
                        and Swedish… with more on the way!
                    </p>
                    <Image
                        src="/Q4.png"
                        width={500}
                        height={480}
                        alt="fourth quarter"
                        className="mt-4"
                    />
                </div>
            </div>
        </div>
    );
};
export default Quatro;
