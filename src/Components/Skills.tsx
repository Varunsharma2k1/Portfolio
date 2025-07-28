import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiOpensearch,
  SiGit,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa"; // ✅ New Icons
import { GiNinjaStar } from "react-icons/gi";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "AWS", icon: <SiAmazon className="text-orange-400" /> },
  { name: "OpenSearch", icon: <SiOpensearch className="text-blue-400" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "DSA", icon: <FaCode className="text-indigo-500" /> },
];

export default function Skills() {
  return (
    <>
      <div className="container mb-2 mx-auto">
        <div className="flex justify-center"></div>
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="font-cursive font-semibold text-3xl md:text-5xl text-center mt-6 flex items-center justify-center gap-3 text-dark"
        >
          <GiNinjaStar className="text-dark w-8 h-8" /> My Skills
        </h1>

        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text italic text-transparent font-semibold">
            Tools I play with to build awesome things
          </span>
        </p>
      </div>

      <div className="flex justify-center py-1 px-4">
        <div className="p-2 rounded-2xl w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-base text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-5 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-gray-800 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
