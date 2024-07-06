
"use client"
import About from "@/Components/About";
import { Contact } from "@/Components/Contact";
import Projects from "@/Components/Projects";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative">
      <motion.div className="snap-start relative text-primary w-screen h-screen">
        <div className=" -z-10 h-full w-full absolute ">
          <Spline scene="https://prod.spline.design/jz0hYr7XhPzsaQF7/scene.splinecode" />
        </div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragTransition={{ bounceDamping: 10 }}
          className="ml-10 md:ml-48 mt-56 tracking-wide uppercase text-xl md:text-4xl w-max font-extrabold flex flex-col gap-3 absolute"
        >
          <p>hey! I am </p>
          <p className="text-2xl md:text-7xl font-extrabold p-0 m-0"> a Front-end</p>
          <p className="text-2xl md:text-7xl font-extrabold">developer</p>
          <p> crafting beautiful</p>
          <p>digital experiences.</p>
        </motion.div>
      </motion.div>
      <Projects />
      <About />
      <Contact/>
    </div>
  );
}
