import Image from "next/image";
import Link from "next/link";
import React from "react";
const Navbar = () => {
    return (
    <nav className="fixed top-0 flex w-full flex-col pb-12 h-[66px] bg-white shadow-xs">
        <div className="items-center text-black px-[25px] py-[18px]">
            <Link href='https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz'>
            <Image src="/notion-icon.svg" alt="notion logo" width={29} height={30}>
            </Image>
            </Link>
        </div>
    </nav>
    );
};
export default Navbar;
