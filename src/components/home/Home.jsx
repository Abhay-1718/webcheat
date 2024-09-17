import { FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaPython, FaPhp, FaRust, FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiKotlin, SiFlask, SiSpringboot, SiExpress } from "react-icons/si";
import { DiDjango, DiGo } from "react-icons/di";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 text-gray-800 p-6">
      {/* Top Section with WebCheat */}
      <div className="text-center pt-8 mb-16">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">WebCheat</h1>
        <h3 className="text-xl text-gray-700">
          Here are some cheatsheets and quick references 
        </h3>
      </div>

      {/* Categories */}
      <div className="w-full max-w-5xl px-4">
        {/* Basic Web Development */}
        <h1 className="text-4xl font-semibold text-teal-400 mb-12 mt-8">Basic Web Development</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          <button
            onClick={() => handleButtonClick('/html')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaHtml5 className="w-8 h-8 text-orange-500" />
            HTML
          </button>
          <button
            onClick={() => handleButtonClick('/css')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaCss3Alt className="w-8 h-8 text-blue-500" />
            CSS
          </button>
          <button
            onClick={() => handleButtonClick('/bootstrap')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaBootstrap className="w-8 h-8 text-purple-500" />
            Bootstrap
          </button>
          <button
            onClick={() => handleButtonClick('/tailwind')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <RiTailwindCssFill className="w-8 h-8 text-blue-400" />
            Tailwind
          </button>
        </div>

        {/* Programming Languages */}
        <h1 className="text-4xl font-semibold text-teal-400 mb-12 mt-8">Programming Languages</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          <button
            onClick={() => handleButtonClick('/Js')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <IoLogoJavascript className="w-8 h-8 text-yellow-500" />
            JavaScript
          </button>
          <button
            onClick={() => handleButtonClick('/java')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaJava className="w-8 h-8 text-red-500" />
            Java
          </button>
          <button
            onClick={() => handleButtonClick('/python')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaPython className="w-8 h-8 text-yellow-400" />
            Python
          </button>
          <button
            onClick={() => handleButtonClick('/go')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <DiGo className="w-8 h-8 text-blue-600" />
            Go
          </button>
          <button
            onClick={() => handleButtonClick('/Ts')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <SiTypescript className="w-8 h-8 text-blue-600" />
            TypeScript
          </button>
          <button
            onClick={() => handleButtonClick('/php')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaPhp className="w-8 h-8 text-purple-500" />
            PHP
          </button>
          <button
            onClick={() => handleButtonClick('/rust')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaRust className="w-8 h-8 text-orange-500" />
            Rust
          </button>
          <button
            onClick={() => handleButtonClick('/kotlin')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <SiKotlin className="w-8 h-8 text-blue-700" />
            Kotlin
          </button>
        </div>

        {/* Frameworks */}
        <h1 className="text-4xl font-semibold text-teal-400 mb-12 mt-8">Frameworks</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <button
            onClick={() => handleButtonClick('/react')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaReact className="w-8 h-8 text-blue-500" />
            React
          </button>
          <button
            onClick={() => handleButtonClick('/angular')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaAngular className="w-8 h-8 text-red-500" />
            Angular
          </button>
          <button
            onClick={() => handleButtonClick('/vue')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <FaVuejs className="w-8 h-8 text-green-400" />
            Vue.js
          </button>
          <button
            onClick={() => handleButtonClick('/flask')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <SiFlask className="w-8 h-8 text-gray-800" />
            Flask
          </button>
          <button
            onClick={() => handleButtonClick('/springboot')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <SiSpringboot className="w-8 h-8 text-green-700" />
            Spring Boot
          </button>
          <button
            onClick={() => handleButtonClick('/django')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <DiDjango className="w-8 h-8 text-green-500" />
            Django
          </button>
          <button
            onClick={() => handleButtonClick('/express')}
            className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gray-900 text-white px-4 py-3 text-md font-medium hover:bg-teal-500 hover:text-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-xl"
          >
            <SiExpress className="w-8 h-8 text-green-500" />
            Express
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
