/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import Image from 'next/image';

interface IProjectCardProps {
  title: string;
  slug?: string;
  tag?: string[];
  url: string;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, slug, tag, url }) => {
  const router = useRouter();
  return (
    <div className="card relative w-full h-full flex flex-col gap-4">
      <div className="relative  w-full h-[400px] lg:h-[300px] object-cover rounded-xl overflow-hidden">
        <Image src={url} alt={title} fill />
      </div>
      <div className="flex justify-between items-start lg:px-2 ">
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl font-bold">{title}</p>
          <div className="flex gap-2 w-full flex-wrap justify-start items-start">
            {tag?.map((e, i) => {
              return (
                <span key={i} className="py-1 px-2 bg-[#ececec] rounded-full text-sm ">
                  {e}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <button
            className="bg-transparent border-0 text-3xl md:text-5xl"
            onClick={() => {
              router.push(`/project/${slug}`);
            }}
          >
            <IoEnterOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
