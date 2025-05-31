import React, { useEffect, useState } from 'react';
import { Star, Code, Server, Cloud, TestTube, GitBranch, Wrench } from 'lucide-react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-orange-400 to-red-500',
      skills: ['React/Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-emerald-400 to-green-600',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-400 to-indigo-600',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Azure']
    },
    {
      title: 'Testing & Monitoring',
      icon: TestTube,
      color: 'from-purple-400 to-pink-600',
      skills: ['Jest', 'Cypress', 'Selenium', 'Grafana', 'New Relic', 'Prometheus']
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'from-amber-400 to-orange-600',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Git Flow', 'Conventional Commits']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-teal-400 to-cyan-600',
      skills: ['VS Code', 'Postman', 'Figma', 'Slack', 'Jira', 'Notion']
    }
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
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-orange-500 dark:text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-orange-200/50 dark:border-gray-700/50 ${
                  animated ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Category title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
                    }}>
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                      style={{
                        animationDelay: `${(index * 150) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* What I Do section remains the same but updated colors */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl hover:bg-orange-100/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 group border border-orange-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3 group-hover:text-orange-700 dark:group-hover:text-orange-300">Frontend Development</h4>
              <p className="text-gray-600 dark:text-gray-300">Creating responsive, interactive user interfaces with modern frameworks and libraries.</p>
            </div>
            
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl hover:bg-red-100/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 group border border-orange-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3 group-hover:text-red-700 dark:group-hover:text-red-300">Backend Development</h4>
              <p className="text-gray-600 dark:text-gray-300">Building robust APIs and server-side applications with scalable architectures.</p>
            </div>
            
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl hover:bg-emerald-100/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 group border border-orange-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">Full Stack Solutions</h4>
              <p className="text-gray-600 dark:text-gray-300">End-to-end application development from concept to deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
