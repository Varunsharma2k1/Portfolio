import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        "https://vfpbadp477.execute-api.ap-south-1.amazonaws.com/dev/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("🎉 Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("❌ Subscription failed. Try again.");
      }
    } catch (err) {
      console.error("Error while subscribing:", err);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact">
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10">
          {/* Newsletter */}
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-semibold text-white">
              Built Something Cool. Want to See? Subscribe.
            </span>

            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md mx-auto mt-4 space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 w-full rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-white px-4 mx-2 py-2 w-full sm:w-auto mt-2 sm:mt-0 rounded-md bg-purple-700 hover:bg-purple-800 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              {message && (
                <p className="text-sm text-green-400 mt-2 text-center">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info Row */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Left Column */}
            <div className="flex-1 text-white">
              <span className="flex items-center gap-2 font-bold text-white">
                <span className="text-yellow-400">✦</span> Varun Sharma
              </span>

              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Backend Developer passionate about building scalable solutions.
                <br />
                Focused on performance, APIs, and OpenSearch magic.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex-1 text-white text-center md:text-right">
              <h4 className="text-lg font-semibold mb-3">Let’s Connect</h4>
              <div className="flex justify-center md:justify-end gap-6">
                <a
                  href="https://github.com/Varunsharma2k1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 text-2xl transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/varun-sharma-76a3bb184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:varunsharma2k1@gmail.com"
                  className="hover:text-purple-400 text-2xl transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
          <div className="text-sm text-gray-400 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <span>© 2025 Varun Sharma. All Rights Reserved.</span>
            <span>
              Made with <span className="text-red-500">❤️</span> using React
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
