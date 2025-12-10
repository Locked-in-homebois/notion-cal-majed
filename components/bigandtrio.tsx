import Image from "next/image";
const Bigandtrio = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black md:text-[39px] text-[34px] md:pt-0 pt-16 tracking-tighter md:pb-14 pb-[60] md:max-w-xl max-w-[300px]">
                Work and life, playing nice.
            </div>
            <div className="pb-[170px] md:ml-[11px] items-center md:gap-0 gap-[100px]">
                <div className=" bg-stone-100 rounded-2xl md:w-[1024] w-[340px] md:h-[712] mb-6 pt-9 text-black text-xl ">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-4 md:ml-9"
                    />
                    <h1 className="pb-1 ml-4.5 md:text-[30px] text-[20px] md:ml-8 font-black md:max-w-[700px] max-w-[300px]">
                        See all your commitments in the same place
                    </h1>
                    <p className=" md:ml-8 ml-4.5 text-[17px] md:text-[21px] font-extralight  md:max-w-[700px] max-w-[300px]">
                        No more accidental conflicts between work and personal
                        events.
                    </p>
                    <Image
                        src="/BAndTrio.png"
                        width={1020}
                        height={840}
                        alt="first quarter"
                        className="md:mt-[38px] mt-7 md:w-[960px] w-[330px] h-[200px] md:h-[523px] ml-2.5 md:ml-[33px] shadow-xs "
                    />
                </div>
                <div className=" md:flex ">
                    <div className=" bg-stone-100 rounded-2xl md:w-[328] w-[340] h-[205px] mb-4  py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-4 md:ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-4.5 md:ml-8 font-black">
                            Connect multiple calendars
                        </h1>
                        <p className=" ml-4.5 md:ml-8 text-[17px] md:pt-0 pt-1 font-extralight max-w-[250px]">
                            Easily sync work and personal calendars.
                        </p>
                    </div>
                    <div className=" bg-stone-100 rounded-2xl md:w-[328] w-[340] h-[205px] mb-4 py-7 md:ml-6 md:mr-3 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-4 md:ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-4.5 md:ml-8 font-black">
                            No more double bookings
                        </h1>
                        <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[450px]">
                            Auto-block busy slots across all your calendars.
                        </p>
                    </div>
                    <div className=" bg-stone-100 rounded-2xl md:w-[328] w-[340] h-[205px] mb-1 py-7 md:ml-3  text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-4 md:ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-4.5 md:ml-8 font-black">
                            Easy-to-use mobile app
                        </h1>
                        <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[450px]">
                            View your schedule at a glance and add events
                            quickly with iOS and Android widgets.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Bigandtrio;
