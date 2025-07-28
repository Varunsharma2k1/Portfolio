import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import BeyondCode from "./Components/BeyondCode";
export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar scrollTo={scrollTo} />
      <div className="pt-20 space-y-24">
        <About />
        <Experience />
        <Projects />
        <Skills/>
        <BeyondCode/>
        <Footer />
      </div>
    </div>
  );
}
