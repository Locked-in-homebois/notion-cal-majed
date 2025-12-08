import Image from "next/image";
const Bigandtrio = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black text-[39px] pb-14 max-w-xl">
                Work and life, playing nice.
            </div>
            <div className="pb-[170px] ml-[11px] items-center">
                <div className=" bg-stone-100 rounded-2xl w-[1024] h-[712] mb-6 py-9 text-black text-xl ">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9"
                    />
                    <h1 className="pb-1 ml-8 font-black">
                        See all your commitments in the same place
                    </h1>
                    <p className=" ml-8 text-[17px] font-extralight ">
                        No more accidental conflicts between work and personal
                        events.
                    </p>
                    <Image
                        src="/BAndTrio.png"
                        width={960}
                        height={800}
                        alt="first quarter"
                        className="mt-[28px] ml-[33px] shadow-xs"
                    />
                </div>
                <div className=" flex ">
                    <div className=" bg-stone-100 rounded-2xl w-[328] h-[205px] mb-1  py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-8 font-black">
                            Connect multiple calendars
                        </h1>
                        <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                            Easily sync work and personal calendars.
                        </p>
                    </div>
                    <div className=" bg-stone-100 rounded-2xl w-[328] h-[205px] mb-1 py-7 ml-6 mr-3 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-8 font-black">
                            No more double bookings
                        </h1>
                        <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                            Auto-block busy slots across all your calendars.
                        </p>
                    </div>
                    <div className=" bg-stone-100 rounded-2xl w-[328] h-[205px] mb-1 py-7 ml-3  text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-8 font-black">
                            Easy-to-use mobile app
                        </h1>
                        <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
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
