import contentfulClient from '@/lib/contentfulClient';
import * as React from 'react';
import { TypeProjectsPortfolioAhmadhafizhSkeleton } from '@/types/project.types';
import RichText from '@/components/RichText';

interface IProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

const getProject = async (params: string) => {
  try {
    const res = await contentfulClient.getEntries<TypeProjectsPortfolioAhmadhafizhSkeleton>({
      content_type: 'projectsPortfolioAhmadhafizh',
      'fields.slug[match]': params,
    });
    if (res.items.length > 0) {
      return res.items[0];
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const ProjectDetailPage: React.FunctionComponent<IProjectDetailPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  const project = await getProject(slug);
  return (
    <div className="container mx-auto h-screen flex justify-center items-center px-[5%]">
      <div className="flex flex-col w-1/2 gap-10">
        <h2 className="text-5xl font-bold">{project?.fields.title}</h2>
        <RichText document={project?.fields.description} />
      </div>
      <div className="w-1/2 flex justify-center">image here</div>
    </div>
  );
};

export default ProjectDetailPage;
