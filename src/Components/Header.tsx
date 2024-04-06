"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`flex ${!scrolled ? "justify-between absolute " : "justify-center fixed"} top-0 w-screen items-center px-3 uppercase text-primary py-2`}>
      {!scrolled && (
        <div className="flex items-center cursor-pointer ">
          <img src="/PMLOGO.png" alt="" className="h-[52px] w-[52px] object-cover object-center " />
          <p className=" font-medium"> Prakash Meena</p>
        </div>
      )}
      <div className="hidden lg:flex rounded-full border-[1px] border-primary p-1 items-center backdrop-blur-sm bg-[white/30]">
        <ul className="flex  justify-between  ">
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">About</li>
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">experience</li>
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">skills</li>
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">projects</li>
          <li className={`${!scrolled ? "hidden" : "block"} border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4 `}>Contact</li>
        </ul>
      </div>
      {!scrolled && (
        <div>
          <button className="buttons group">
            Contact{" "}
            <span className="hidden group-hover:flex">
              <FaArrowRight />
            </span>
            <span className="group-hover:hidden">
              <FaChevronRight />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
