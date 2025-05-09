import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <p></p>,
});

const projects = [
  { name: "Oan Industries", img: "3" },
  { name: "CHAAR DIWARI STUDIO", img: "1" },
  { name: "Food Ordering App", img: "2" },
];

function Projects() {
  const rotateImage = (gsap: typeof globalThis.gsap) => {
    let rotate = 0;
    let diffrot = 0;
    document.querySelectorAll(".headingelem").forEach(function (elem) {
      const element = elem as HTMLElement;

      element.addEventListener("mousemove", function (dets: MouseEvent) {
        if (window.innerWidth < 1440) return;
        
        const diff = dets.clientY - element.getBoundingClientRect().top;
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

      element.addEventListener("mouseleave", function () {
        if (window.innerWidth < 1440) return;

        gsap.to(element.querySelector("img"), {
          autoAlpha: 0,
          ease: "power3",
        });
      });
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      const loadGsap = async () => {
        const gsap = (await import('gsap')).default;
        rotateImage(gsap);
      };
      loadGsap();
    }
  }, []);

  return (
    <div id="projects" className="relative w-screen my-24 md:min-h-screen max-h-max">
      <div className="-z-[1]">
        <Spline scene="https://prod.spline.design/hvPByE-mtY4Ijy1R/scene.splinecode" />
      </div>
      <div className="text-primary absolute top-0 lg:grid-cols-3 gap-5 mx-3 sm:mx-16 md:mx-32 justify-around items-center">
        <div className="text-[8vw] md:text-[5vw] uppercase font-semibold">Projects</div>
        <div className="py-10 tracking-widest flex flex-col gap-10">
          <div className="headings2">
            {projects.map((p, index) => (
              <div key={index}>
                <hr />
                <div className="headingelem">
                  <Link href={`/${p.name.toLowerCase().replace(/\s+/g, "")}`}>
                    <h1>{p.name}</h1>
                    <Image
                      src={`/${p.name.toLowerCase().replace(/\s+/g, "")}/desktop.webp`}
                      alt={p.name}
                      width="0"
                      height="0"
                      loading='lazy'
                      sizes="100vw"
                      className="images"
                    />
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
