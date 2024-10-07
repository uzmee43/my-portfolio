"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-red-200">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome To... <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "My Portfolio WEB",
                    " creative digital content",
                    "blending functionality with design",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[3px] bg-blue-500"></div>
            <p className="mb-8 leading-relaxed">
              Hello! I’m Uzma khan, and I Passionate Student of Certified Cloud
              Applied GenEng (AI Engineering) mobile development, UI/UX design
              at the Governor Sindh IT Initiative. This portfolio showcases some
              of my best work, highlighting my skills in Html |CSS | NextJs and
              Typescript. My work reflects my dedication to delivering quality
              solutions and my commitment to continuous learning and innovation.
              Feel free to explore my portfolio, and don’t hesitate to reach out
              if you’d like to collaborate or learn more about my work. Thank
              you for visiting!
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link href={"https://github.com/uzmee43"}>
                <button className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-300 rounded text-lg">
                  Github
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[25rem] shadow-red-900"
              alt="hero"
              src={require("../../../Public/project/cloud Logo.png")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
