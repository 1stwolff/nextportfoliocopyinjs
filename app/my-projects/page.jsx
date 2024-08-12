import ProjectCard from '../../components/ProjectCard';
import { Projects } from '../../constants';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{backgroundImage: "url(/Amoonphil.jpg)"}}
      className='min-h-screen flex flex-col items-center justify-center bg-center bg-cover overflow-y-auto p-5'>
      <h1 className='text-2xl md:text-4xl text-white mt-12 font-bold mb-1'>
        Click the cards to flip them and read more information
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page;
