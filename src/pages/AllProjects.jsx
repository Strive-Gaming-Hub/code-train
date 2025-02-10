import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../utils/projectsData';
import { GrProjects } from 'react-icons/gr';
import { IoHappyOutline } from 'react-icons/io5';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { MdOutlineCategory } from "react-icons/md";

const AllProjects = () => {

  const header = [
    { icon: <GrProjects />, number: '3', text: 'Projects Delivered' },
    { icon: <LuBriefcaseBusiness />, number: '3', text: 'Happy Clients' },
    { icon: <MdOutlineCategory />, number: '3', text: 'Categories' },
    { icon: <IoHappyOutline />, number: '100%', text: 'Satisfaction' },
  ];

  // console.log(projectsData);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  return (
    <div className='md:px-6'>

      <div className='sm:px-8 px-4 mt-6 mb-2'>
        <p className='text-[#8e5eff] mb-3'>Portfolio</p>
        <h2 className='sm:text-4xl text-3xl font-semibold font-ubuntu m-0 '>Explore Our <span className='text-[#956afa]'>Projects</span></h2>
      </div>

      <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 justify-between sm:mx-8 mx-4 p-3 rounded-lg bg-gra-900 mt-7 border border-[#211f37]'
        style={{ background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)" }}
      >

        {
          header?.map((item, i) => (
            <div key={i} className="flex sm:flex-row flex-col items-center sm:gap-4 gap-2 sm:p-4 p-2 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 p-3 rounded-full text-3xl text-[#8e5eff]">
                {item.icon}
              </div>
              <div className='text-center'>
                <span className="sm:text-3xl text-2xl font-bold text-gray-200">{item?.number}</span>
                <p className="sm:text-lg font-medium text-gray-400">{item?.text}</p>
              </div>
            </div>
          ))
        }
      </div>

      {
        projectsData?.map((project, i) => (
          <NavLink key={i} to={`/project/${project?.clientName.toLowerCase().replace(/\s+/g, '')}`}>
            <ProjectCard clientName={project?.clientName} description={project?.description} services={project?.services} img={project?.img} reverse={i} />
          </NavLink>
        ))
      }
    </div>
  )
}

export default AllProjects

