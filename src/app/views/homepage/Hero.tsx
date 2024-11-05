import { reenieBeanie } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className={`${reenieBeanie.className} text-5xl flex gap-2 `}>
        Hi Folks{' '}
        <span>
          <Image src="/hand.svg" width={32} height={32} alt="hand high five image" />
        </span>
        , I{"'"}m{' '}
      </p>
      <div className="flex">
        <h1 className="text-8xl font-black uppercase ">
          Ahmad
          <br />
          Hafizh
        </h1>
        {/* <div className="h-full w-full relative aspect-square object-cover">
          <Image src="/hero.jpeg" fill alt="ahmad hafizh profile image" />
        </div> */}
      </div>
      <p className={`${reenieBeanie.className} text-5xl`}>-an Full Stack Developer </p>
      <Link href="/" className="py-2 px-4 bg-foreground text-white font-semibold rounded-full mt-10">
        Visit My Github
      </Link>
    </div>
  );
};

export default Hero;