import Image from "next/image";
import Link from "next/link";
// import React from "react";
const Hero = () => {
    return (
        <main className="flex w-full flex-col items-center md:pt-16 pt-16 pb-12 bg-white">
            <Image
                src="/cal.svg"
                alt="notion cal logo"
                width={100}
                height={100}
            />
            <div className="text-black font-bold pt-4">
                <h4>Notion Calendar</h4>
            </div>
            <div className="flex flex-col items-center md:gap-4 text-center md:py-2 py-1">
                <h1 className="max-w-xs md:text-7xl text-[44px] text-center font-bold tracking-tighter text-black">
                    It's time.
                </h1>
                <p className="md:max-w-md md:text-[20px] text-[18px] text-center text-black md:font-[550] font-medium max-w-[230px] md:pb-0 pb-4">
                    All of your commitments, now in one place. Meet the
                    beautifully designed, fully integrated calendar for your
                    work and life.
                </p>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className=" bg-black rounded-lg flex flex-col text-[18px] sm:flex-row text-white py-[5px] px-[17px]  focus:bg-gray-700 transition font-medium"
                >
                    Get Notion calendar free
                </Link>
            </div>
        </main>
    );
};
export default Hero;
