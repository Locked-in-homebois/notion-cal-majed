// import Image from "next/image";
import Hero from "@/components/hero";
import Video from "@/components/video";
import PhotoDes from "@/components/photoWithDesc";
import Quatro from "@/components/quatroGang";
import Trio from "@/components/trioGang";
import Bigandtrio from "@/components/bigandtrio";
import SixGang from "@/components/hexanexanigga";
import AppPart from "@/components/GetAppPart";
import QA from "@/components/Q&A";
import FloatingBox from "@/components/Floatingbox";
export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Hero />
            <Video />
            <PhotoDes />
            <Quatro />
            <Trio />
            <Bigandtrio />
            <SixGang />
            <AppPart />
            <QA />
        </main>
    );
}
