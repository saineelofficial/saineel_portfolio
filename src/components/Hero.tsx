
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 dark:from-orange-500/10 dark:via-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent">
            John Doe
          </h1>
        </div>
        
        <div className="h-20 mb-8">
          <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-light">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </div>

        <div className="animate-fade-in-left">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision. 
            Specializing in modern web technologies and innovative solutions.
          </p>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in-right">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-4 border border-orange-300 dark:border-gray-600 text-orange-600 dark:text-gray-300 rounded-lg font-medium hover:bg-orange-50 dark:hover:bg-gray-800 hover:border-orange-400 dark:hover:border-gray-500 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
