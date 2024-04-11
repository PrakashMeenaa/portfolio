"use client";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <motion.div className="snap-start text-primary w-screen h-screen"  >
        <div className=" -z-10 h-full w-full absolute ">
          <Spline scene="https://prod.spline.design/jz0hYr7XhPzsaQF7/scene.splinecode" />
        </div>
        <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} drag dragConstraints={{left:-100, right:100,top:-100,bottom:100}}  dragTransition={{bounceDamping:10}} className="ml-10 md:ml-48 mt-56  uppercase text-xl md:text-4xl w-max flex flex-col gap-3 absolute ">
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
        </motion.div>
      </motion.div>
      <Projects />
      <About />
    </>
  );
}
