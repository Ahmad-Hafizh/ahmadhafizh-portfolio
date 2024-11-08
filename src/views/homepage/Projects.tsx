// import Image from 'next/image';

import { TypeProjectsPortfolioAhmadhafizhAsset, TypeProjectsPortfolioAhmadhafizhSkeleton } from '@/types/project.types';
import contentfulClient from '@/lib/contentfulClient';
import ProjectCard from '@/components/homepage/ProjectCard';

const getProjects = async () => {
  try {
    const projects = await contentfulClient.getEntries<TypeProjectsPortfolioAhmadhafizhSkeleton>({
      content_type: 'projectsPortfolioAhmadhafizh',
    });
    return projects;
  } catch (error) {
    console.log(error);
  }
};

const Projects = async () => {
  const projectDb = await getProjects();
  return (
    <div className="w-full mt-20" id="projects">
      <h2 className="text-5xl font-bold">My Best Project</h2>
      <div className="card-wrapper w-full mt-20 h-full flex flex-col justify-start  lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-5 ">
        {projectDb &&
          projectDb.items?.map((project, i) => (
            <ProjectCard key={i} title={project.fields.title} tag={project.fields.tag} slug={project.fields.slug} url={`https:${(project.fields.image as TypeProjectsPortfolioAhmadhafizhAsset).fields.file.url}`} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
