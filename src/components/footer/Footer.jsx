import React from "react";
import { FaTelegram, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from '../../assets/trace.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-[20px]">
          <div>
            <img className="w-[100px]" src={logo} alt="Logo" />
          </div>
          {/* Navigatsiya */}
          <nav className="mt-6">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600 md:space-x-6">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-blue-600 transition-colors duration-200"
                >
                  Sayt haqida
                </a>
              </li>
              <li>
                <a
                  href="/rss"
                  className="hover:underline hover:text-blue-600 transition-colors duration-200"
                >
                  RSS
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-blue-600 transition-colors duration-200"
                >
                  Aloqa
                </a>
              </li>
              <li>
                <a
                  href="/advertise"
                  className="hover:underline hover:text-blue-600 transition-colors duration-200"
                >
                  Reklama
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:underline hover:text-blue-600 transition-colors duration-200"
                >
                  Kun.uz jamoasi
                </a>
              </li>
            </ul>
          </nav>
          {/* Ijtimoiy tarmoq ikonkalari */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://t.me/portal24_official"
              className="text-gray-600 hover:text-blue-500 text-xl transition-colors duration-200"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/portal24_official"
              className="text-gray-600 hover:text-pink-600 text-xl transition-colors duration-200"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@portal24_official"
              className="text-gray-600 hover:text-blue-400 text-xl transition-colors duration-200"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/@portal24_official"
              className="text-gray-600 hover:text-red-600 text-xl transition-colors duration-200"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Matn */}
        <p className="text-gray-700 text-sm leading-relaxed md:text-base">
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
        <p className="text-gray-500 text-xs mt-4 leading-relaxed">
          Ⓣ - maqola va materiallarda qo‘yilgan mazkur belgi ularning tijorat va
          reklama huquqlari asosida e’lon qilinganligini bildiradi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
