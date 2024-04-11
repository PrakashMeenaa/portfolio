import React from "react";

function Projects() {
  return (
    <div className='text-primary relative w-screen h-screen grid grid-cols-2 lg:grid-cols-3 overflow-scroll gap-5  bg-[url("/bg.jpeg")] bg-cover justify-around items-center p-10'>
      <p className="text-[25vw] left-[50%] top-[50%] -translate-x-[50%] pointer-events-none -translate-y-[50%] absolute uppercase">Work</p>
      <div className="cardwrapper">
        <div className="project3 w-[300px] h-[630px] z-20  overflow-scroll bg-second  border-4">
          <img src="/project3/mobile.png" alt="" className="w-full opacity-90" />
        </div>
      </div>
      <div className="cardwrapper">
      <div className="project3 w-[300px] h-[630px] z-20  overflow-scroll bg-second  border-4">
        <img src="/project2/mobile.png" alt="" className="w-full opacity-80" />
      </div>
      </div>
      <div className="cardwrapper">
      <div className="project3 w-[300px] h-[630px] z-20  overflow-scroll bg-second  border-4">
        <img src="/project1/mobile.png" alt="" className="w-full opacity-80" />
      </div>
      </div>
    </div>
  );
}

export default Projects;
