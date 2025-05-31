
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <User className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-6 animate-glow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl relative z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              beautiful, functional, and user-centered digital experiences. My journey in tech 
              started with a curiosity about how things work and evolved into a passion for 
              building solutions that make a difference.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in the power of clean code, innovative design, and continuous learning. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 hover-glow">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
