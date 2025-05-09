"use client";
import Spline from '@splinetool/react-spline';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from "react";

// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false,
//   loading: () =><div>
//     <Image src={'/FallbackImage.webp'} loading='lazy' unoptimized alt="photo" width="0" height="0" sizes="100vw" className='h-screen w-screen object-cover'/>
//   </div>,
// });

const About = dynamic(() => import("@/Components/About"));
const Contact = dynamic(() => import("@/Components/Contact"));
const Projects = dynamic(() => import("@/Components/Projects"));

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
      <div className="snap-start relative text-primary w-screen h-screen">
        <div className=" -z-10 h-full w-full absolute">
          <Spline scene="https://prod.spline.design/jz0hYr7XhPzsaQF7/scene.splinecode" />
        </div>
        <div className="ml-10 md:ml-48 mt-56 tracking-wide uppercase text-xl md:text-4xl w-max font-extrabold flex flex-col gap-3 absolute">
          <p>hey! I am </p>
          <p className="text-2xl md:text-7xl font-extrabold p-0 m-0"> a Web</p>
          <p className="text-2xl md:text-7xl font-extrabold">developer</p>
          <p> crafting beautiful</p>
          <p>digital experiences.</p>
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
