import Image from "next/image";
const Quatro = () => {
    return (
        <div className="pb-[170px] md:grid md:gap-5 md:space-y-0 space-y-5 md:grid-cols-2 text-left text-black text-xl">
            <div className=" bg-stone-100 rounded-xl place-items-center  px-2 pt-2 md:px-7 md:pt-7 flex flex-col">
                <div className=" space-y-1 mb-2">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="md:mt-0 mt-2"
                    />
                    <h1 className="font-black">Built-in scheduling</h1>
                    <p className=" text-[17px]  font-extralight md:max-w-[450px] max-w-[280px]">
                        Send your availability and scheduling link to let others
                        book time with you. No separate app.
                    </p>
                </div>
                <Image
                    src="/Q1.png"
                    width={500}
                    height={480}
                    alt="first quarter"
                    className="w-[320px] h-60 md:w-[420px] md:h-[340px]  justify-end mt-auto"
                />
            </div>
            <div className=" bg-stone-100 rounded-xl place-items-center  px-2 pt-2 md:px-7 md:pt-7 flex flex-col">
                <div className="space-y-1">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="md:mt-0 mt-2"
                    />
                    <h1 className=" font-black">Work across time zones</h1>
                    <p className=" text-[17px]  font-extralight md:max-w-[450px] max-w-[280px]">
                        Thoughtfully collaborate with global teams as you
                        visualize your day across time zones.
                    </p>
                </div>
                <Image
                    src="/Q2.png"
                    width={500}
                    height={480}
                    alt="second quarter"
                    className="w-[320px] h-60 md:w-[420px] md:h-[340px] justify-end mt-auto"
                />
            </div>
            <div className=" bg-stone-100 rounded-xl place-items-center  px-2 pt-2 md:px-7 md:pt-7 flex flex-col">
                <div className="space-y-1">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="md:mt-0 mt-2"
                    />
                    <h1 className="  font-black">Modern design</h1>
                    <p className=" text-[17px]  font-extralight md:max-w-[450px] max-w-[280px]">
                        Use command menu and shortcuts for efficient workflows.
                    </p>
                </div>
                <Image
                    src="/Q3.png"
                    width={500}
                    height={480}
                    alt="third quarter"
                    className="w-[320px] h-60 md:w-[420px] md:h-[340px] justify-end mt-auto"
                />
            </div>
            <div className=" bg-stone-100 rounded-xl place-items-center  px-2 pt-2 md:px-7 md:pt-7 flex flex-col">
                <div className="space-y-1">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="md:mt-0 mt-2"
                    />
                    <h1 className=" font-black">Available in 12 languages</h1>
                    <p className=" text-[17px]  font-extralight md:max-w-[450px] max-w-[280px]">
                        Supports English, Japanese, Korean, French, German,
                        Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian,
                        and Swedish… with more on the way!
                    </p>
                </div>
                <Image
                    src="/Q4.png"
                    width={500}
                    height={480}
                    alt="fourth quarter"
                    className="w-[320px] h-60 md:w-[420px] md:h-[340px] justify-end mt-auto"
                />
            </div>
        </div>
    );
};
export default Quatro;
