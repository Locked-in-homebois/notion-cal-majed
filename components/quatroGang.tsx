import Image from "next/image";
const Quatro = () => {
    return (
        <div className="md:pb-[170px] pb-[100px]">
            <div className=" md:flex items-center">
                <div className=" bg-stone-100  md:ml-0 rounded-xl md:w-[500] w-[340px] h-[434px] mb-6 md:mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-6 md:ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 md:ml-8 px-[25px] font-black">Built-in scheduling</h1>
                    <p className=" md:ml-8 text-[17px] px-[25px] font-extralight max-w-[450px]">
                        Send your availability and scheduling link to let others
                        book time with you. No separate app.
                    </p>
                    <Image
                        src="/Q1.png"
                        width={430}
                        height={430}
                        alt="first quarter"
                        className="md:mx-[35px] mx-[15px] md:mt-[66px] mt-[33px] shadow-xs w-[311px] md:w-[390] md:h-[223]"
                    />
                </div>
                <div className=" bg-stone-100  md:ml-0 rounded-xl md:w-[500] w-[340px] h-[434px] mb-6 md:mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-6 md:ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 md:ml-8 px-[25px] font-black">Work across time zones</h1>
                    <p className=" md:ml-8 text-[17px] px-[25px] font-extralight max-w-[450px]">
                        Thoughtfully collaborate with global teams as you
                        visualize your day across time zones.
                    </p>
                    <Image
                        src="/Q2.png"
                        width={500}
                        height={500}
                        alt="second quarter"
                        className="mt-[53px] md:pl-[100px] md:w-[390] md:h-[233]"
                    />
                </div>
            </div>
            <div className=" md:flex ">
                <div className=" bg-stone-100  md:ml-0 rounded-xl md:w-[500] w-[340px] h-[434px] mb-6 md:mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-6 md:ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 md:ml-8 px-[25px] font-black">Modern design</h1>
                    <p className=" md:ml-8 text-[17px] px-[25px] font-extralight max-w-[450px]">
                        Use command menu and shortcuts for efficient workflows.
                    </p>
                    <Image
                        src="/Q3.png"
                        width={500}
                        height={500}
                        alt="third quarter"
                        className="md:mt-[95px] md:w-[500px] w-[500px] h-[250px] md:h-[500px] mt-10"
                    />
                </div>
                <div className=" bg-stone-100  md:ml-0 rounded-xl md:w-[500] w-[340px] h-[434px] mb-6 md:mx-3 py-6 text-black text-xl items-center">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-6 md:ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 md:ml-8 px-[25px] font-black">Available in 12 languages</h1>
                    <p className="md:ml-8 text-[17px] px-[25px] font-extralight max-w-[450px]">
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
