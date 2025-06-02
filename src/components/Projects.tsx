
import React, { useState } from 'react';
import { Projector, Eye } from 'lucide-react';

const Projects = () => {
  const [projectViews, setProjectViews] = useState(() => {
    const saved = localStorage.getItem('projectViews');
    return saved ? JSON.parse(saved) : { 1: 0, 2: 0, 3: 0 };
  });

  const projects = [
    {
      id: 1,
      title: "Student Excahnge Web App",
      description: "A responsive web app built with React, Node.js, and Firebase to help students buy/sell items on campus — improved engagement by 35% with secure login and real-time updates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React.js", "Node.js", "Tailwind CSS", "Firebase", "Bcrypt.js", "Swiper.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "AR Weather Simulator App",
      description: "An immersive mobile AR app simulating live weather models with intuitive user interaction across iOS and Android.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Unity", "C#", "ARKit", "ARCore","Visual Scripting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "GW Bars Platform – Local Bars Tracking Platform ",
      description: "A digital platform for managing bar reservations and operations, streamlining bookings across multiple venues.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Oracle APEX", "MySQL"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleProjectInteraction = (projectId: number) => {
    const newViews = { ...projectViews };
    newViews[projectId] = (newViews[projectId] || 0) + 1;
    setProjectViews(newViews);
    localStorage.setItem('projectViews', JSON.stringify(newViews));
    console.log(`Project ${projectId} views: ${newViews[projectId]}`);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Projector className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} animate-fade-in-left`}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* View Counter */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">{projectViews[project.id]?.toLocaleString()}</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <button 
                      onClick={() => handleProjectInteraction(project.id)}
                      className="w-full py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} space-y-6 animate-fade-in-right`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => handleProjectInteraction(project.id)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300"
                  >
                    Live Demo
                  </button>
                  <button 
                    onClick={() => handleProjectInteraction(project.id)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
