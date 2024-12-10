import React from "react";
import { NavLink } from "react-router-dom"; 
import messi from '../../assets/messi.jpg';
import haaland from '../../assets/haaland.jpg'; 
import neymar from '../../assets/neymar.jpg'; 
import raphinha from '../../assets/raphinha.jpg'; 
import lewandowski from '../../assets/lewandowski.jpg'; 
import yamal from '../../assets/yamal.jpeg'; 
 
const Sport = ({ darkMode }) => {
  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-16 px-6`}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          So'nggi Futbol Yangiliklari
        </h1>
        <p className="text-lg mb-10">
          Dunyo bo'ylab eng yangi va qiziqarli futbol yangiliklarini bilib oling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            id: 1, img: messi, title: "Messi Yangi Klubga O'tdi"
          }, {
            id: 2, img: haaland, title: "Haaland Premier Ligada Eng Yaxshi To'purar"
          }, {
            id: 3, img: neymar, title: "Neymar Xavfli Jarohat Oldi"
          }, {
            id: 4, img: raphinha, title: "Raphinha Yangi Klubga O'tdi"
          }, {
            id: 5, img: lewandowski, title: "Lewandowski Yevropa Ligasi G'olibi"
          }, {
            id: 6, img: yamal, title: "Yamal Yevropaning Eng Yaxshi Yosh Futbolchisi"
          }].map((news) => (
            <div key={news.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <img src={news.img} alt={news.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mb-3">
                {news.title}
              </h2>
              <NavLink
                to={`/news/${news.id}`}
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
              >
                Batafsil
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sport;
