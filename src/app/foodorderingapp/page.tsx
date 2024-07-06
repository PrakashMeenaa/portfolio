import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="text-primary bg-gradient-to-b from-second to-[#c20e0c] flex flex-col lg:flex-row h-max justify-around items-center mt-10 p-10">
      <div className="screen " style={{ marginTop: -150 }}>
        <Image src="/foodorderingapp/desktop.webp" alt="" className="lg:bottom-[-720px]" />
      </div>
      <div className=" h-max  w-screen flex flex-col gap-3 items-center my-[1.5rem] ">
        <div className="flex items-center  bg-[#9d9d9d] w-max xl:scale-[150%] rounded-full   bg-opacity-65 p-1 ">
          <div className="flex ">
            <Link href={"/chaardiwaristudio"} aria-label="back">
              <IoIosArrowBack className=" m-1 p-1 text-3xl rounded-full  bg-[#898989]" />
            </Link>
            <Link href={"/oanindustries"} aria-label="next">
              <IoIosArrowForward className="m-1 p-1 text-3xl rounded-full  bg-[#888888]" />
            </Link>
          </div>
          <a aria-label="website" href="https://food-ordering-web-app-one.vercel.app/" target="_blank" className="bg-[#9d9d9d] w-52 text-center m-1 py-1 px-3 rounded-full ">
            foodorderingapp.com
          </a>
          <a aria-label="website" href="https://food-ordering-web-app-one.vercel.app/" target="_blank" className="m-1 hidden sm:flex py-1 px-3 bg-[#9d9d9d] rounded-full ">
            VISIT
          </a>
          <div className="bg-[#9d9d9d] rounded-full m-1 p-2 ">
            <Link href={"/"} aria-label="backtohomepage">
              <RiCloseLargeLine className="" />
            </Link>
          </div>
        </div>
        <div className="bg-opacity-5 bg-primary shadow-lg scale-[90%] p-7 flex flex-col rounded-2xl gap-3">
        <div className="max-w-4xl mx-auto px-4 py-8 text-white">
    <h1 className="text-5xl font-bold mb-4 text-center uppercase text-[#fffae6]">Food Ordering App</h1>
    <hr className="border-gray-400 my-4"/>

    <div className="overflow-y-auto max-h-[550px]">
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#d3bda5]">Project Overview</h2>
            <p className="text-gray-300">
                Developed as a sophisticated food ordering solution, the Food Ordering Web App offers users a seamless platform to explore, search, and order a variety of food items. This project emphasizes intuitive user interfaces, robust data management, and secure authentication methods to ensure a superior user experience.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#d3bda5]">Key Pages</h2>
            
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#e8d3b8]">Home Page</h3>
                <p className="text-gray-300">The Home Page showcases featured food items, user authentication options, and efficient search and filtering capabilities.</p>
                <p className="text-gray-300"><strong>Technologies:</strong> Developed using React and Next.js, styled with Tailwind CSS for responsive design.</p>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#e8d3b8]">Menu Page</h3>
                <p className="text-gray-300">The Menu Page categorizes food items, allowing users to search, filter, and add items to their cart.</p>
                <p className="text-gray-300"><strong>Technologies:</strong> Utilized MongoDB and Mongoose for efficient data storage and management.</p>
                <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src='/foodorderingapp/menu.webp' alt="Menu Page" className="h-max w-full object-cover rounded-xl"/>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#e8d3b8]">Cart Page</h3>
                <p className="text-gray-300">The Cart Page enables users to view, update, and remove items from their cart before proceeding to checkout.</p>
                <p className="text-gray-300"><strong>Technologies:</strong> Implemented cart functionality using React state management for seamless user interaction.</p>
                <div className="overflow-scroll h-[480px] rounded-xl my-6">
                    <Image src='/foodorderingapp/cart.webp' alt="Cart Page" className="h-max w-full object-cover rounded-xl"/>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#e8d3b8]">Profile Page</h3>
                <p className="text-gray-300">The Profile Page allows users to register, log in, and manage their profiles, including updating profile information and changing profile photos.</p>
                <p className="text-gray-300"><strong>Technologies:</strong> Integrated NextAuth.js for secure user authentication with Google accounts and email/password registration.</p>
                <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src='/foodorderingapp/profile.webp' alt="Profile Page" className="h-max w-full object-cover rounded-xl"/>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#e8d3b8]">Register Page</h3>
                <p className="text-gray-300">The Register Page allows new users to register using their email and password or Google account, securely storing their data in MongoDB for future login and order management.</p>
                <p className="text-gray-300"><strong>Technologies:</strong> Implemented user registration functionality with NextAuth.js, ensuring a seamless registration and authentication process.</p>
                <div className="overflow-scroll h-[450px] rounded-xl my-6">
                    <Image src='/foodorderingapp/register.webp' alt="Register Page" className="h-max w-full object-cover rounded-xl"/>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#d3bda5]">Technologies Utilized</h2>
            <ul className="list-disc list-inside text-gray-300">
                <li><strong>Frontend:</strong> Developed with React, Next.js, and styled using Tailwind CSS for responsive and modern UI.</li>
                <li><strong>Backend:</strong> Built using Node.js, Express.js, MongoDB, and Mongoose for robust data management and server-side logic.</li>
                <li><strong>Authentication:</strong> Integrated NextAuth.js for secure authentication, supporting Google OAuth and email/password registration.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#d3bda5]">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300">
                <li><strong>User Authentication:</strong> Enables registration and login with Google accounts or email/password, ensuring secure access to user profiles and cart management.</li>
                <li><strong>Cart Management:</strong> Allows users to add, update, and remove items from the cart, with data persistence using MongoDB for seamless user experience.</li>
                <li><strong>Profile Customization:</strong> Users can edit their profiles, including changing profile photos and updating personal information directly through the application.</li>
                <li><strong>Order and Checkout:</strong> Facilitates a streamlined ordering and checkout process, including shipping options and order tracking functionalities.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#d3bda5]">Development Details</h2>
            <ul className="list-disc list-inside text-gray-300">
                <li><strong>Frontend:</strong> Utilized React and Next.js for dynamic frontend development, ensuring responsive design and efficient user interaction.</li>
                <li><strong>Backend:</strong> Implemented with Node.js and Express.js, utilizing MongoDB and Mongoose for scalable data management and API development.</li>
                <li><strong>User Authentication:</strong> Integrated NextAuth.js for robust user authentication and authorization, supporting multiple login methods and ensuring data security.</li>
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
