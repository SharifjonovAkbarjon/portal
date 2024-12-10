import React from "react";
import { FaTelegram, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from '../../assets/trace.svg';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300'} py-8 text-center border-t`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-[20px]">
          <div>
            <img className="w-[100px]" src={logo} alt="Logo" />
          </div>
          {/* Navigatsiya */}
          <nav className="mt-6">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm md:space-x-6">
              {[
                { name: "Sayt haqida", link: "/about" },
                { name: "RSS", link: "/rss" },
                { name: "Aloqa", link: "/contact" },
                { name: "Reklama", link: "/advertise" },
                { name: "Kun.uz jamoasi", link: "/team" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:underline transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Ijtimoiy tarmoq ikonkalari */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://t.me/portal24_official"
              className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} text-xl transition-colors duration-200`}
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/portal24_official"
              className={`${darkMode ? 'text-gray-400 hover:text-pink-500' : 'text-gray-600 hover:text-pink-600'} text-xl transition-colors duration-200`}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@portal24_official"
              className={`${darkMode ? 'text-gray-400 hover:text-blue-300' : 'text-gray-600 hover:text-blue-400'} text-xl transition-colors duration-200`}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/@portal24_official"
              className={`${darkMode ? 'text-gray-400 hover:text-red-500' : 'text-gray-600 hover:text-red-600'} text-xl transition-colors duration-200`}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Matn */}
        <p className="text-sm leading-relaxed md:text-base">
          “KUN.UZ” saytida e’lon qilingan materiallardan nusxa ko‘chirish,
          tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma
          roziligi bilan amalga oshirilishi mumkin. <br />
          Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB
          EXPERT” MCHJ. Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov
          ko‘chasi, 12-uy. Elektron manzil: info@kun.uz. <br />
          Saytda e’lon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar
          muallifga tegishli va ular Kun.uz tahririyati nuqtai nazarini ifoda
          etmasligi mumkin.
        </p>
        {/* Reklama */}
        <p className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} text-xs mt-4 leading-relaxed`}>
          Ⓣ - maqola va materiallarda qo‘yilgan mazkur belgi ularning tijorat va
          reklama huquqlari asosida e’lon qilinganligini bildiradi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
