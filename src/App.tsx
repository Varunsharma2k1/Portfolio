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
    const response = await fetch('https://vfpbadp477.execute-api.ap-south-1.amazonaws.com/dev/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    console.log(response);

    if (response.ok) {
      alert('Subscribed successfully!');
    } else {
      alert('Subscription failed!');
    }
  } catch (err) {
    console.error("Error while subscribing:", err);
    alert('Subscription failed due to an error.');
  }
};



  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Varun Sharmerretdfgdfgsdra</h1>
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
            {["about", "projects", "experience", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="capitalize hover:text-blue-600 text-left md:text-center"
              >
                {section}
              </button>
            ))}
            <a
  href="https://varun-sharma.s3.ap-south-1.amazonaws.com/VarunSharma_Resume2k25.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
>
  Download Resume
</a>
          </div>
        </div>
      </nav>

      <div className="pt-24 space-y-24">
        {/* Sections */}
        <section
          id="about"
          className="min-h-screen bg-gray-100 flex justify-center items-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        </section>

        <section
          id="projects"
          className="min-h-screen bg-white flex justify-center items-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        </section>

        <section
          id="experience"
          className="min-h-screen bg-gray-100 flex justify-center items-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen bg-white flex flex-col items-center justify-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-6 text-center">Email: your@email.com</p>

          {/* Newsletter */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md space-y-2"
          >
            <label className="block text-gray-700 font-medium text-center">
              Subscribe to Newsletter
            </label>
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
                className="bg-blue-500 text-white px-4 py-2 rounded sm:rounded-r sm:rounded-l-none hover:bg-blue-600 mt-2 sm:mt-0"
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
