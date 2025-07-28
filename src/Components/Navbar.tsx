import { useState } from 'react';

interface NavbarProps {
  scrollTo: (id: string) => void;
}

function Navbar({ scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center relative">
        {/* Hamburger icon */}
        <div className="absolute right-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {["About", "Experience", "Projects","Skills", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="capitalize text-gray-200 hover:text-white transform transition-transform duration-75 hover:scale-[1.01]"
            >
              {section}
            </button>
          ))}
          <a
            href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white py-2 rounded text-center"
          >
            Resume
          </a>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden flex flex-col gap-4 px-4 py-4 bg-gray-900 absolute top-full left-0 w-full shadow z-40 overflow-hidden transition-all duration-500 ease-in-out transform ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {["About", "Experience", "Projects","Skills", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollTo(section);
                setMenuOpen(false);
              }}
              className="capitalize text-gray-200 hover:text-white text-left transform transition-transform duration-75 hover:scale-[1.01]"
            >
              {section}
            </button>
          ))}
          <a
            href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white rounded text-left"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
