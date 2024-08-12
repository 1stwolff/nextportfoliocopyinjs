// done

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/Amoonphil.jpg)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[790px]">
          <h1 className="text-[50px] text-cyan-300 font-semibold">
            Welcome!{" "}   
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-500">
              to my Portfolio
            </span>
          </h1>
          <p className="text-green-500 hidden md:block font-bold">
            My name is Phil! 
          </p>
          <p className="text-gray-200 hidden md:block">
            Thank you for visiting my site if you have questions contact me!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="rounded-[28px] group relative bg-orange-600 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
              My Skills
            </Link>
            <Link href="/my-projects" className="rounded-[28px] group relative bg-yellow-600 px-5 border border-none py-3 text-lg text-white max-w-[200px] z-[20]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-opacity-20"/>
              My Projects
            </Link>
            <Link href="/contact-me" className="rounded-[28px] group relative bg-green-600 border border-none px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-opacity-20"/>
              Contact Me
            </Link>
            <Link href="/my-demos" className="rounded-[28px] group relative bg-cyan-600 border border-none px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-opacity-20"/>
              My live demos
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[28px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
          My Skills
        </Link>
        <Link href="/my-projects" className="rounded-[28px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
          My Projects
        </Link>
        <Link href="/contact-me" className="rounded-[28px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] z-[20]">
          Contact Me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[5]">
        <Image src="/Animation-Owl1.gif" alt="bird" height={300} width={300} className="right-55 top-40" />
      </div>
      <div className="absolute top-12 z-[1] w-full h-full">
        <Image src="/vegetation.png" alt="trees" width={2100} height={2100} className="w-full h-full top-1" />
      </div>
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[5]" />
    </main>
  );
}

