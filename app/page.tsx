// import Image from "next/image";
import Hero from "@/components/hero";
import Video from "@/components/video";
import PhotoDes from "@/components/photoWithDesc";
import Quatro from "@/components/quatroGang";
import Trio from "@/components/trioGang";
import Bigandtrio from "@/components/bigandtrio";
import SixGang from "@/components/hexanexanigga";
import AppPart from "@/components/GetAppPart";
export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-white">
            <Hero />
            <Video />
            <PhotoDes />
            <Quatro />
            <Trio />
            <Bigandtrio />
            <SixGang/>
            <AppPart/>
        </main>
    );
}
