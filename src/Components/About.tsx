function About() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Text: left on desktop, below image on mobile */}
        <div className="md:col-span-7 bg-white p-4 flex flex-col order-2 md:order-1">
          <h1
            className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Varun Sharma{" "}
            <span className="px-2 inline-block animate-waving-hand">👋</span>
          </h1>
          <p
            className="text-gray-600 mb-4 mt-5 font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            I'm a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text italic text-transparent font-semibold">
              FullStack Developer
            </span>{" "}
             with a strong inclination towards backend architecture and
            problem solving. I love building robust, scalable web applications
            that are clean, efficient, and meaningful. From designing APIs to
            shaping intuitive frontends, I enjoy the challenge of creating
            things from scratch. With 1+ years of experience, I still find joy
            in trying new technologies, pushing boundaries, and building
            something fun and impactful. Outside of code, you'll find me
            indulging in music, sports, and anything that keeps the energy
            alive.
          </p>

          <div
            className="flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <i className="fa-solid fa-location-dot text-lg text-primary" />
            <p className="text-foreground transition-colors duration-300 text-base">
              Faridabad, Haryana, India
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Animated Ping Dot */}
            <div className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
            </div>

            {/* Text */}
            <p
              className="text-foreground text-base"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Available for new projects
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: "#7707d9",
            }}
            className="text-white mt-4  py-2 rounded-lg w-40 text-xl transition-transform duration-300 transform hover:scale-105 inline-block"
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
      <div id="experience" className="h-1 scroll-mt-24"></div>
    </div>
  );
}

export default About;
