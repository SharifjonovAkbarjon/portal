import React from "react";
import { NavLink } from "react-router-dom"; 
import { FaFootballBall } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          So'nggi Futbol Yangiliklari
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Dunyo bo'ylab eng yangi va qiziqarli futbol yangiliklarini bilib oling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Messi Yangi Klubga O'tdi
            </h2>
            <p className="text-gray-600 mb-4">
              Lionel Messi, Parij Saint-Germain klubidan keyin yangi klubga o'tdi va yangi muvaffaqiyatlarga erishishga tayyor.
            </p>
            <NavLink
              to="/news/1"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              <FaFootballBall className="mr-2" />
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Cristiano Ronaldo Boshqa Ligaga O'tdi
            </h2>
            <p className="text-gray-600 mb-4">
              Cristiano Ronaldo Saudiyaga ko'chib o'tdi va yangi jamoada o'zining ta'sirini ko'rsatmoqda.
            </p>
            <NavLink
              to="/news/2"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              <FaFootballBall className="mr-2" />
              Batafsil
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
