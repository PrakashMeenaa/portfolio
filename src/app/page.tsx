"use client"
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Socials from "@/Components/Socials";
import Circle from "@/Components/Circle";

export default function Home() {
  
  return (
    <div className="relative">
      <Circle/>
      <Socials/>
      <motion.div className="snap-start relative text-primary w-screen h-screen"  >
        <div className=" -z-10 h-full w-full absolute ">
          <Spline scene="https://draft.spline.design/6OtMhuIveVYXbwmd/scene.splinecode" />
        </div>
        <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} drag dragConstraints={{left:-100, right:100,top:-100,bottom:100}}  dragTransition={{bounceDamping:10}} className="ml-10 md:ml-48 mt-56  uppercase text-xl md:text-4xl w-max flex flex-col gap-3 absolute ">
          <p className="">hey! I am </p>
          <p className="text-2xl md:text-7xl font-medium p-0  m-0 "> a Front-end</p>
          <p className="text-2xl md:text-7xl font-medium  ">developer</p>
          <p className=""> crafting beautiful</p>
          <p className="">digital experiences.</p>
        </motion.div>

      </motion.div>
      <Projects />
      <About />
    </div>
  );
}
