"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div id="about" className="bg-gradient-to-r from-red-200 to-cyan-200">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={require("../../../Public/project/pic2.jpg")}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I,M Uzma khan..
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["AI Engineer", "Web Developer", " UI/UX designer "],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              I,m driven professional specializing in cloud-applied generative
              AI engineering, fueled by a profound passion for programming. I am
              broadening my horizons through immersion in the Governor Sindh IT
              Initiative, delving into TypeScript and various aspects of
              full-stack development. My journey in the realm of technology has
              endowed me with a rich skill set encompassing HTML, CSS,
              JavaScript, and NextJs. Thriving in dynamic environments, I relish
              the opportunity to apply my problem-solving acumen and creative
              flair towards crafting innovative solutions. As a dedicated
              student at the Governor Sindh IT Initiative, I am committed to
              continuous growth and excellence in the ever-evolving landscape of
              technology.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-200 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
