import React, { useEffect } from 'react'
import projectsData from '../utils/projectsData'
import { useParams } from "react-router-dom";
import ProjectCard from '../components/ProjectCard';
import ProjectGoals from '../components/ProjectGoals';
import ProjectSwipper from '../components/ProjectSwipper';

const SingleProjectPage = () => {

  const { clientName } = useParams();
  // console.log(clientName);
  
  const project = projectsData.find((project) => project?.clientName.toLowerCase().replace(/\s+/g, '') === clientName.toLowerCase().replace(/\s+/g, ''));
  // console.log(project);
  

  if (!project) {
    return <div>Project not found!</div>;
  }

  // useEffect(()=>{
  //   window.scrollTo(0,0);
  // },[])

  return (
    <div>
      <ProjectCard clientName={project?.clientName} description={project?.description} img={project?.img} services={project?.services} reverse='' />

      <div className='md:py-16 py-12'>
        <h1 className='md:text-4xl text-3xl font-semibold text-center'>Scope of work</h1>
        <div className='flex md:flex-row flex-col px-4 items-center justify-center gap-20 mt-16'>
          <div className='max-w-sm flex items-center justify-center flex-col '>
            <img src="https://leo9studio.com/img/case-study/travelxp/ux_app_design_company_leo9_studio.svg" alt="" />
            <h1 className='text-3xl font-semibold my-4'>UX Design</h1>
            <p className='text-center  text-lg'>Keeping the target audience in mind the UX design was made very simple using the KISS principle.</p>
          </div>
          <div className='max-w-sm flex items-center justify-center flex-col'>
            <img src="https://leo9studio.com/img/case-study/travelxp/ui_app_design_company_leo9_studio.svg" alt="" />
            <h1 className='text-3xl font-semibold my-4'>UI Design</h1>
            <p className='text-center  text-lg'>The colors and illustrations were designed to suit the business following a component-based design system.</p>
          </div>
        </div>
      </div>

      <div>
        <ProjectGoals goals={project?.goals} /> 
      </div>

      <div className='md:py-16 py-12 md:px-0 px-4'>
        <h1 className='text-4xl font-semibold text-center'>Screens</h1>
        {/* <div className='flex items-center justify-center md:py-8 py-2'>
                    <img src="/screen3.png" alt="" className='rounded-xl lg:h-[32rem] md:w-[71%]' />
                </div>

                <div className='flex justify-center md:gap-4 gap-1 mx-auto md:w-[71%] md:px-4'>
                    <img src="/screen1.png" alt="" className='w-1/2 rounded-xl' />
                    <img src="/screen8.png" alt="" className='w-1/2 rounded-xl' />
                </div> */}
      </div>

      <ProjectSwipper images={project?.images} />
      
    </div>
  )
}

export default SingleProjectPage