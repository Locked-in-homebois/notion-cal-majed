import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bottom-0 border-t-2 border-gray-200 md:bg-white bg-neutral-50 justify-center md:w-full w-auto md:h-[423px] ">
            <div className="md:grid grid grid-cols-1 gap-2 md:grid-cols-5 justify-self-center md:w-[1250px] w-auto h-full text-black pt-20 md:text-sm text-[21px] [&_a]:transition [&_a:hover]:underline [&_a:hover]:text-gray-300 [&_a]:duration-600 text-center md:pb-0 pb-[100px]">
                <div className="md:flex md:flex-col justify-between pb-10">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/notion-icon.svg"
                                alt="Notion"
                                width={40}
                                height={32}
                            />
                        </Link>

                        <div className="flex items-center gap-4 ">
                            <Link href="#" aria-label="Instagram">
                                IG
                            </Link>
                            <Link href="#" aria-label="X">
                                X
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                in
                            </Link>
                            <Link href="#" aria-label="Facebook">
                                f
                            </Link>
                            <Link href="#" aria-label="YouTube">
                                YT
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-3 mt-10">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium"
                        >
                            <span role="img" aria-hidden="true">
                                🌐
                            </span>
                            <span>English (US)</span>
                            <span aria-hidden="true">▾</span>
                        </button>

                        <div>
                            <Link
                                href="#"
                                className="text-xs text-gray-600 underline-offset-2 hover:underline"
                            >
                                Cookie settings
                            </Link>
                        </div>

                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Notion Labs, Inc.
                        </p>
                    </div>
                </div>

                <div className="space-y-3 ">
                    <p className="font-semibold">Company</p>
                    <div className="flex flex-col gap-2 text-gray-700  focus:text-gray-700 focus:underline">
                        <Link href="#">About us</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Security</Link>
                        <Link href="#">Status</Link>
                        <Link href="#">Terms &amp; privacy</Link>
                        <Link href="#">Your privacy rights</Link>
                    </div>
                </div>

                <div className="space-y-3 md:pt-0 pt-6">
                    <p className="font-semibold">Download</p>
                    <div className="flex flex-col gap-2 text-gray-700  focus:text-gray-700 focus:underline">
                        <Link href="#">iOS &amp; Android</Link>
                        <Link href="#">Mac &amp; Windows</Link>
                        <Link href="#">Calendar</Link>
                        <Link href="#">Web Clipper</Link>
                    </div>
                </div>

                <div className="space-y-3 md:pt-0 pt-6">
                    <p className="font-semibold">Resources</p>
                    <div className="flex flex-col gap-2 text-gray-700  focus:text-gray-700 focus:underline">
                        <Link href="#">Help center</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Community</Link>
                        <Link href="#">Integrations</Link>
                        <Link href="#">Templates</Link>
                        <Link href="#">Partner programs</Link>
                    </div>
                </div>

                <div className="space-y-3 md:pt-0 pt-6">
                    <p className="font-semibold">Notion for</p>
                    <div className="flex flex-col gap-2 text-gray-700  focus:text-gray-700 focus:underline">
                        <Link href="#">Enterprise</Link>
                        <Link href="#">Small business</Link>
                        <Link href="#">Personal</Link>
                        <Link href="#" className="font-medium">
                            Explore more →
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
