import Link from "next/link";
import Image from "next/image";
import portfolio from "../../../Public/project/Logo1-removebg-preview.png";
import { LuDownloadCloud } from "react-icons/lu";

export default function Nav() {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-blue-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-blue-400 mb-4 md:mb-0">
            <Image
              src={portfolio}
              alt="img"
              height={100}
              width={100}
              className="h-[100px] border-2px-black"
            />
            <span className="ml-3 text-xl text-blue-400">My Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-red-300 hover:underline">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-300 hover:underline">
              About us
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-red-300 hover:underline">
              Skills
            </Link>
            <Link href={"#pro"} className="mr-5 hover:text-red-300 hover:underline">
              Project
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-red-300 hover:underline">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
            <a href="./project/myCV.pdf">
              <LuDownloadCloud className="text-xl ml-5" />
              Download CV
            </a>
          </button>
        </div>
      </header>
    </div>
  );
}
