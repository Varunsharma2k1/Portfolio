import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on mobile
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ❗ Prevent the form from refreshing the page
    console.log(email);

    try {
      const response = await fetch(
        "https://vfpbadp477.execute-api.ap-south-1.amazonaws.com/dev/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      console.log(response);

      if (response.ok) {
        alert("Subscribed successfully!");
        window.location.reload();
      } else {
        alert("Subscription failed!");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error while subscribing:", err);
      alert("Subscription failed due to an error.");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-3">Varun Sharma</h1>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:gap-6 absolute md:static bg-white top-full left-0 w-full md:w-auto px-4 py-4 md:p-0 shadow md:shadow-none z-40`}
          >
            {["About", "Experience", "Projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="capitalize text-left md:text-center transform transition-transform duration-75 hover:scale-[1.01]"
              >
                {section}
              </button>
            ))}
            <a
              href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#f0eae9" }}
              className=" text-dark px-4 py-2 rounded  text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20 space-y-24">
        <div id="About" className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Text: left on desktop, below image on mobile */}
            <div className="md:col-span-7 bg-white p-4 flex flex-col order-2 md:order-1">
              <h1
                className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Full Stack Developer
              </h1>
              <p
                className="text-gray-600 mb-4 mt-5  font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Experienced Backend Developer with a strong foundation in
                designing and building scalable microservices using Node.js and
                Express.js, with extensive experience deploying applications to
                AWS Cloud (EC2, Lambda, RDS, ECS/Fargate). Proficient in
                building and optimizing complex OpenSearch/Elasticsearch queries
                and algorithms to enhance search performance and relevance.
                Hands-on experience with migration of legacy systems to AWS,
                including transitioning from Heroku to AWS. Collaborative team
                player with a problem-solving mindset and a passion for
                delivering high-quality, scalable solutions.
              </p>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: "#7707d9",
                }}
                className="text-white mt-4 px-4 py-4 rounded-lg w-40 text-xl transition-transform duration-300 transform hover:scale-105 inline-block"
              >
                Contact Me
              </button>
            </div>

            {/* Image: right on desktop, top on mobile */}
            <div className="md:col-span-5 flex justify-center p-4 rounded-xl order-1 md:order-2">
              <img
                src="/mypic.jpg"
                alt="Profile"
                className="w-80 h-80 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div id="Experience" className="max-w-6xl mx-auto px-4 py-20 mt-5">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-20">
            {/* Image on left */}
            <div className="md:col-span-5 order-1 md:order-1 flex">
              <img
                src="/logo.jpg"
                alt="Profile"
                className="w-90 h-80 object-contain p-4"
              />
            </div>

            {/* Title and description on right */}
            <div className="md:col-span-7 order-2 md:order-2 bg-white p-4 flex flex-col justify-center">
              <h1
                className="text-2xl font-semibold leading-tight text-gray-900 mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                System Engineer
              </h1>
              <p className="text-normal italic  font-normal leading-tight text-gray-900 mb-3">
                Dec 2023 - Present
              </p>
              <p
                className="text-gray-600 font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Architected and implemented scalable Node.js/Express back-end
                microservices and RESTful APIs for a large-scale pharmaceutical
                application, leveraging AWS (EC2, ECS, Load Balancing, Lambda)
                to improve system reliability, performance, and support rapid
                growth Engineered migration of legacy on-premises systems to AWS
                cloud infrastructure, streamlining infrastructure management and
                reducing operational overhead by 35%, while boosting scalability
                and resiliency.
              </p>
            </div>
          </div>

          <div className="hidden md:flex h-full ml-5">
            <svg
              width="8"
              height="100%"
              viewBox="0 0 6 100"
              preserveAspectRatio="none"
            >
              <circle cx="3" cy="3" r="3" fill="#b45f06" />
              <line
                x1="3"
                y1="6"
                x2="3"
                y2="94"
                stroke="#b45f06"
                strokeWidth="2"
              />
              <circle cx="3" cy="97" r="3" fill="#b45f06" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
            {/* Image on left */}
            <div className="md:col-span-5 order-1 md:order-1 flex">
              <img
                src="/mrric.png"
                alt="Profile"
                className="w-90 h-80 object-contain p-4"
              />
            </div>

            {/* Title and description on right */}
            <div className="md:col-span-7 order-2 md:order-2 bg-white p-4 flex flex-col justify-center">
              <h1
                className="text-2xl font-semibold leading-tight text-gray-900 mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Full Stack Developer Intern
              </h1>
              <p className="text-normal italic  font-normal leading-tight text-gray-900 mb-3">
                Jan 2023 - June 2023
              </p>
              <p
                className="text-gray-600 font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                As a full stack developer intern at the MRIIC department of
                Manav Rachna University. I delved into cutting-edge technologies
                such as Django and the MERN stack, and gained a foundational
                understanding of Docker and Kubernetes. Played a pivotal role in
                a project involving API management, development, and integration
                with cloud databases, among other responsibilities. Contributed
                to the development of landing pages using HTML, CSS, JavaScript,
                and Bootstrap.
              </p>
            </div>
          </div>
        </div>

        <section
          id="Projects"
          className="min-h-screen bg-white flex flex-col items-center px-4 py-20 mt-5"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl ">
            {/* First Project */}
            <div className="p-4 rounded shadow-2xl ">
              <p
                className="text-gray-600 mb-4 mt-5 text-2xl font-bold text-left"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Blood Donation App
              </p>
              <p
                className="text-gray-600 mb-4 mt-5 text-xl font-normal"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                In this web app, a user can become a donor and someone who wants
                to connect with that donor can easily connect.
              </p>
              <div className="flex space-x-6 mt-6 text-3xl text-blue-700">
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <i className="devicon-express-original colored"></i>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=LTOvl8RLGC0",
                    "_blank"
                  )
                }
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: "#D97707",
                }}
                className="text-white mt-9 px-4 py-2 rounded-lg w-40 text-xl transition-transform duration-300 transform hover:scale-105 inline-block"
              >
                Demo
              </button>
            </div>

            {/* Second Project */}
            <div className="p-4 rounded shadow-2xl">
              <p
                className="text-gray-600 mb-4 mt-5 text-2xl font-bold text-left"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Chanakya Vidya Mandir
              </p>
              <p
                className="text-gray-600 mb-4 mt-5 text-xl font-normal"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                School Landing Page built using modern web technology. It
                utilizes a responsive design approach.Hosted on{" "}
                <span className="font-semibold">PythonAnyWhere</span>.
              </p>
              <div className="flex space-x-6 mt-6 text-3xl text-blue-700">
                <i className="devicon-python-plain colored"></i>
                <i className="devicon-django-plain colored"></i>
                <i className="devicon-bootstrap-plain colored"></i>
                <i className="devicon-javascript-plain colored"></i>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://chanakyavidyamandir.pythonanywhere.com/",
                    "_blank"
                  )
                }
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: "#D97707",
                }}
                className="text-white mt-9 px-4 py-2 rounded-lg w-40 text-xl transition-transform duration-300 transform hover:scale-105 inline-block"
              >
                Demo
              </button>
            </div>

            {/* Third Project (Full width) */}
            <div className=" md:col-span-2 flex justify-center mt-6">
              <div className="p-4 rounded shadow-2xl w-full max-w-md text-left">
                <p
                  className="text-gray-600 mb-4 mt-5 text-2xl font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Tesla Stock API
                </p>
                <p
                  className="text-gray-600 mb-4 mt-5 text-xl font-normal"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  This project simply fetch data from api which tell the
                  information about tesla prices and simply showup in the Charts
                  using google charts.
                </p>
                <div className="flex space-x-6 mt-6 text-3xl text-blue-700">
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-html5-plain colored"></i>
                  <i className="devicon-github-original colored"></i>
                  <i className="devicon-css3-plain-wordmark colored"></i>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      "https://varunsharma2k1.github.io/TeslaStock/",
                      "_blank"
                    )
                  }
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    backgroundColor: "#D97707",
                  }}
                  className="text-white mt-9 px-4 py-2 rounded-lg w-40 text-xl transition-transform duration-300 transform hover:scale-105 inline-block"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="contact">
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Join the newsLetter
                </span>

                {/* Newsletter Form moved here */}
                <form
                  onSubmit={handleSubscribe}
                  className="w-full max-w-md space-y-2 mt-4"
                >
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded sm:rounded-l sm:rounded-r-none focus:outline-none"
                    />
                    <button
                      type="submit"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        backgroundColor: "#7707d9",
                      }}
                      className="text-white px-4 py-2 rounded sm:rounded-r sm:rounded-l-none mt-2 sm:mt-0"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow Me
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://www.linkedin.com/in/varun-sharma-76a3bb184"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://github.com/Varunsharma2k1"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://www.youtube.com/@VarunSharma-ke8vs"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="mailto:varunsharma2k1@gmail.com"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 Varun Sharma . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
