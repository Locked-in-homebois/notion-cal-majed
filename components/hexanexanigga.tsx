import Image from "next/image";
const SixGang = () => {
    return (
        <><div>
            <h1 className="text-xl text-black md:pb-[60px] font-black md:text-[45px] text-[32px] md:max-w-[500px] max-w-[250px] text-center md:tracking-tighter tracking-[-1px] pb-[30px]">
                Designed to work with your favorite tools.
            </h1>
        </div>
            <div className="md:grid grid-cols-3 gap-6 ml-1 pb-[150px] ">
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Notion{" "}
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Bring in important dates across workspaces into one
                        calendar.
                    </p>
                </div>
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Google Calendar
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Connect Google Calendar with your existing Notion workspace.
                    </p>
                </div>
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Google Meet
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Available by default with Google Calendar.
                    </p>
                </div>
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Zoom{" "}
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Create new Zoom meetings directly in Notion Calendar.
                    </p>
                </div>
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Apple Calendar
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Create new Apple Calendar meetings directly in Notion.
                    </p>
                </div>
                <div className=" bg-stone-100 rounded-xl md:w-[328] md:pt-0 md:mt-0 pt-px mt-3 w-[340] h-[185px] text-black text-xl">
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={512}
                        height={512}
                        className="w-[42px] h-[42px] pb-4 ml-4 md:ml-[26px] mt-[27.5px]" />
                    <h1 className="pb-1 ml-4.5 md:ml-8 font-extrabold text-lg">
                        Other providers
                    </h1>
                    <p className=" ml-4.5 md:ml-8 text-[17px] font-extralight max-w-[250px]">
                        Add a custom link from other popular conferencing services.
                    </p>
                </div>
            </div></>
    );
};
export default SixGang;
