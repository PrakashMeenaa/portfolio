"use client";
import React, { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import gsap from "gsap";

const Socials = () => {
  useEffect(() => {
    let active = false;
    const ball = document.getElementById("ball");
   const parallaxCursor = (e: MouseEvent, parent: HTMLDivElement, movement: number) => {
      const rect = parent.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const posX = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      const posY = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
      gsap.to(ball, { duration: 0.3, x: posX, y: posY });
    };

    const callParallax = (e: MouseEvent, parent: HTMLDivElement) => {
      parallaxIt(e, parent, parent.querySelector(".button-icon") as HTMLDivElement, 20); 
    };

    const parallaxIt = (e: MouseEvent, parent: HTMLDivElement, target: HTMLDivElement, movement: number) => {
      const boundingRect = parent.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left;
      const relY = e.clientY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
        ease: "power2.out",
      });
    };

    const addEventListeners = () => {
      const iconWraps = document.querySelectorAll(".icon-wrap");
      iconWraps.forEach((iconWrap) => {
        iconWrap.addEventListener("mouseenter", () => {
          gsap.to(iconWrap, {  scale: 2 }); 
          gsap.to(ball, { duration: 0.1, scale: 3 }); 
          active = true;
        });

        iconWrap.addEventListener("mouseleave", () => {
          gsap.to(iconWrap, { scale: 1 });
          gsap.to(ball, { duration: 0.1, scale: 1 });
          gsap.to(iconWrap.querySelector(".button-icon"), { duration: 0.3, x: 0, y: 0 });
          active = false;
        });

        iconWrap.addEventListener("mousemove", (e) => {
            parallaxCursor(e as MouseEvent, iconWrap as HTMLDivElement, 5);
            callParallax(e as MouseEvent, iconWrap as HTMLDivElement);
          });
      });
    };

    addEventListeners();
    return () => {
      const iconWraps = document.querySelectorAll(".icon-wrap");
      iconWraps.forEach((iconWrap) => {
        iconWrap.removeEventListener("mouseenter", () => {});
        iconWrap.removeEventListener("mouseleave", () => {});
        iconWrap.removeEventListener("mousemove", () => {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col text-primary fixed bottom-7 z-50 left-7 items-center">
      <div className="flex justify-center items-center">
        <div className="icon-wrap">
          <div className="button-icon">
          <a href="/Resume/Prakash Meena Resume Frontend Developer.pdf" download="Prakash Meena Resume Frontend Developer.pdf" aria-label="CV download">
              <button className="buttons2" aria-label="CV">CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="icon-wrap">
          <div className="button-icon">
            <a href='mailto:meenaprak12@gmail.com' aria-label="Emailnp">
              <button className="buttons2 " aria-label="email">
                <MdOutlineEmail className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="icon-wrap">
          <div className="button-icon">
            <a href={"https://www.linkedin.com/in/praakashhh"} target="_blank" aria-label="linkedin">
              <button className="buttons2" aria-label="linkedin">
                <FaLinkedin className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="icon-wrap">
          <div className="button-icon">
            <a href={"https://github.com/PrakashMeenaa"} target="_blank" aria-label="Github">
              <button className="buttons2"  aria-label="Github">
                <IoLogoGithub className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
