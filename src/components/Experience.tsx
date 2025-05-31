
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline improving deployment efficiency"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed responsive web applications and mobile-first interfaces. Collaborated with design and backend teams to deliver user-centered solutions.",
      achievements: [
        "Built and launched 3 major product features",
        "Improved user engagement by 60% through UX improvements",
        "Established component library used across multiple projects"
      ]
    },
    {
      company: "Digital Agency Inc",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Created custom websites and web applications for diverse clients. Gained experience in various technologies and project management methodologies.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Learned and implemented new frameworks quickly",
        "Received 'Employee of the Month' recognition twice"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8 animate-fade-in">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                
                <div className="ml-16 flex-1">
                  <div className="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-200">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
