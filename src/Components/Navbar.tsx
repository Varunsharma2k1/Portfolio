import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

interface NavbarProps {
  scrollTo: (id: string) => void;
}

function Navbar({ scrollTo }: NavbarProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-play on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Autoplay failed:", err));
    }
  }, []);

  const handlePlayToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((err) => {
          console.warn("Failed to play audio:", err);
        });
        setIsPlaying(true);
      }
    }
  };

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
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="capitalize text-gray-200 hover:text-white transform transition-transform duration-75 hover:scale-[1.01]"
              >
                {section}
              </button>
            )
          )}
          <a
            href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white py-2 rounded text-center"
          >
            Resume
          </a>

          <button
            onClick={handlePlayToggle}
            className="px-3 py-3 rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700"
          >
            <audio
              ref={audioRef}
              src="/The-Open-Sky-chosic.com_.mp3"
              preload="auto"
            />
            <FaMusic className="text-sm" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden flex flex-col gap-4 px-4 py-4 bg-gray-900 absolute top-full left-0 w-full shadow z-40 overflow-hidden transition-all duration-500 ease-in-out transform ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (section) => (
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
            )
          )}
          <a
            href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white rounded text-left"
          >
            Resume
          </a>

          <button
            onClick={handlePlayToggle}
            className="w-10 h-10 sm:w-auto sm:px-4 py-2 rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700 flex items-center justify-center"
          >
            <audio
              ref={audioRef}
              src="/The-Open-Sky-chosic.com_.mp3"
              preload="auto"
            />
            <FaMusic className="text-base" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
