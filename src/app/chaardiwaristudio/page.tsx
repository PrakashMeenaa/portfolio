import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";

export const metadata: Metadata = {
  title:'Chaar Diwari Studio'
}

const page = () => {
  return (
    <div className="text-primary bg-gradient-to-b from-second to-[#796a63] flex flex-col lg:flex-row h-max justify-around items-center  px-10 pt-16">
      <div className="screen my-[1.5rem] ">
        <Image src="/chaardiwaristudio/desktop.webp" alt="" width="0" height="0" sizes="100vw" loading="eager" className="w-full h-max xl:bottom-[-1300px]" />
      </div>
      <div className=" h-max  w-screen flex flex-col gap-3 items-center mt-[1.5rem] ">
        <div className="flex items-center  bg-[#9d9d9d] w-max xl:scale-150 rounded-full   bg-opacity-65 p-1 ">
          <div className="flex ">
            <Link href={"/oanindustries"} aria-label="back">
              <IoIosArrowBack className=" m-1 p-1 text-3xl rounded-full  bg-[#898989]" />
            </Link>
            <Link href={"/foodorderingapp"} aria-label="next">
              <IoIosArrowForward className="m-1 p-1 text-3xl rounded-full  bg-[#888888]" />
            </Link>
          </div>
          <a aria-label="website" href="https://interior-designer-5kyq.vercel.app/" target="_blank" className="bg-[#9d9d9d] m-1 py-1 px-3 w-52 text-center rounded-full ">
            chaardiwaristudio
          </a>
          <a aria-label="website" href="https://interior-designer-5kyq.vercel.app/" target="_blank" className="m-1 hidden sm:flex py-1 px-3 bg-[#9d9d9d] rounded-full ">
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
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center uppercase text-[#fffae6]">Chaar Diwari Studio</h1>
            <hr className="border-gray-400 my-4" />

            <div className="overflow-y-auto max-h-[550px]">
              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Overview</h2>
                <p className="text-gray-300">
                  As the developer of the Chaar Diwari Studio website, I crafted a visually stunning and highly functional digital platform that perfectly encapsulates the studio&apos;s blend of traditional and contemporary design principles. This project highlights the studio&apos;s architectural innovation
                  and commitment to sustainability.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Important Pages</h2>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Home Page</h3>
                  <p className="text-gray-300">Displays key projects, client testimonials, and the studio&apos;s design ethos.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Implemented dynamic content loading with React and responsive design using Tailwind CSS.
                  </p>
                </div>

                <div className="">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Portfolio Page</h3>
                  <p className="text-gray-300">Features an interactive gallery of projects with detailed descriptions and high-resolution images.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Used Masonry layout for the gallery and React Lightbox for image viewing.
                  </p>
                  <div className="overflow-scroll max-h-[450px] h-max rounded-xl my-6">
                    <Image src="/chaardiwaristudio/projects.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Services Page</h3>
                  <p className="text-gray-300">Provides in-depth descriptions of architectural, interior design, and urban planning services.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Enhanced with CSS animations to highlight service categories on hover.
                  </p>
                  <div className="overflow-scroll max-h-[450px] h-max rounded-xl my-6">
                    <Image src="/chaardiwaristudio/services.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e8d3b8]">Contact Page</h3>
                  <p className="text-gray-300">Features a user-friendly contact form with validation and integration with an email service for direct inquiries.</p>
                  <p className="text-gray-300">
                    <strong>Technologies:</strong> Employed Formik for form handling and Yup for validation.
                  </p>
                  <div className="overflow-scroll max-h-[450px] h-max rounded-xl my-6">
                    <Image src="/chaardiwaristudio/contact.webp" alt={""} width="0" height="0" sizes="100vw" className="h-max w-full object-cover rounded-xl" />
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
                    <strong>Backend:</strong> Node.js, Express.js
                  </li>
                  <li>
                    <strong>Database:</strong> MongoDB
                  </li>
                  <li>
                    <strong>Hosting:</strong> Porkbun
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Key Features</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Interactive Portfolio:</strong> Utilized smooth animations and interactive elements to engage visitors, showcasing the studio&apos;s extensive portfolio in a visually appealing manner.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Ensured optimal viewing across all devices using Tailwind CSS and meticulous media query adjustments.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Challenges and Solutions</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Server Performance:</strong> Managing high traffic and data load was particularly challenging, especially after major marketing campaigns. To address this, AWS CloudFront and S3 were utilized for optimal performance and rapid load times.
                  </li>
                  <li>
                    <strong>Scalability:</strong> The backend, built with Node.js and Express.js, was containerized using Docker, allowing for efficient handling of increased loads.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Ensuring the site performed well across various devices required detailed testing and adjustments using Tailwind CSS.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d3bda5]">Development Specs</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Frontend:</strong> Built with React.js and styled using Tailwind CSS.
                  </li>
                  <li>
                    <strong>Backend:</strong> Powered by Node.js and Express.js, and containerized with Docker.
                  </li>
                  <li>
                    <strong>Database:</strong> MongoDB provided robust data management.
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
