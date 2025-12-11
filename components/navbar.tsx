import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="sticky top-0 grid grid-cols-3 w-full pb-12 max-h-[66px] bg-white text-center shadow-xs ">
            <div className="justify-self-start my-[17px] ml-4">
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
            <div className="md:flex md:justify-self-center h-full max-h-[66px] gap-8 tracking-wide text-black items-center whitespace-nowrap font-[475] text-sm py-6  hidden  ">
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                >
                    Notion
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                >
                    Mail
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                >
                    Calendar
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                >
                    AI
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                >
                    Enterprise
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                >
                    Price
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                >
                    Explore
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                >
                    Request a demo
                </Link>
                
            </div>
            <div className="flex justify-self-end items-center w-[450px] h-full md:pr-5 gap-5 justify-end">
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className=" text-[15px] text-black md:h-max-[66px] max-w-2xl items-center hidden md:block "
                >
                    Log in
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className="md:text-[16px] bg-black rounded-lg flex flex-col text-[14px]  text-gray-100 py-2 md:px-[17px] px-[15px] focus:bg-gray-700 transition md:font-medium font-[550]"
                >
                    Get Notion calendar free
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;