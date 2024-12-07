import React from "react";
import { NavLink } from "react-router-dom"; 
import messi from '../../assets/messi.jpg';
import haaland from '../../assets/haaland.jpg'; 
import neymar from '../../assets/neymar.jpg'; 
import raphinha from '../../assets/raphinha.jpg'; 
import lewandowski from '../../assets/lewandowski.jpg'; 
import yamal from '../../assets/yamal.jpeg'; 

const Sport = () => {
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
            <img src={messi} alt="Messi" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Messi Yangi Klubga O'tdi
            </h2>
            <NavLink
              to="/news/1"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={haaland} alt="Haaland" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Haaland Premier Ligada Eng Yaxshi To'purar
            </h2>
            <NavLink
              to="/news/2"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={neymar} alt="Neymar" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Neymar Xavfli Jarohat Oldi
            </h2>
            <NavLink
              to="/news/3"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={raphinha} alt="Raphinha" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Raphinha Yangi Klubga O'tdi
            </h2>
            <NavLink
              to="/news/4"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={lewandowski} alt="Lewandowski" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Lewandowski Yevropa Ligasi G'olibi
            </h2>
            <NavLink
              to="/news/5"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={yamal} alt="Yamal" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Yamal Yevropaning Eng Yaxshi Yosh Futbolchisi
            </h2>
            <NavLink
              to="/news/6"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Batafsil
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport;
