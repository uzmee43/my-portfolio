
import Image from "next/image";
import Link from "next/link";


function Project() {
  return (
    <div id="pro" className="bg-gradient-to-r from-red-200 to-cyan-200">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       The projects
              featured in my portfolio reflect a deep commitment to innovation
              and quality. Each project has been carefully crafted to address
              specific needs, using cutting-edge technology and creative
              approaches. From design to execution, I ensure that every detail
              is aligned with the highest standards, delivering solutions that
              are both practical and impactful. My projects are not just about
              achieving goals—they are about creating meaningful and lasting
              value in every endeavor.
      </p>
    </div>
    <div className="flex flex-wrap -m-8">
      {/* add project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("./../../../Public/project/Screenshot (107).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
              Jarvis project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Jarvis
            </h1>
            <p className="leading-relaxed">
            I’ve just created my own version of Jarvis! This is the
                      first stage of AI, and I’m beyond happy to see it coming
                      to life..
            </p>
            <Link href={"https://jarvis-eight-beryl.vercel.app/"}>
              <p className="leading-relaxed text-blue-300 hover:cursor-pointer hover:underline">
          view project...
            </p>
            </Link>
           
          
          </div>
        </div>
      </div>
       {/* add project */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("./../../../Public/project/Screenshot (104).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
              Website project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Website
            </h1>
            <p className="leading-relaxed">
            I've created a website using HTML, CSS, and
                          JavaScript! This has been a fantastic learning
                          experience, and I'm proud to see the results of my
                          hard work.
            </p>
            <Link href={"https://coding-tuch.vercel.app/"}>
              <p className="leading-relaxed text-blue-300 hover:cursor-pointer hover:underline">
          view project...
            </p>
            </Link>
           
          
          </div>
        </div>
      </div>
       {/* add project */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("./../../../Public/project/Screenshot (106).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
              Resume project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed">
            I’ve created Resume Builder using typeScript, Html,
                          and CSS! This has been a fantastic learning
                          experience, and I'm proud to see the results of my
                          hard work.
            </p>
            <Link href={"https://vercel.com/uzma-khans-projects-2704eacb/milestone-5-resume-builder"}>
              <p className="leading-relaxed text-blue-300 hover:cursor-pointer hover:underline">
          view project...
            </p>
            </Link>
           
          
          </div>
        </div>
      </div>
      
   
    </div>
  </div>
</section>

    </div>
  )
    
                 
}

export default Project;
