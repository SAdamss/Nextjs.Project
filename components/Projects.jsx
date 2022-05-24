
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MTImg from '../public/assets/projects/projec 1.jpeg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#189934]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Performer Portfolio'
            backgroundImg={MTImg}
            projectUrl='/property'
          />
      
      
    
        </div>
      </div>
    </div>
  );
};

export default Projects;