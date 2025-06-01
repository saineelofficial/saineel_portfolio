import React, { useEffect, useState } from "react";
import {
  Star,
  Code,
  Server,
  Cloud,
  TestTube,
  GitBranch,
  Wrench,
  GraduationCap,
  Calendar,
  MapPin,
  Eye,
} from "lucide-react";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [portfolioViews, setPortfolioViews] = useState(1247);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: [
        "React/Next.js",
        "TypeScript",
        "Vue.js",
        "Tailwind CSS",
        "Redux",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-gray-700 to-gray-800",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "Django",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-400 to-blue-500",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Azure"],
    },
    {
      title: "Testing & Monitoring",
      icon: TestTube,
      color: "from-gray-600 to-gray-700",
      skills: [
        "Jest",
        "Cypress",
        "Selenium",
        "Grafana",
        "New Relic",
        "Prometheus",
      ],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "from-blue-600 to-blue-700",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Git Flow",
        "Conventional Commits",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-gray-500 to-gray-600",
      skills: ["VS Code", "Postman", "Figma", "Slack", "Jira", "Notion"],
    },
  ];

  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "California, USA",
      duration: "2020 - 2022",
      gpa: "3.8/4.0",
      description: "Specialized in Machine Learning and Software Engineering",
      color: "from-red-500 to-red-600",
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of California, Berkeley",
      location: "California, USA",
      duration: "2016 - 2020",
      gpa: "3.7/4.0",
      description: "Focus on Full-Stack Development and Data Structures",
      color: "from-blue-500 to-blue-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setAnimated(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    // Set default visibility after a short delay if section is already in view
    const timer = setTimeout(() => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          setAnimated(true);
        }
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Simulate live view counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioViews(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Portfolio Views Counter */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
            <Eye className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {portfolioViews.toLocaleString()} views
            </span>
          </div>
        </div>

        <div className="text-center mb-10 sm:mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-200 dark:border-gray-800 ${
                  animated ? "animate-fade-in" : ""
                }`}
                style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Subtle gradient background that appears on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                ></div>

                {/* Icon with clean background */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Category title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 150 + skillIndex * 50}ms`,
                      }}
                    >
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                      <span className="text-xs sm:text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clean hover effect overlay */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-white/5"></div>
              </div>
            );
          })}
        </div>

        {/* What I Do section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-500 ${
            animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                Frontend Development
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Creating responsive, interactive user interfaces with modern
                frameworks and libraries.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                Backend Development
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Building robust APIs and server-side applications with scalable
                architectures.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Full Stack Solutions
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                End-to-end application development from concept to deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Education section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 ${
            animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
              Education
            </h3>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`group relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-200 dark:border-gray-800 overflow-hidden ${
                  animated ? "animate-fade-in" : ""
                }`}
                style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateX(0)" : "translateX(-30px)",
                  transition: "all 0.6s ease",
                  transitionDelay: `${800 + index * 200}ms`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                ></div>
                
                {/* Floating accent line */}
                <div
                  className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${edu.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
                ></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                          {edu.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}
                    >
                      {edu.gpa}
                    </div>
                  </div>
                </div>

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
