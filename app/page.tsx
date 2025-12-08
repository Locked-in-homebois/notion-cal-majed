import Image from "next/image";
import Hero from "@/components/hero";
import Video from "@/components/video";
import PhotoDes from "@/components/photoWithDesc";
import Quatro from "@/components/quatroGang";
import Trio from "@/components/trioGang";
import Bigandtrio from "@/components/bigandtrio";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-white">
            <Navbar />
            <Hero />
            <Video />
            <div className="text-center font-[1000] text-black text-[41px] pb-14">
                Time management, simplified.
            </div>
            <PhotoDes />
            <Quatro />
            <div className="text-center font-[1000] text-black text-[41px] pb-14 max-w-[470px]">
                Fully integrated with your Notion workspace.
            </div>
            <Trio />
            <div className="text-center font-[1000] text-black text-[39px] pb-14 max-w-xl">
                Work and life, playing nice.
            </div>
            <Bigandtrio />
        </main>
    );
}
