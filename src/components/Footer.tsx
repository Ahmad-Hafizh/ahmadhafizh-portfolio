import { reenieBeanie } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col-reverse gap-20 lg:flex-row px-[5%] min-h-[50vh] h-full py-10 border-t-2 items-stretch">
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
        <div className="flex items-center gap-2">
          <Image src="/avatar.svg" alt="navbar avatar" width={50} height={50} />
          <p className="text-xl leading-4 uppercase font-black">
            Ahmad <br />
            Hafizh
          </p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col leading-4 gap-1">
            <p className={`${reenieBeanie.className} text-2xl mb-2`}>Contact</p>
            <Link href="/">Ahaaafizh@gmail.com</Link>
            <Link href="/">+62 858-1060-2695</Link>
          </div>
          <div className="flex flex-col leading-4 gap-1">
            <p className={`${reenieBeanie.className} text-2xl mb-2`}>Sections</p>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
          </div>
        </div>
        <p className="text-sm">Made with Love by @ME</p>
      </div>
      <div className="w-full lg:w-1/2 bg-foreground p-10 rounded-xl flex flex-col gap-5 justify-center">
        <div>
          <div className="flex gap-4 items-center">
            <p className="text-5xl text-white font-bold w-fit">Lets Keep in Touch</p>
            <div className="w-[100px] h-[100px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px] 2xl:w-[50px] 2xl:h-[50px] relative object-cover">
              <Image src="/handCallSign.svg" fill alt="hand call sign icon" />
            </div>
          </div>
          <p className="text-white text-sm mt-2">Send me a reach out, I&apos;ll contact you ASAP</p>
        </div>
        <div className="flex flex-col gap-2">
          <input type="text" className="w-full bg-transparent p-2 border-b-2 border-[#ececec]" placeholder="name" />
          <input type="text" className="w-full bg-transparent p-2 border-b-2 border-[#ececec]" placeholder="email" />
        </div>
        <Link href="/" className="bg-[#ececec] py-2 px-4 rounded-full w-fit">
          Send
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
