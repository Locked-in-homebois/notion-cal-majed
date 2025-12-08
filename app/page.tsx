// import Image from "next/image";
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
            <PhotoDes />
            <Quatro />
            <Trio />
            <Bigandtrio />
        </main>
    );
}
