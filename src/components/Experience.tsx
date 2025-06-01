
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "PVK Corp",
      position: "Software Engineer",
      period: "Aug 2024 - Present",
      location:"Ashburn, VA",
      description: "Built and scaled a real-time event-tracking platform using AWS and React to support enterprise-grade customer engagement.",
      achievements: [
        "Designed a modular React.js interface with a Node.js backend on AWS Lambda and DynamoDB, enhancing user engagement by 20%",
        "Partnered in automating CI/CD with GitLab and embedded Cypress/Jest tests, cutting deployment downtime by 40%",
        "Resolved critical incidents 35% faster using CloudWatch and Splunk, boosting system reliability",
        "Led frontend performance tuning and code reviews to establish best practices across the team",
      ]
    },
    {
      company: "Chartwells Higher Education Services",
      position: "Data & Frontend Product Assistant",
      period: "September 2022 - May 2024",
      location:"Washington, DC",
      description: "Modernized data tools and user interfaces for student meal tracking and reporting across campus systems.",
      achievements: [
        "Built a real-time meal plan tracking portal using React.js and SQL, increasing self-service usage by 40%",
        "Developed automated Power BI dashboards, reducing manual effort by 25% and serving insights to 500+ users",
        "Designed Python ETL pipelines for food service data, reducing manual errors and food waste by 20%",
        "Boosted user satisfaction by 30% through cross-functional collaboration to enhance data reliability",
      ]
    },
    {
      company: "Devtown",
      position: "Software Engineer",
      period: "June 2021 - September 2021",
      location:"Remote, India",
      description: "Delivered reusable frontend solutions and improved backend API integration for performance-critical web apps.",
      achievements: [
        "Created a componentized React.js UI library deployed on AWS EC2/S3, cutting project setup time by 15%",
        "Optimized frontend and backend architecture, reducing latency below 200ms and improving user responsiveness by 30%",
        "Aligned design standards with 5 cross-functional teams, reducing feedback cycles by 20%"
      ]
    },
    {
      company: "Imbuedesk ENS PVT Ltd",
      position: "Frontend Developer",
      period: "May 2020 - September 2020",
      location:"Remote, India",
      description: "Built robust UI components for HR applications with a focus on responsiveness and usability.",
      achievements: [
        "Designed interactive UI modules in React.js and SCSS, improving user retention by 25%",
        "Integrated RESTful APIs with lazy loading, decreasing page load time by 20%",
        "Led UI testing with Jest and Cypress, improving pre-release stability by 30% and cutting post-launch issues by 40%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
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
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                <div className="ml-16 flex-1">
                  <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl hover:shadow-lg dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-blue-500 font-semibold">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.location}</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
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
