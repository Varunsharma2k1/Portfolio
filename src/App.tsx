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
      } else {
        alert("Subscription failed!");
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
            {["About", "Projects", "Experience"].map((section) => (
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
                including transitioning from Heroku to AWS. Skilled in REST API
                design, containerization with Docker, CI/CD pipelines using AWS
                CodePipeline, and infrastructure automation with CloudFormation.
                Adept at improving application performance, ensuring system
                reliability, and reducing operational costs through automation
                and optimized backend architecture. Collaborative team player
                with a problem-solving mindset and a passion for delivering
                high-quality, scalable solutions.
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

        <section
          id="Projects"
          className="min-h-screen bg-white flex justify-center items-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        </section>

        <section
          id="Experience"
          className="min-h-screen bg-gray-100 flex justify-center items-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen bg-white flex flex-col items-center justify-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Contact Me
          </h2>

          {/* Newsletter */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md space-y-2"
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
                className=" text-white px-4 py-2 rounded sm:rounded-r sm:rounded-l-none mt-2 sm:mt-0 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
