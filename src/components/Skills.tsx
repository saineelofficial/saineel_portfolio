
import React, { useEffect, useState } from 'react';
import { Star, Code, Server, Cloud, TestTube, GitBranch, Wrench } from 'lucide-react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['React/Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-gray-700 to-gray-800',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-400 to-blue-500',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Azure']
    },
    {
      title: 'Testing & Monitoring',
      icon: TestTube,
      color: 'from-gray-600 to-gray-700',
      skills: ['Jest', 'Cypress', 'Selenium', 'Grafana', 'New Relic', 'Prometheus']
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'from-blue-600 to-blue-700',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Git Flow', 'Conventional Commits']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-gray-500 to-gray-600',
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
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-200 dark:border-gray-800 ${
                  animated ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Subtle gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon with clean background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Category title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                      style={{
                        animationDelay: `${(index * 150) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Clean hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-white/5"></div>
              </div>
            );
          })}
        </div>

        {/* What I Do section with Apple-like styling */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400">Frontend Development</h4>
              <p className="text-gray-600 dark:text-gray-400">Creating responsive, interactive user interfaces with modern frameworks and libraries.</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">Backend Development</h4>
              <p className="text-gray-600 dark:text-gray-400">Building robust APIs and server-side applications with scalable architectures.</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-semibold text-blue-500 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">Full Stack Solutions</h4>
              <p className="text-gray-600 dark:text-gray-400">End-to-end application development from concept to deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
