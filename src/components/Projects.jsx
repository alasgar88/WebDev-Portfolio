import React from 'react';
import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useGlobalContext } from '../App';

const Projects = () => {
  const { projectsRef } = useGlobalContext();
  return (
    <section className='py-20 align-elements' ref={projectsRef}>
      <SectionTitle text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
Projects;
