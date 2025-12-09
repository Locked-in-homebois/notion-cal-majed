import Image from "next/image";
const Trio = () => {
    return (
        <>
            <div className="text-center font-[1000] text-black md:text-[41px] text-[30px] pb-14 md-max-w-[470px] max-w-[200px]">
                Fully integrated with your Notion workspace.
            </div>
            <div className="pb-[170px] items-center">
                <div className=" bg-stone-100 rounded-xl md:ml-0 ml-5 md:w-[1024] w-[310px] md:h-[680] mb-6 md:mx-3 py-7 text-black md:text-xl text-lg ">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={22}
                        height={24}
                        className="pb-4 ml-4 mt-0.5"
                    />
                    <h1 className="pb-1 ml-4 md:ml-8 font-black">
                        Manage your time and work, together.
                    </h1>
                    <p className=" md:ml-8 ml-4 text-[17px] font-extralight md:max-w-[450px] max-w-[250px]">
                        See deadlines and project timelines alongside your
                        calendar events so you know where to focus your efforts.
                    </p>
                    <Image
                        src="/trioQ1.png"
                        width={300}
                        height={240}
                        alt="first quarter"
                        className="mt-[65px] md:w-[980px] md:[800px] ml-[5px] md:ml-[46px] shadow-xs"
                    />
                </div>
                <div className=" md:flex ">
                    <div className=" bg-stone-100 rounded-xl w-[310px] md:w-[500] md:ml-0 ml-5 h-[420px] md:h-[445px] mb-3 mx-3 py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-4 mt-0.5"
                        />
                        <h1 className="pb-1 ml-3 font-black">
                            Connect and create Notion docs
                        </h1>
                        <p className=" ml-3 text-[17px] font-extralight max-w-[450px]">
                            With info from Notion right in your calendar, you’ll
                            always have full context for every meeting.
                        </p>
                        <Image
                            src="/trioQ2.png"
                            width={260}
                            height={400}
                            alt="second quarter"
                            className="md:mt-[46px] mt-[75px] ml-[51px] md:w-[450px] md:h-[480px]"
                        />
                    </div>
                    <div className=" bg-stone-100 rounded-xl w-[310px] md:w-[500] md:ml-0 ml-5 h-[372px] md:h-[445px] mb-1 mx-3 py-7 text-black text-xl">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={22}
                            height={24}
                            className="pb-4 ml-4 mt-0.5"
                        />
                        <h1 className="pb-1 ml-3 font-black">
                            Update project timelines
                        </h1>
                        <p className=" ml-3 text-[17px] font-extralight max-w-[450px]">
                            Just drag and drop to edit Notion database items
                            without leaving your calendar.
                        </p>
                        <Image
                            src="/trioQ3.png"
                            width={520}
                            height={480}
                            alt="third quarter"
                            className="mt-[41px] md:w-[520px] md:h-[480px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Trio;
