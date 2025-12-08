import Image from "next/image";
const Trio = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black text-[41px] pb-14 max-w-[470px]">
                Fully integrated with your Notion workspace.
            </div>
            <div className="pb-[170px]">
                <div className=" bg-stone-100 rounded-xl w-[1024] h-[680] mb-6 mx-3 py-7 text-black text-xl ">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-9 mt-0.5"
                    />
                    <h1 className="pb-1 ml-8 font-black">
                        Manage your time and work, together.
                    </h1>
                    <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                        See deadlines and project timelines alongside your
                        calendar events so you know where to focus your efforts.
                    </p>
                    <Image
                        src="/trioQ1.png"
                        width={980}
                        height={800}
                        alt="first quarter"
                        className="mt-[65px] ml-[46px] shadow-xs"
                    />
                </div>
                <div className=" flex ">
                    <div className=" bg-stone-100 rounded-xl w-[500] h-[445px] mb-1 mx-3 py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-8 font-black">
                            Connect and create Notion docs
                        </h1>
                        <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                            With info from Notion right in your calendar, you’ll
                            always have full context for every meeting.
                        </p>
                        <Image
                            src="/trioQ2.png"
                            width={450}
                            height={480}
                            alt="second quarter"
                            className="mt-[46px] ml-[51px]"
                        />
                    </div>
                    <div className=" bg-stone-100 rounded-xl w-[500] h-[445px] mb-1 mx-3 py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-9 mt-0.5"
                        />
                        <h1 className="pb-1 ml-8 font-black">
                            Update project timelines
                        </h1>
                        <p className=" ml-8 text-[17px] font-extralight max-w-[450px]">
                            Just drag and drop to edit Notion database items
                            without leaving your calendar.
                        </p>
                        <Image
                            src="/trioQ3.png"
                            width={5020}
                            height={480}
                            alt="third quarter"
                            className="mt-[41px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Trio;
