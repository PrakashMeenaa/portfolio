import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";

export const metadata: Metadata = {
  title:'Oan Industries'
}
const page = () => {
  return (
    <div className="text-primary bg-gradient-to-b from-second to-[#796a63] flex flex-col lg:flex-row h-max justify-around items-center  px-10 pt-16">
      <div className="screen my-[1.5rem] ">
        <Image src="/oanindustries/desktop.webp"alt="" width="0" height="0" sizes="100vw" loading="eager" className="w-full h-max xl:bottom-[-1880px]" />
      </div>
      <div className=" h-max  w-screen flex flex-col gap-3 items-center mt-[1.5rem] ">
        <div className="flex items-center  bg-[#9d9d9d] w-max xl:scale-[150%] rounded-full   bg-opacity-65 p-1 ">
          <div className="flex ">
            <Link href={"/foodorderingapp"} aria-label="back">
              <IoIosArrowBack className=" m-1 p-1 text-3xl rounded-full  bg-[#898989]" />
            </Link>
            <Link href={"/chaardiwaristudio"} aria-label="next">
              <IoIosArrowForward className="m-1 p-1 text-3xl rounded-full  bg-[#888888]" />
            </Link>
          </div>
          <a href="https://oanindustries.com/" target="_blank" className="bg-[#9d9d9d] w-52 text-center m-1 py-1 px-3 rounded-full " aria-label="website">
            oanindustries.com
          </a>
          <a href="https://oanindustries.com/" target="_blank" className="m-1 hidden sm:flex py-1 px-3 bg-[#9d9d9d] rounded-full " aria-label="website">
            VISIT
          </a>
          <div className="bg-[#9d9d9d] rounded-full m-1 p-2 ">
            <Link href={"/"} aria-label="backtohomepage">
              <RiCloseLargeLine className="" />
            </Link>
          </div>
        </div>
        <div className="bg-opacity-5 bg-primary shadow-lg scale-[90%] p-7 flex flex-col rounded-2xl gap-3">
          <div className="max-w-4xl mx-auto p-4 text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center uppercase text-[#fffae6]">OAN Industries</h1>
            <hr className="border-gray-400 my-4" />

            <div className="overflow-y-auto max-h-[550px]">
              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Overview</h2>
                <p className="text-gray-300">
                  As the developer responsible for the OAN Industries website, I have meticulously designed a visually captivating digital platform that seamlessly integrates advanced animations and modern design principles. This project showcases OAN Industries&apos; commitment to delivering a dynamic
                  online experience that resonates with its audience.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Important Pages</h2>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Home Page</h3>
                  <p className="text-gray-300">The home page prominently features OAN Industries&apos; key projects, client testimonials, and the brand&apos;s design philosophy.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Developed using Next.js for optimized performance and React for dynamic user interfaces. Enhanced with GSAP for smooth animations.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Product Catalog</h3>
                  <p className="text-gray-300">The product catalog showcases a wide range of offerings with detailed descriptions and interactive elements to engage visitors.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Utilized React for frontend interactivity and GSAP for animations.
                  </p>
                  <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src="/oanindustries/product.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Careers Page</h3>
                  <p className="text-gray-300">
                    The careers page at OAN Industries is designed to attract top talent by showcasing available job opportunities, company culture, and employee benefits. It features a user-friendly interface that allows potential candidates to easily browse open positions and apply directly
                    through the website.
                  </p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Implemented using Nodemailer for seamless email application submissions. Additionally, Formidable is used for handling file uploads, and Framer Motion is integrated to add smooth transitions and animations.
                  </p>
                  <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src="/oanindustries/career.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Contact Page</h3>
                  <p className="text-gray-300">The contact page includes a user-friendly form with validation and seamless integration with email services for direct inquiries.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Used Formidable for form handling and Yup for validation.
                  </p>
                  <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src="/oanindustries/contact.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript
                  </li>
                  <li>
                    <strong>Styling:</strong> Tailwind CSS
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js
                  </li>
                  <li>
                    <strong>Hosting:</strong> Hostinger VPS
                  </li>
                  <li>
                    <strong>Other Tools:</strong> Next.js, Framer Motion, Google APIs, GSAP, Next Sitemap, Nodemailer, React Icons, Sharp, Swiper
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Key Features</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Advanced Animations:</strong> Leveraged GSAP for sophisticated animations, enhancing user engagement and visual appeal.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Ensured seamless viewing experience across all devices using Tailwind CSS and responsive design principles.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Challenges and Solutions</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Server Performance:</strong> Effectively managed server load during peak traffic using Hostinger VPS, ensuring stability and optimal performance.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Implemented Next.js capabilities and GSAP animations to optimize website performance and enhance user experience.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Development Specs</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Frontend Framework:</strong> Next.js, React
                  </li>
                  <li>
                    <strong>Styling:</strong> Tailwind CSS
                  </li>
                  <li>
                    <strong>Backend Framework:</strong> Node.js
                  </li>
                  <li>
                    <strong>Hosting:</strong> Hostinger VPS
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
