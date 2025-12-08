import Image from "next/image";
const Quatro = () => {
    return (
        <div className="pb-[170px]">
            <div className=" flex ">
                <div className=" bg-stone-100 rounded-xl w-[500] h-[535px] mb-6 mx-3 py-7 text-black text-xl ">
                    <Image
                        src="/Q1.png"
                        width={430}
                        height={430}
                        alt="first quarter"
                        className="mx-[35px] mt-[183px] shadow-xs"
                    />
                </div>
                <div className=" bg-stone-100 rounded-xl w-[500] h-[535px] mb-6 mx-3 py-7 text-black text-xl ">
                    <Image
                        src="/Q2.png"
                        width={500}
                        height={500}
                        alt="second quarter"
                        className="mt-[170px]"
                    />
                </div>
            </div>
            <div className=" flex ">
                <div className=" bg-stone-100 rounded-xl w-[500] h-[535px] mb-1 mx-3 py-7 text-black text-xl">
                    <Image
                        src="/Q3.png"
                        width={500}
                        height={500}
                        alt="third quarter"
                        className="mt-[170px]"
                    />
                </div>
                <div className=" bg-stone-100 rounded-xl w-[500] h-[535px] mb-1 mx-3 py-7 text-black text-xl">
                    <Image
                        src="/Q4.png"
                        width={500}
                        height={480}
                        alt="fourth quarter"
                        className="mt-[140px]"
                    />
                </div>
            </div>
        </div>
    );
};
export default Quatro;
