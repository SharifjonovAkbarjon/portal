import React from 'react';
import logo from '../../assets/trace.svg';
import { Link } from 'react-router-dom';
import reklama from '../../assets/reklama.jpg';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
      <div>
        <img className='w-full' src={reklama} alt="Reklama" />
      </div>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">
            <Link to={"/"}>
              <img className="w-[100px]" src={logo} alt="Logo" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to={"/"}>
              <p className="hover:text-blue-600">Asosiy sahifa</p>
            </Link>
            <Link to={"/news"}>
              <p className="hover:text-blue-600">Yangiliklar</p>
            </Link>
            <Link to={"/jamiyat"}>
              <p className="hover:text-blue-600">Jamiyat</p>
            </Link>
            <Link to={"/sport"}>
              <p className="hover:text-blue-600">Sport</p>
            </Link>
            <Link to={"/technology"}>
              <p className="hover:text-blue-600">Texnologiya</p>
            </Link>
          </nav>

          {/* Search, Dark Mode & Language */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Qidiruv..."
              className={`hidden md:block px-3 py-1 border rounded-md ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-blue-600"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.928 4.928l1.06 1.06m12.024 12.024l1.06 1.06M3 12h1.5M19.5 12H21M4.928 19.072l1.06-1.06m12.024-12.024l1.06-1.06" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                </svg>
              )}
            </button>
            {/* Language Selector */}
            <select className={`px-3 py-1 border rounded-md ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'border-gray-300'}`}>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
