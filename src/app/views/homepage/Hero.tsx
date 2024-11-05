import { reenieBeanie } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className={`${reenieBeanie.className} text-5xl flex gap-2 text-center`}>
        Hi Folks
        <span>
          <Image src="/hand.svg" width={32} height={32} alt="hand high five image" />
        </span>
        , I&apos;m
      </p>
      <div className="flex">
        <h1 className="text-7xl md:text-8xl font-black uppercase ">
          Ahmad
          <br />
          Hafizh
        </h1>
      </div>
      <p className={`${reenieBeanie.className} text-5xl text-center`}>-an Full Stack Developer </p>
      <Link href="https://github.com/Ahmad-Hafizh" className="py-2 px-4 bg-foreground text-white font-semibold rounded-full mt-10">
        Visit My Github
      </Link>
    </div>
  );
};

export default Hero;
