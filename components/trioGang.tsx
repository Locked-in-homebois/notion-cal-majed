import Image from "next/image";
const Trio = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black md:text-[41px] text-[33px] pb-14 md:max-w-[470px] tracking-tight max-w-[248px]">
                Fully integrated with your Notion workspace.
            </div>
            <div className="md:pb-[170px] pb-[60px] md:grid text-black md:text-xl grid-cols-2 gap-5 ">
                <div className="flex flex-col bg-stone-100 rounded-xl col-span-2  pt-10 ">
                    <div className=" space-y-2 mx-[5%]">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className=""
                        />
                        <h1 className="font-black">
                            Manage your time and work, together.
                        </h1>
                        <p className="text-[17px] font-extralight md:max-w-[450px] max-w-[250px] pb-10">
                            See deadlines and project timelines alongside your
                            calendar events so you know where to focus your
                            efforts.
                        </p>
                    </div>
                    <Image
                        src="/trioQ1.png"
                        width={900}
                        height={540}
                        alt="first quarter"
                        className="md:w-[980px] md:h-[465px] w-[340] h-[200] shadow-xs flex flex-col self-end mt-auto"
                    />
                </div>
                <div className="bg-stone-100 rounded-xl  pt-8 space-y-3 flex  place-items-center flex-col">
                    <div className=" space-y-2 ">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className=""
                        />
                        <h1 className="font-black">
                            Connect and create Notion docs
                        </h1>
                        <p className="text-[17px] font-extralight max-w-[450px]">
                            With info from Notion right in your calendar, you’ll
                            always have full context for every meeting.
                        </p>
                    </div>
                    <Image
                        src="/trioQ2.png"
                        width={260}
                        height={400}
                        alt="second quarter"
                        className="md:w-[450px] w-[350px] md:h-[252px] flex flex-col self-end mt-auto"
                    />
                </div>
                <div className=" bg-stone-100 rounded-xl pt-8 space-y-3 place-items-center flex flex-col ">
                    <div className=" space-y-2 ">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className=""
                        />
                        <h1 className="font-black">Update project timelines</h1>
                        <p className="text-[17px] font-extralight max-w-[450px]">
                            Just drag and drop to edit Notion database items
                            without leaving your calendar.
                        </p>
                    </div>
                    <Image
                        src="/trioQ3.png"
                        width={520}
                        height={480}
                        alt="third quarter"
                        className="md:w-[500px] md:h-[258px] flex flex-col self-end mt-auto"
                    />
                </div>
            </div>
        </>
    );
};
export default Trio;
