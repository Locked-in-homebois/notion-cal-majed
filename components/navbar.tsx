"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
const menuopenatr = " fixed top-0 w-full h-screen bg-stone-100 duration-200 ";
const navlist = [
    { lable: "Notion", href: "/" },
    { lable: "Mail", href: "/" },
    { lable: "Calendar", href: "/" },
    { lable: "Ai", href: "/" },
    { lable: "Enterprise", href: "/" },
    { lable: "Pricing", href: "/" },
    { lable: "Explore", href: "/" },
    { lable: "Request a demo", href: "/" },
];
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="sticky top-0 grid grid-cols-3 pb-12 max-h-[66px] bg-white shadow-xs max-w-[1900px] md:px-[17px] px-2 ">
            <div className="flex justify-self-start items-center ">
                <Link
                    href="https://www.apple.com/tr/shop/buy-iphone/iphone-17-pro/6.9-in%C3%A7-ekran-256gb-abis"
                    className=" "
                >
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={41}
                        height={32}
                        className="md:w-[10%] mt-auto w-[25%]"
                    />
                </Link>
            </div>
            <div className="lg:flex justify-self-center h-full xl:gap-8 md:gap-2 lg:gap-3 xl:pr-0 md:pr-10 tracking-wide text-gray-700 items-center whitespace-nowrap font-[475] text-sm  hidden [&_a]:transition [&_a:hover]:text-black [&_a:hover]:bg-gray-300 [&_a]:rounded-md">
                {navlist.map((navlist) => (
                    <Link href={navlist.href} key={navlist.lable}>
                        {" "}
                        {navlist.lable}
                    </Link>
                ))}
            </div>
            <div className="flex justify-self-end items-center pb-3 gap-5 pr-2 text-center lg:col-span-1 col-span-2">
                <div onClick={handleNav} className=" lg:hidden ">
                    <Menu className="text-black mt-2" />
                </div>
                <div
                    className={
                        menuOpen
                            ? ` ${menuopenatr} right-0 ease-in  flex flex-col`
                            : `${menuopenatr} -right-full  ease-out `
                    }
                >
                    <div className="grid grid-cols-3 mt-2">
                        <Image
                            src="/notion-icon.svg"
                            alt="notion logo"
                            width={41}
                            height={32}
                            className="w-[23%] mt-auto items-center ml-3 justify-self-start"
                        />
                        <div className="flex col-span-2 justify-self-end items-center">
                            <Link
                                href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                                className=" bg-blue-600 rounded-lg text-[13px] tracking-wider w-[195px] justify-self-start mt-1 text-gray-100 py-2 px-[15px] font-[550]"
                            >
                                Get Notion Calendar free
                            </Link>
                            <X
                                onClick={handleNav}
                                className="text-black mr-4 "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col font-black text-black items-start gap-2 pt-9 text-left text-[22px] pl-4">
                        {navlist.map((navlist) => (
                            <Link href={navlist.href} key={navlist.lable}>
                                {navlist.lable}
                            </Link>
                        ))}
                    </div>
                    {/* footer of menu */}
                    <div className="mt-auto shadow-2xl  text-[16px] h-[18%] flex flex-col font-[550] items-center gap-1 pb-3">
                        <Link
                            href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                            className=" bg-blue-600 rounded-lg w-[90%]  mt-auto text-gray-100 py-2 px-[15px] "
                        >
                            Download App
                        </Link>
                        <Link
                            href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                            className=" bg-sky-100 rounded-lg w-[90%] mt-auto text-blue-800 py-2 px-[15px] "
                        >
                            Log in
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
