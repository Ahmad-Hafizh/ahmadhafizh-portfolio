import Image from 'next/image';
import Link from 'next/link';
import { IoEnterOutline } from 'react-icons/io5';

const Projects = () => {
  const projectDb = [
    {
      title: 'Gistara Geya Samasta Jaya',
      techStack: ['Front-End', 'Nextjs', 'Tailwind'],
      url: '/',
      img: '/1.jpg',
    },
    {
      title: 'Porsche',
      techStack: ['Front-End', 'Nextjs', 'Tailwind'],
      url: '/',
      img: '/2.jpg',
    },
    {
      title: 'Loro Piana',
      techStack: ['Front-End', 'Nextjs', 'Tailwind'],
      url: '/',
      img: '/3.jpg',
    },
  ];
  return (
    <div className="w-full mt-20">
      <h2 className="text-5xl font-bold">My Best Project</h2>
      <div className="card-wrapper w-full h-full grid grid-cols-3 mt-20 gap-4">
        {projectDb.map((e, i) => {
          return (
            <div className="card relative w-full h-full flex flex-col gap-4" key={i}>
              <div className="relative  w-full h-[300px] object-cover rounded-xl overflow-hidden">
                <Image src={e.img} alt={e.title} fill />
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="text-2xl font-bold">{e.title}</p>
                  <div className="flex gap-2">
                    {e.techStack.map((e, i) => {
                      return (
                        <span key={i} className="py-1 px-2 bg-[#ececec] rounded-full text-sm">
                          {e}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Link href={e.url} className="text-5xl">
                    <IoEnterOutline />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
