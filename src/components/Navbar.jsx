import logo from "../assets/sbu.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "tech", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur bg-slate-950/60 border-b border-white/5
      "
      aria-label="Primary"
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer">
            <img className="w-16" src={logo} alt="Stony Brook University" />
          </a>
        </div>

        {/* Center nav links */}
        <ul className="hidden md:flex items-center gap-8 text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-5 text-2xl">
          <a
            href="https://www.linkedin.com/in/jason-yeung-73a1b8336/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Jyeung221060544"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
