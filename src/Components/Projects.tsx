import { useEffect, useRef, useState, type JSX } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiAmazon,
  SiTerraform,
  SiGooglechat,
  SiOpensearch, 
  SiHuggingface, 
} from "react-icons/si";
import { 
  GiBrain, 
  GiSettingsKnobs 
} from "react-icons/gi";

// Define allowed tech keys
type TechName =
  | "React" | "Python" | "Django" | "Bootstrap" | "JavaScript"
  | "Node.js" | "MongoDB" | "Express" | "S3" | "CloudFront"
  | "Lambda" | "Terraform" | "HTML" | "CSS" | "Google Charts"
  | "NLP" | "Vector Embeddings" | "OpenSearch" | "Transformers";

// Icon map with explicit type
const iconMap: Record<TechName, JSX.Element> = {
  // Existing Tech
  React: <FaReact className="inline mr-1 text-cyan-400" />,
  Python: <FaPython className="inline mr-1 text-yellow-400" />,
  Django: <SiDjango className="inline mr-1 text-green-500" />,
  Bootstrap: <FaBootstrap className="inline mr-1 text-purple-400" />,
  JavaScript: <SiJavascript className="inline mr-1 text-yellow-300" />,
  "Node.js": <FaNodeJs className="inline mr-1 text-green-400" />,
  MongoDB: <SiMongodb className="inline mr-1 text-green-500" />,
  Express: <SiExpress className="inline mr-1 text-white" />,
  S3: <SiAmazon className="inline mr-1 text-orange-400" />,
  CloudFront: <SiAmazon className="inline mr-1 text-orange-400" />,
  Lambda: <SiAmazon className="inline mr-1 text-orange-400" />,
  Terraform: <SiTerraform className="inline mr-1 text-purple-500" />,
  HTML: <FaHtml5 className="inline mr-1 text-orange-500" />,
  CSS: <FaCss3Alt className="inline mr-1 text-blue-500" />,
  "Google Charts": <SiGooglechat className="inline mr-1 text-red-400" />,

  // --- New AI & Search Tech ---
  "NLP": <GiBrain className="inline mr-1 text-pink-400" />,
  "Vector Embeddings": <GiSettingsKnobs className="inline mr-1 text-indigo-400" />,
  "OpenSearch": <SiOpensearch className="inline mr-1 text-blue-500" />,
  "Transformers": <SiHuggingface className="inline mr-1 text-yellow-400" />,
};

const projectCards = [
   {
    title: "Vector-Based Product Retrieval System",
    description:
      "semantic search tool that understands that if you're looking for a 'corporate commute' outfit, you probably want a blazer—even if the word 'corporate' isn't in the product description. Powered by OpenSearch and AI Embeddings, it moves search from simple word-matching to true human-like understanding",
    tech: ["NLP", "Vector Embeddings", "OpenSearch", "Node.js", "Transformers"],
    link: "https://vector-search-pi.vercel.app/",
    repo: "https://github.com/Varunsharma2k1/VectorSearch",
  },
  {
    title: "Chanakya Vidya Mandir",
    description:
      "School Landing Page built using modern web technology. It utilizes a responsive design approach. Hosted on PythonAnyWhere.",
    tech: ["Python", "Django", "Bootstrap", "JavaScript"],
    link: "https://chanakyavidyamandir.pythonanywhere.com/",
    repo: "https://github.com/Varunsharma2k1/SchoolWebsite",
  },
  {
    title: "Blood Donation App",
    description:
      "In this web app, a user can become a donor and someone who wants to connect with that donor can easily connect.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://www.youtube.com/watch?v=LTOvl8RLGC0",
    repo: "https://github.com/Varunsharma2k1/backendbdn",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a sleek, responsive portfolio using React and Tailwind to showcase projects and skills.Integrated animations, SEO optimization, and a serverless contact form via AWS Lambda.",
    tech: ["React", "S3", "CloudFront", "Lambda", "Terraform"],
    link: "https://do0ms2c9gu1nh.cloudfront.net/",
    repo: "https://github.com/Varunsharma2k1/Portfolio",
  },
  {
    title: "Tesla Stock API",
    description:
      "This project simply fetches data from an API which tells the information about Tesla prices and displays them using Google Charts.",
    tech: ["JavaScript", "HTML", "CSS", "Google Charts"],
    link: "https://varunsharma2k1.github.io/TeslaStock/",
    repo: "https://github.com/Varunsharma2k1/TeslaStock",
  },
];

function Projects() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<any>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.slickPlay();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    className: "center-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: true,
    beforeChange: (_: any, next: number) => {
      setActive(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: true,
          beforeChange: (_: any, next: number) => setActive(next),
        },
      },
    ],
  };

  return (
    <div>
  <div className="container mb-10 mx-auto">
        <div className="flex justify-center"></div>
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="font-cursive font-semibold text-3xl md:text-6xl text-center mt-6 flex items-center justify-center gap-3 text-dark"
        >
          <FaProjectDiagram className="text-dark w-8 h-8" />
          Featured Projects
        </h1>

        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text italic text-transparent font-semibold">
            See how I transformed concepts into engaging digital experiences.
          </span>
        </p>
      </div>
      <div className="w-full bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Slider ref={sliderRef} {...settings}>
            {projectCards.map((project, index) => (
              <div
                key={index}
                className="px-4 cursor-pointer"
                onClick={() => {
                  if (index !== active) sliderRef.current.slickGoTo(index);
                }}
              >
                <div
                  className={`transition-all duration-500 transform rounded-xl p-8 shadow-2xl ${
                    index === active
                      ? "scale-110 bg-zinc-800 z-10 opacity-100"
                      : "scale-90 bg-zinc-700 opacity-60"
                  }`}
                >
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 items-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        {(iconMap as Record<string, JSX.Element>)[tech] && (
                          <span className="w-4 h-4">
                            {(iconMap as Record<string, JSX.Element>)[tech]}
                          </span>
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-white text-black text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      className="border border-white text-white text-sm font-medium px-4 py-2 rounded hover:bg-white hover:text-black transition"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div id="skills" className="h-1 scroll-mt-24"></div>
    </div>
  );
}

export default Projects;
