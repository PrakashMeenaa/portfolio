import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import dynamic from "next/dynamic";
import Socialcircle from "@/Components/Socialcircle";
const Title = dynamic(() => import('@/Components/Title'), { ssr: false });

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
   default:"Prakash Meena",
   template:"Prakash Meena - %s" 
  }, 
  description: "I am an exceptionally adept Frontend Developer with a comprehensive background in crafting cutting-edge web applications. My proficiency spans various programming languages and technologies, including Java, JavaScript, and TypeScript, alongside HTML, CSS, React, Tailwind CSS, Next.js, Bootstrap, Node.js, and Express.Throughout my career, I have upheld the values of collaboration and professionalism, leveraging industry-standard tools such as GitHub for seamless version control and teamwork. My capacity to contribute effectively to projects of all scales, combined with a consistent track record of surpassing expectations, underscores my commitment to excellence.Fueled by an unwavering passion for innovation and continuous self-improvement, I remain at the forefront of emerging technologies and industry best practices. My dedication to delivering superior results while ensuring client satisfaction renders me an invaluable asset to any development endeavor.",
  icons:{ icon: ["/PMLOGO.svg"]},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
      <Header/>
       <Socialcircle/>
      {children}
      <Title />
      </body>
    </html>
  );
}
