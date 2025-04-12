import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SuperChat",
    description: "A chat application build with React, Node, and Socket.io. It's a simple chat application that allows you to chat with your friends in a group.",
    technologies: ["React", "Node", "Socket.io", "TailwindCSS"],
    githubUrl: "https://github.com/miqueiasbelfort/superchat-client",
    liveUrl: "https://superchat-react-ts.netlify.app/",
  },
  {
    title: "Todo List in Rust Terminal",
    description: "A simple todo list application built with Rust. It allows you to add, remove, and mark tasks as completed.",
    technologies: ["Rust", "Cargo", "Cargo-make"],
    githubUrl: "https://github.com/miqueiasbelfort/todo_list_rust_terminal",
    liveUrl: "https://github.com/miqueiasbelfort/todo_list_rust_terminal",
  }
];

const ProjectList = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
        >
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span>Live Demo</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList; 