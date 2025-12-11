import Link from "next/link";
import Image from "next/image";
const AppPart = () => {
    return (
        <>
            <div className="items-center text-center pb-[50px]">
                <h1 className="text-xl text-black items-center font-black md:text-[45px] text-[33px] md:max-w-full max-w-[320px] text-center md:tracking-tighter pb-3 tracking-[-1px] ">
                    Get Notion Calendar for free.
                </h1>
                <p className=" text-center text-[16.5px] text-gray-600 md:ml-12 pb-4 font-extralight md:max-w-[450px] max-w-[320px] tracking-[0.5px]">
                    Unlock a better way to manage your time and life.
                </p>
                <Link
                    className="text-blue-500 text-[17px] md:pl-1"
                    href={
                        "https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    }
                >
                    Get Notion Calendar free →
                </Link>
            </div>
            <div className="md:grid md:grid-cols-2 gap-4 mb-[100px]">
                <div className=" bg-stone-100 rounded-xl  w-[340px] md:w-[500] md:ml-0 ml-5 h-[372px] md:h-[445px] md:mb-1 mb-5 mx-3 pt-7 text-black text-xl">
                    <h1 className="pb-1 md:ml-9 ml-3 font-black">Desktop App</h1>
                    <Image
                        src="/Q1Desk.png"
                        width={1200}
                        height={900}
                        alt="first quarter"
                        className="md:mt-[41px] mt-[30px] md:w-[430px] w-[420px] md:h-[280px] md:mb-[30px] mb-5 justify-self-center"
                    />
                    <Link
                        href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                        className=" bg-white rounded-lg text-[18px] py-[5px] md:mr-5 md:ml-9 ml-3 mr-2 px-[17px] text-black text-center focus:bg-gray-700 transition font-medium"
                    > MacOS</Link>
                    <Link
                        href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                        className=" bg-white rounded-lg text-[18px] py-[5px] px-[17px] text-black text-center focus:bg-gray-700 transition font-medium"
                    > Windows</Link>
                </div>
                <div className=" bg-stone-100 rounded-xl  w-[340px] md:w-[500] md:ml-0 ml-5 h-[422px] md:h-[445px] mb-1 mx-3 pt-7 text-black text-xl">
                    <h1 className="pb-1 md:ml-9 ml-3 font-black">Mobile app</h1>
                    <Image
                        src="/Q2Phone.png"
                        width={600}
                        height={480}
                        alt="second quarter"
                        className="mt-[37px] md:w-[285px] w-[275] h-[260] md:h-[278px] md:mb-[30px] mb-5 justify-self-center"
                    />
                    <Link
                        href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                        className=" bg-white rounded-lg text-[18px] py-[5px] md:mr-5 md:ml-9 ml-3 mr-2 px-[17px] text-black text-center focus:bg-gray-700 transition font-medium"
                    > Apple App Store</Link>
                    <Link
                        href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                        className=" bg-white rounded-lg text-[18px] py-[5px] px-[17px] text-black text-center focus:bg-gray-700 transition font-medium"
                    > Google Play </Link>
                </div>
            </div>
        </>
    );
};
export default AppPart;
