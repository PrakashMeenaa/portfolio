'use client'
import About from "@/Components/About";
import Background from "@/Components/Background";
import Projects from "@/Components/Projects";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Home() {
  return (<>
    <div className="text-primary w-screen h-screen">
    <div className=" -z-10 h-full w-full absolute ">
      <Spline scene="https://prod.spline.design/jz0hYr7XhPzsaQF7/scene.splinecode" />
      </div>
        <div className="ml-10 md:ml-48 mt-56  uppercase text-xl md:text-4xl w-max flex flex-col gap-3 absolute">
          <p className="">hey! I am </p>
          <p className="text-2xl md:text-7xl font-medium p-0  m-0 "> a Front-end</p>
          <p className="text-2xl md:text-7xl font-medium  ">developer</p>
          <p className=""> crafting beautiful</p>
          <p className="">digital experiences.</p>
          <div className="flex gap-10 items-center">
            <button className="buttons">
              Download CV <MdOutlineFileDownload className="text-2xl" />
            </button>
            <Link href={"/"}>
              <FaLinkedin />
            </Link>
            <Link href={"/"}>
              <IoLogoGithub />
            </Link>
          </div>
        
      </div>
      
    </div>
    <Projects/>
      <About />
    </>
  );
}
