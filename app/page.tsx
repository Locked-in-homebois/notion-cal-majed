import Image from "next/image";
import Hero from '@/components/hero';
import Video from'@/components/video';
import PhotoDes from "@/components/photoWithDesc";
import Quatro from "@/components/quatroGang";
export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center bg-white">
        <Hero />
        <Video />
        <div className="text-center font-[1000] text-black text-[41px] pb-14">
          Time management, simplified.
        </div>
        <PhotoDes/>
        <Quatro/>
      </main>
    
  );
}
