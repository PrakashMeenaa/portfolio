import Image from 'next/image'
import React from 'react'

const About = () => {
  const icons = [
    { name: 'Bootstrap', icon: '/icons/Bootstrap.svg' },
    { name: 'CSS', icon: '/icons/CSS.svg' },
    { name: 'Eclipse', icon: '/icons/Eclipse.svg' },
    { name: 'ExpressJS', icon: '/icons/ExpressJS.svg' },
    { name: 'Figma', icon: '/icons/Figma.svg' },
    { name: 'Git', icon: '/icons/Git.svg' },
    { name: 'Github', icon: '/icons/Github.svg' },
    { name: 'HTML', icon: '/icons/HTML.svg' },
    { name: 'Java', icon: '/icons/Java.svg' },
    { name: 'javascript', icon: '/icons/javascript.svg' },
    { name: 'MongoDB', icon: '/icons/MongoDB.svg' },
    { name: 'MySQL', icon: '/icons/MySQL.svg' },
    { name: 'Netlify', icon: '/icons/Netlify.svg' },
    { name: 'nextjs', icon: '/icons/nextjs.svg' },
    { name: 'NodeJS', icon: '/icons/NodeJS.svg' },
    { name: 'Npm', icon: '/icons/Npm.svg' },
    { name: 'React', icon: '/icons/React.svg' },
    { name: 'TailwindCSS', icon: '/icons/TailwindCSS.svg' },
    { name: 'TypeScript', icon: '/icons/TypeScript.svg' },
    { name: 'Vercel', icon: '/icons/Vercel.svg' },
    { name: 'VisualStudio', icon: '/icons/VisualStudio.svg' },
    { name: 'Vite-Dark', icon: '/icons/Vite-Dark.svg' },
    { name: 'VSCode', icon: '/icons/VSCode.svg' },
  ];
  
  return (
    <div id="about" className="text-primary w-screen h-max   my-24  px-3 sm:px-16 lg:px-32 justify-around items-center">
        <div className="text-[8vw] md:text-[5vw] uppercase font-semibold ">About me</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
        <div className="grid gap-10">
          <div className='bentobox'>
              <p className='text-2xl'>Senior web Developer with 5+ years of experience, specializing in front-end development. Adept at creating seamless, user-friendly web applications with a keen eye for detail and visually compelling designs.</p>
          </div>
          <div className='bentobox items-center group' >
            <div className='h-[325px] w-[325px]'>

            <Image src="/profile.webp" loading='lazy' unoptimized alt="photo" width="0" height="0" sizes="100vw" className=" h-[325px] w-[325px] filter grayscale group-hover:filter-none"></Image>
            </div>
            <p>Hi &#128075;,</p>
            <p> I am Prakash Meena</p>
            <p>grab my <a href="mailto:meenaprak12@gmail.com" target="_blank" aria-label="email" className='underline underline-offset-4'>email</a> to get in touch!!</p>
          </div>
          <div className='bentobox group '>
            <h1>experience</h1>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-32'>2024 - present</p>
                <div>
                   <p>Senior Web Developer</p>
                   <p className='text-[#787878] group-hover:text-primary'>OAN Industries Limited</p>
                   </div>
              </div>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-32'>2022 - 2024</p>
                <div>
                   <p>
                   Web Developer Developer</p>
                   <p className='text-[#787878] group-hover:text-primary'>MaxFizz</p>
                   </div>
              </div>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-32'>2020 - 2022</p>
                <div>
                   <p>
                   Frontend Developer</p>
                   <p className='text-[#787878] group-hover:text-primary'>D3 LOGICS</p>
                   </div>
              </div>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-32'>2018 - 2020</p>
                <div>
                   <p>Search Engine Evaluator</p>
                   <p className='text-[#787878] group-hover:text-primary'>APPEN</p>
                   </div>
              </div>
          </div>
          </div>
          <div className="grid gap-10">
          <div className='bentobox'>
            <h1>my background</h1>
            <p>My love for technology started early, even before I turned 13. I dedicated hours to exploring software, adjusting configurations, and honing my skills with Photoshop, HTML, and CSS. This passion led me to take Computer Science in 11th grade, where I discovered the vast and exciting world of programming.</p>
            <p>In college, this interest turned into a passion for creating new things. There&apos;s nothing quite like building something from scratch that not only impresses people but also solves real problems. This isn&apos;t just a job for me—it&apos;s what I want to do for the rest of my life.</p>
            <p>Today, as a Senior web developer who specializes in front-end development, I use my diverse skills to create web solutions that are both functional and engaging.</p>
            <p>My goal is to turn everyday digital experiences into something exceptional that people remember. I aim to deliver top-notch results that not only meet but exceed expectations, leaving a lasting impact.</p>
            </div>
          <div className='bentobox group '>
            <h1>education</h1>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-28'>2019 - 2020</p>
                <div>
                   <p>Simplilearn</p>
                   <p className='text-[#787878] group-hover:text-primary'>Full Stack Developer Bootcamp</p>
                   </div>
              </div>
              <div className='flex  gap-10'>
                <p className='text-[#787878] group-hover:text-primary min-w-28'>2014 - 2018</p>
                <div>
                   <p>JECRC UDML College of Engineering</p>
                   <p className='text-[#787878] group-hover:text-primary'>B.Tech</p>
                   </div>
              </div>
          </div>
          <div className='bentobox group'>
             <h1>tools</h1>
             <div className='flex flex-wrap gap-3'>
             {icons.map(({ name, icon }) => (
      <Image 
        key={name}
        src={icon}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[50px] w-[50px] filter grayscale group-hover:filter-none"
      />
    ))}

             </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About
