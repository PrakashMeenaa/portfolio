import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const projects = [
  { name: "Oan Industries", img: "3" },
  { name: "CHAAR DIWARI STUDIO", img: "1" },
  { name: "Food Ordering App", img: "2" },
];

function Projects() {
  const rotateImage = () => {
    var rotate = 0;
    var diffrot = 0;
    document.querySelectorAll(".headingelem").forEach(function (elem) {
      const element = elem as HTMLElement;

      element.addEventListener("mousemove", function (dets: MouseEvent) {
        var diff = dets.clientY - element.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(element.querySelector("img"), {
          autoAlpha: 1,
          top: diff,
          left: dets.clientX - element.getBoundingClientRect().left,
          rotate: gsap.utils.clamp(-15, 15, diffrot),
          ease: "power3",
        });
      });

      element.addEventListener("mouseleave", function (dets) {
        gsap.to(element.querySelector("img"), {
          autoAlpha: 0,
          ease: "power3",
        });
      });
    });
  };

  useEffect(() => {
    rotateImage();
  }, []);
  const project = [1, 2, 3];
  return (
    <div id="projects" className="relative w-screen my-24 md:min-h-screen max-h-max">
      <div className=" -z-[1]    ">
        <Spline scene="https://prod.spline.design/hvPByE-mtY4Ijy1R/scene.splinecode" />
      </div>
      <div className="text-primary absolute top-0 lg:grid-cols-3 gap-5   mx-3 sm:mx-16 md:mx-32 justify-around items-center">
        <div className="text-[8vw] md:text-[5vw] uppercase font-semibold ">Projects</div>
        <div className=" py-10 tracking-widest flex flex-col gap-10">
          <div className="headings2 ">
            {projects.map((p, index) => {
              return (
                <div key={index}>
                  <hr />
                  <div className="headingelem">
                    <Link href={`/${p.name.toLowerCase().replace(/\s+/g, "")}`}>
                      <h1>{p.name}</h1>
                      <Image src={`/project${p.img}/desktop.png`} alt={p.name} width="0" height="0" sizes="100vw" className="images"></Image>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
