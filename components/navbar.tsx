"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="sticky top-0 grid grid-cols-3 w-full pb-12 max-h-[66px] bg-white text-center shadow-xs md:px-[17px]">
            <div className="flex justify-self-start items-center ml-2 ">
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className=" "
                >
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={41}
                        height={32}
                        className="md:w-[42px] md:h-[33px]"
                    />
                </Link>
            </div>
            <div className="md:flex justify-self-center h-full xl:gap-8 md:gap-2 lg:gap-3 xl:pr-0 md:pr-10 tracking-wide text-gray-700 items-center whitespace-nowrap font-[475] text-sm  hidden [&_a]:transition [&_a:hover]:text-black ">
                <Link href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg">
                    Notion
                </Link>
                <Link href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg">
                    Mail
                </Link>
                <Link href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg">
                    Calendar
                </Link>
                <Link href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg">
                    AI
                </Link>
                <Link href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz">
                    Enterprise
                </Link>
                <Link href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz">
                    Price
                </Link>
                <Link href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz">
                    Explore
                </Link>
                <Link href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz">
                    Request a demo
                </Link>
            </div>
            {/* mobile nav */}

            {/* mobile nav end */}
            {/* curly braces allows us to if then inside class name */}
            {/* menu open ? means if menu open then do blah ':' means else , so if its not open */}
            {/* ease in with duration */}
            {/* -100% so that its all the way on the right side type shit */}
            {/* onclick handle menu ,,,, handle menu is alway set menu open not menu open cuz menu open initally is closed*/}
            <div className="flex justify-self-end items-center pb-3 gap-5 pr-2 text-center md:col-span-1 col-span-2">
                <div onClick={handleNav} className=" md:hidden ">
                    <Menu className="text-black" />
                </div>
                <div
                    className={
                        menuOpen
                            ? " fixed top-0 right-0 w-full h-screen bg-stone-100 ease-in duration-200 flex flex-col "
                            : " fixed top-0 -right-full w-full h-screen bg-stone-100 ease-out duration-200"
                    }
                >
                    <div className="grid grid-cols-3 mt-2">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={41}
                            height={32}
                            className="w-[38px] h-[33px] mt-auto items-center ml-3 justify-self-start"
                        />
                        <Link
                            href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                            className=" bg-blue-600 rounded-lg text-[13px] tracking-wider w-[195px] items-center mt-auto justify-self-start  text-gray-100 py-2 px-[15px] font-[550]"
                        >
                            Get Notion Calendar free
                        </Link>
                        <X
                            onClick={handleNav}
                            className="text-black mt-auto mr-4 justify-self-end"
                        />
                    </div>
                    <div className="flex flex-col font-black text-black items-start gap-2 pt-9 text-left text-[22px] pl-4">
                        <Link href={"/"}>Notion</Link>
                        <Link href={"/"}>Mail</Link>
                        <Link href={"/"}>Calendar</Link>
                        <Link href={"/"}>AI</Link>
                        <Link href={"/"}>Enterprise</Link>
                        <Link href={"/"}>Pricing</Link>
                        <Link href={"/"}>More</Link>
                    </div>
                    {/* footer of menu */}
                    <div className="mt-auto shadow-2xl border-t text-[16px] border-gray-200 h-[18%] flex flex-col font-[550] items-center gap-1 pb-3">
                        <Link
                            href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                            className=" bg-blue-600 rounded-lg w-[90%]  mt-auto text-gray-100 py-2 px-[15px] "
                        >
                            Download App{" "}
                        </Link>
                        <Link
                            href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                            className=" bg-sky-100 rounded-lg w-[90%] mt-auto text-blue-800 py-2 px-[15px] "
                        >
                            Log in{" "}
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <Link
                        href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                        className=" text-[15px] text-black hidden md:block "
                    >
                        Log in
                    </Link>
                    <Link
                        href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                        className="md:text-[16px] bg-black rounded-lg  text-[12px]  text-gray-100 py-2 md:px-[17px] px-[15px] focus:bg-gray-700 transition md:font-medium font-[550]"
                    >
                        Get Notion calendar free
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
