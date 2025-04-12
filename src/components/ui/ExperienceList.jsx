import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    title: "Internship Web Developer",
    company: "IESB University",
    period: "Feb 2023 - Jul 2024",
    description: "Developing solutions to improve the bureaucratic processes of university campuses using NextJS, TailwindCSS, Cypress, and Node.",
    technologies: ["NextJS", "TailwindCSS", "Cypress", "Node"],
  },
  {
    title: "Full Stack Developer",
    company: "IESB University",
    period: "Jul 2024 - Present",
    description: "Working on migrating legacy systems to modern solutions, ensuring greater quality and efficiency for students, professors, and university staff. Improving systems with a focus on both performance and user experience to provide greater stability and quality for students and professionals within the company.",
    technologies: ["Laravel", "React", "InertiaJS", "Git/Gitlab", "TailwindCSS", "Node", "SQL Server", "Docker"], 
  }
];

const ExperienceList = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="relative py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors duration-300" />
              
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2" />
              )}

              <div className="ml-6 sm:ml-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="mt-1 sm:mt-2 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <FaBuilding className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
