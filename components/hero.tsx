import Image from "next/image";

const Hero = () =>{
  return (
    //<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center py-24 bg-white">
        <Image
          src="/cal.svg"
          alt="notion cal logo"
          width={100}
          height={100}
        />
        <div className="text-black font-bold pt-2">
          <h4>
            Notion calendar
          </h4>
        </div>
        <div className="flex flex-col items-center gap-4 text-center py-2">
          <h1 className="max-w-xs text-7xl text-center font-bold tracking-tight text-black">
            It's time.
          </h1>
          <p className="max-w-md text-2xl text-center text-black font-light">
            All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
            
          </p>
          <div className="max-h-20 bg-black rounded-xl">
          <button className="flex flex-col text-l sm:flex-row text-white py-1.5 px-4  font-stretch-50%">
          
            Get Notion calendar free
          </button>
        </div>
        </div>
        
        
      </main>
    //</div>
  );
}
export default  Hero;