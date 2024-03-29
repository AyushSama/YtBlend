'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleEditor = ()=>{
    router.push('/editor');
  }

  const handleCreator = ()=>{
    router.push('/creator');
  }

  return (
    <section className="flex justify-center items-center h-screen w-screen text-black bg-lime-100">
      <div className="flex flex-col px-7 py-11 mt-5 max-w-full shadow-lg bg-zinc-200 rounded-[30px] w-[396px] max-md:px-5">
        <h2 className="text-3xl">Continue as....</h2>
        <div className="flex gap-5 justify-between mt-10 text-base font-medium leading-6 whitespace-nowrap max-md:mt-10">
          <button onClick={()=>handleEditor() } className="justify-center px-10 py-2 bg-[#002A32] text-white rounded-lg max-md:px-5"> {/* Change background color class to bg-002A32 */}
            Editor
          </button>
          <button onClick={()=>handleCreator()} className="justify-center px-8 py-2 bg-orange-300 rounded-lg">
            Creator
          </button>
        </div>
      </div>
    </section>
  );
}
