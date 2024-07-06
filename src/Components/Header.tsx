"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div className={`flex ${!scrolled ? "justify-between absolute " : "justify-center fixed"} top-0 w-screen items-center px-3 uppercase text-primary py-2 z-[10]`}>
      {!scrolled && (
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer ">
            <Image src="/PMLOGO.webp" alt="" height="52" width="52" className="object-cover object-center " loading="lazy" style={{ height: "52px" }} />
            <p className=" font-medium"> Prakash Meena</p>
          </div>
        </Link>
      )}
      <div className="hidden lg:flex rounded-full border-[1px] border-primary p-1 items-center backdrop-blur-sm bg-[white/30]">
        <ul className="flex  justify-between  ">
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4">
            <Link href="/#about">About</Link>
          </li>
          <li className={`${!scrolled ? "hidden" : "block"} border-opacity-0 hover:border-opacity-100 border-[1px] border-primary rounded-full  cursor-pointer py-2 px-4 `}><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
      {!scrolled && (
        <Link href="/#contact">
          <button className="buttons group" aria-label="contact">
            Contact{" "}
            <span className="hidden group-hover:flex">
              <FaArrowRight />
            </span>
            <span className="group-hover:hidden">
              <FaChevronRight />
            </span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
