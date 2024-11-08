import * as React from 'react';

interface IProjectDetailLayoutProps {
  children: React.ReactNode;
}

const ProjectDetailLayout: React.FunctionComponent<IProjectDetailLayoutProps> = ({ children }) => {
  return <div className="w-full min:h-screen h-full">{children}</div>;
};

export default ProjectDetailLayout;
