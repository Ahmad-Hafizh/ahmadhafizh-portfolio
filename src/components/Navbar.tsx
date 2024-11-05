import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-[5%] py-5 shadow-sm fixed top-0 z-50 bg-white">
      <div className="flex items-center gap-2">
        <Image src="/avatar.svg" alt="navbar avatar" width={50} height={50} />
        <p className="text-xl leading-4 uppercase font-black">
          Ahmad <br />
          Hafizh
        </p>
      </div>
      <div className="right">
        <Link href="/" className="bg-foreground text-white px-4 py-2 rounded-full">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
