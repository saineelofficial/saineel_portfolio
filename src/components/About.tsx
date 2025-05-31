import React, { useState } from "react";
import { User } from "lucide-react";
import linkedinProfileImg from "../assets/linkedin_profile_img.jpg";
import resumePDF from "../assets/Sai_Neel_Resume.pdf";

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error("Failed to load image");
    setImageError(true);
  };

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
              About Me
            </h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <div className="w-full flex justify-center md:justify-start animate-fade-in-left order-2 md:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              <div className="aspect-square w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-6 animate-glow"></div>
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-2xl relative z-10">
                    Image not found
                  </div>
                ) : (
                  <img
                    src={linkedinProfileImg}
                    alt="Sai Neelkanth Chary"
                    className="w-full h-full object-cover rounded-2xl relative z-10 hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-6 animate-fade-in-right order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center md:text-left">
              Passionate Developer & Creative Problem Solver
            </h3>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                With over 5 years of experience in full-stack development, I
                specialize in creating beautiful, functional, and user-centered
                digital experiences. My journey in tech started with a curiosity
                about how things work and evolved into a passion for building
                solutions that make a difference.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                I believe in the power of clean code, innovative design, and
                continuous learning. When I'm not coding, you can find me
                exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md mx-auto md:mx-0">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                  50+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">
                  5+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md md:w-auto mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 hover-glow cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
