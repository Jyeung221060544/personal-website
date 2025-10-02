import logo from "../assets/sbu.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.stonybrook.edu/" target="_blank">
          <img className="w-20" src={logo} alt="" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jason-yeung-73a1b8336/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Jyeung221060544"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
