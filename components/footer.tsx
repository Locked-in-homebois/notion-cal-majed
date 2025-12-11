import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bottom-0 border-t-2 border-gray-200 w-full md:h-[423px] text-center ">
            <div className="grid grid-cols-5 justify-self-center text-6xl w-[1250px] h-full text-black pt-[80px]">
                <div className="bg-red-400"> hi</div>
                <div className="bg-amber-300">hi</div>
                <div className="bg-amber-200">hi</div>
                <div className="bg-amber-100">hi</div>
                <div className="bg-amber-100">hi</div>
            </div>
        </footer>
    );
};
export default Footer;
