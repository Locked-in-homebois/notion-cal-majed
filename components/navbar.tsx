import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="fixed top-0 flex w-full pb-12 max-h-[66px] bg-white text-center">
            <div className="md:mx-[25px] md:my-[18px] md:pr-24">
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className=" "
                >
                    <Image
                        src="/notion-icon.svg"
                        alt="notion logo"
                        width={42}
                        height={43}
                    />
                </Link>
            </div>
            <div className="flex-row w-full h-full max-h-[66px] text-black font-[505] text-center items-center text-sm py-6 pl-40 hidden md:block">
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className="mr-3"
                >
                    Notion
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className="m-3"
                >
                    Mail
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className="m-3"
                >
                    Calendar
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className="m-3"
                >
                    AI
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className="m-3"
                >
                    Enterprise
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className="m-3"
                >
                    Price
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className="m-3"
                >
                    Explore
                </Link>
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className="m-3"
                >
                    Request a demo
                </Link>
            </div>
            <div className="flex mt-3.5 items-end w-[450px] h-full md:pl-6 justify-end">
                <Link
                    href="https://youtu.be/xvFZjo5PgG0?si=BnbvMVhfynKkNWpz"
                    className=" text-[15px] text-black md:h-max-[66px] max-w-2xl md:mb-2 hidden md:block "
                >
                    Log in
                </Link>
                <Link
                    href="https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg"
                    className=" bg-black rounded-lg flex flex-col text-[16px]  text-white py-2 px-[17px]  focus:bg-gray-700 transition font-medium"
                >
                    Get Notion calendar free
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
