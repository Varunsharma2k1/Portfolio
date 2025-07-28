import {
  FaGuitar,
  FaMusic,
  FaFilm,
  FaBook,
  FaGlobeAmericas,
  FaWalking,
  FaFutbol,
  FaTableTennis,
} from "react-icons/fa";

export default function BeyondCode() {
  return (
    <div className="max-w-5xl bg-gray-900 mx-auto px-4 py-10 rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="md:w-[70%] w-full">
          <h2
            className="text-3xl font-semibold mb-2 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Beyond the Code
          </h2>
          <p
            className="text-lg  mb-6 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore my interests and hobbies beyond the digital realm.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaMusic className="text-purple-400" />
              Music
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaGuitar className="text-yellow-400" />
              Guitar
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaWalking className="text-green-400" />
              Travelling
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaFilm className="text-red-400" />
              Movies
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaBook className="text-blue-400" />
              Reading
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaGlobeAmericas className="text-teal-400" />
              Sports
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaFutbol className="text-orange-400" />
              Football
            </li>
            <li className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              <FaTableTennis className="text-pink-400" />
              Badminton
            </li>
          </ul>
        </div>

        {/* Right Column - Map */}
        <div className="md:w-[30%] ">
          <div className="p-2 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112306.04077720223!2d77.23650227910501!3d28.402240755217942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1753708204471!5m2!1sen!2sin"
              className="w-full h-48 rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
