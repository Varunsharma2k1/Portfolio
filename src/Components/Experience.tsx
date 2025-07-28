import {
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiDocker,
  SiHtml5,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaDocker } from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiExpress,
  SiReact,
  SiKubernetes,
} from "react-icons/si";

function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-19 ">
      <h1
        className="text-4xl sm:text-5xl font-semibold text-primary flex items-center justify-center mb-16"
        style={{ opacity: 1, transform: "none" }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="mr-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
        </svg>
        Work Experience
      </h1>

      {/* Row 1: Right side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div></div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Software Developer
          </h3>
          <h4>Tata Consultancy Services</h4>
          <p className="italic text-gray-700 mb-2">Dec 2023 - Present</p>

          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiHtml5 className="text-orange-500" size={14} /> HTML
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiCss3 className="text-blue-500" size={14} /> CSS
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiJavascript className="text-yellow-400" size={14} /> JavaScript
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiMongodb className="text-green-500" size={14} /> MERN
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiDjango className="text-green-800" size={14} /> Django
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiDocker className="text-blue-400" size={14} /> Docker
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiKubernetes className="text-blue-300" size={14} /> Kubernetes
            </span>
          </div>

          <ul className="list-disc list-outside text-gray-600 font-medium mt-5 space-y-2 leading-tight pl-5">
            <li>
              Designed and deployed scalable Node.js/Express microservices and
              REST APIs for a large-scale pharmaceutical application using{" "}
              <strong>AWS</strong> (EC2, ECS, Lambda), improving system
              reliability and performance.
            </li>
            <li>
              Migrated legacy on-premises systems to <strong>AWS</strong> (EC2,
              S3, Lambda), reducing operational overhead by 35% while enhancing
              scalability and resiliency.
            </li>
            <li>
              Led Heroku to AWS migration, containerizing services with{" "}
              <strong>Docker</strong> on ECS/Fargate for efficient deployment
              and management.
            </li>
            <li>
              Built and tuned Amazon <strong>OpenSearch (Elasticsearch)</strong>{" "}
              indices and advanced search queries, implementing NLP and Gen AI
              concepts for improved relevance and speed.
            </li>
            <li>
              Implemented infrastructure-as-code and monitoring with{" "}
              <strong>AWS CloudFormation</strong> and CloudWatch, automating
              deployments and ensuring 99.9% uptime for critical services.
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2: Left side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Full Stack Developer Intern
          </h3>
          <h4>Manav Rachna Internatinal University</h4>
          <p className="italic text-gray-700 mb-2">Jan 2023 - June 2023</p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <FaHtml5 className="text-orange-500" size={14} /> HTML
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <FaCss3Alt className="text-blue-500" size={14} /> CSS
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <FaJs className="text-yellow-400" size={14} /> JavaScript
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiDjango className="text-green-700" size={14} /> Django
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiMongodb className="text-green-500" size={14} /> MERN
            </span>
            <span className="hidden">
              <SiExpress size={14} />
              <SiReact size={14} />
              <SiNodedotjs size={14} />
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <FaDocker className="text-blue-400" size={14} /> Docker
            </span>
            <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full">
              <SiKubernetes className="text-sky-400" size={14} /> Kubernetes
            </span>
          </div>
          <ul className="list-disc list-outside text-gray-600 font-medium mt-5 space-y-2 leading-tight pl-5">
            <li>
              Developed and maintained web applications using{" "}
              <strong>Django</strong> and the <strong>MERN</strong> stack, while
              gaining practical experience with Docker and Kubernetes.
            </li>
            <li>
              Worked on API development, management, and integration with cloud
              databases.
            </li>
            <li>
              Played a pivotal role in a project involving API management,
              development, and integration with cloud databases, among other
              responsibilities.
            </li>
            <li>
              Contributed to building responsive landing pages with HTML, CSS,
              JavaScript, and <strong>Bootstrap</strong>.
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div id="projects" className="h-1 scroll-mt-24"></div>
    </div>
  );
}

export default Experience;
