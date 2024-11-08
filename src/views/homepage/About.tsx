import { reenieBeanie } from '@/app/page';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';

const About = () => {
  return (
    <div className="w-full" id="about">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        <div className="left relative w-full h-[50vh] md:h-full object-cover bg-[#ececec] rounded-xl">
          <Image src="/pfp-about.svg" alt="profile picture" fill />
        </div>
        <div className="right flex flex-col gap-4">
          <h2 className={`${reenieBeanie.className} text-5xl flex gap-2 `}>introduction</h2>
          <p className="text-5xl font-bold">A Full-stack Developer based in Indonesia</p>
          <p>
            I&apos;ve always had strong passion in coding, designing & problem-solving, which is the passions that I take as my carrer path as web developer. For me a good Website Developer is should be capable to design both appealing
            visual & sustainable systems, which I&apos;m bout to be LMAO.
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center gap-10 py-20">
        <h2 className={`${reenieBeanie.className} text-5xl flex gap-2 `}>tech-stack</h2>
        <div className="w-full lg:w-[75%] flex justify-center md:justify-between gap-y-10 gap-x-14 md:gap-10 lg:gap-auto items-center text-center mx-auto flex-wrap md:flex-nowrap text-7xl">
          <FaHtml5 className=" hover:text-red-500" />
          <FaCss3Alt className=" hover:text-blue-500" />
          <IoLogoJavascript className=" hover:text-yellow-300" />
          <RiNextjsFill className=" hover:text-black" />
          <RiTailwindCssFill className=" hover:text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default About;
