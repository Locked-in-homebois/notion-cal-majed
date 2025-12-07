import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hero = () => {
    return (
    <main className="flex w-full flex-col items-center pt-24 pb-12 bg-white">
        <Image src="/cal.svg" alt="notion cal logo" width={100} height={100} />
        <div className="text-black font-bold pt-2">
        <h4>Notion calendar</h4>
        </div>
        <div className="flex flex-col items-center gap-4 text-center py-2">
        <h1 className="max-w-xs text-7xl text-center font-bold tracking-tight text-black">
            It's time.
        </h1>
        <p className="max-w-md text-[20px] text-center text-black font-[550]">
            All of your commitments, now in one place. Meet the beautifully
            designed, fully integrated calendar for your work and life.
        </p>
            <Link href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz" className=" bg-black rounded-lg flex flex-col text-[18px] sm:flex-row text-white py-[5px] px-[17px]  focus:bg-gray-700 transition font-medium">
                Get Notion calendar free
            </Link>
        </div>
    </main>
    );
};
export default Hero;
