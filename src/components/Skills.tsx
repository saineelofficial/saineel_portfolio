
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-indigo-500' },
    { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps', level: 75, color: 'from-red-500 to-rose-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Expertise</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-100 mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: animated ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-100 mb-8">What I Do</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                <h4 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Frontend Development</h4>
                <p className="text-gray-300">Creating responsive, interactive user interfaces with modern frameworks and libraries.</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                <h4 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">Backend Development</h4>
                <p className="text-gray-300">Building robust APIs and server-side applications with scalable architectures.</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                <h4 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">Full Stack Solutions</h4>
                <p className="text-gray-300">End-to-end application development from concept to deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
