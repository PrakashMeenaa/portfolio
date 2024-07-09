import React, { useEffect } from "react";
import {useMotionTemplate, useMotionValue, motion,animate,} from "framer-motion";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const COLORS_TOP = ["#00ffd9", "#3f3072", "#CE84CF", "#DD335C"];

function Contact  () {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(155% 150% at 50% 0%, #0000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section id="contact"
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden text-primary  px-4 py-24 "
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-lg">
          Get in Touch!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br my-2 from-white to-gray-400 bg-clip-text text-center text-lg font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight">
          <a href="mailto:meenaprak12@gmail.com" target="_blank" aria-label="email">Email : meenaprak12@gmail.com</a>
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-lg font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight">
          <a href="https://wa.me/+917999999726" target="_blank" aria-label="phonenumber">Phone no. : +91 7999999726</a>
        </h1>

        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Connect On Socials
        </p>
        <div className="flex">
          <a href={"https://github.com/PrakashMeenaa"} target="_blank" className="p-6" aria-label="Github">
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className=" flex  items-center gap-1.5 rounded-full w-16 h-16 justify-center bg-gray-950/10 text-gray-50 transition-colors hover:bg-gray-950/50"
          aria-label="Github"
        >
                <IoLogoGithub className="text-2xl" />
        </motion.button>
            </a>
        <a href={"https://www.linkedin.com/in/praakashhh"} target="_blank" className="p-6"  aria-label="linkedin">
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className=" flex w-16 h-16 justify-center items-center gap-1.5 rounded-full bg-gray-950/10  text-gray-50 transition-colors hover:bg-gray-950/50"
          aria-label="linkedin"
        >
                
              <FaLinkedin className="text-2xl" />
        </motion.button>
            </a>
        <a href={"https://www.instagram.com/praakashhh"} target="_blank" className="p-6" aria-label="Instagram">
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className=" flex w-16 h-16 justify-center items-center gap-1.5 rounded-full bg-gray-950/10  text-gray-50 transition-colors hover:bg-gray-950/50"
          aria-label="Instagram">
          <IoLogoInstagram className="text-2xl" />
        </motion.button>
            </a>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;