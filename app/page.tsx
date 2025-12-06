import Image from "next/image";
import Hero from '@/components/hero';
import Video from'@/components/video';
export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center bg-white">
        <Hero />
        <Video />
      </main>
    
  );
}
