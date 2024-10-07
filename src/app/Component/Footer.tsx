import Image from "next/image";
import portfolio from "../../../Public/project/Logo1-removebg-preview.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-blue-50">
      <footer className="text-blue-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-900">
            <Image
              src={portfolio}
              alt="img"
              height={100}
              width={100}
              className="h-[100px] border-2px-black"
            />

            <span className="ml-3 text-xl text-blue-400">My Portfolio</span>
          </a>
          <p className="text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 My Portfolio —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/uzmee43"}
              className="text-blue-500 "
            >
              <FaGithub className="text-3xl hover:text-red-400" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/uzma-khan6643/"}
              className="ml-3 text-blue-500"
            >
              <FaLinkedin className="text-3xl hover:text-red-400" />
            </Link>
          </span>
       
        </div>
      </footer>
    </div>
  );
}
export default Footer;
