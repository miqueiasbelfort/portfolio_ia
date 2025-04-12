import Container from "./components/ui/Container";
import ExperienceList from "./components/ui/ExperienceList";
import PrimaryButton from "./components/ui/PrimaryButton";
import { TbMessage2Question } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "./components/ui/ProjectList";
import AIForm from "./components/ui/AIForm";

function App() {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8">
        {/* Sidebar */}
        <div className="w-full md:max-w-4xl md:w-1/3 md:sticky md:top-0 md:h-fit">
          <div className="flex flex-col gap-8 p-4">
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
              >
                Miqueias Belfort
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl text-blue-400 mt-4 font-light tracking-wide"
              >
                Full Stack Developer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 md:text-lg mt-2 max-w-md"
              >
                I'm a full stack developer from Brazil.
              </motion.p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-6"
              />
            </div>

            {/* Navegação com scroll suave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <nav className="flex flex-row gap-8 text-md md:text-lg overflow-x-auto pb-2">
                {["About", "Experiences", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="group relative block text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:translate-y-1 whitespace-nowrap"
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Formulário IA */}
            <AIForm />

          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="w-full md:max-w-4xl md:w-2/3 space-y-20 overflow-y-auto no-scrollbar" style={{ scrollBehavior: "smooth" }}>
          {/* Sobre */}
          <motion.section 
            id="about" 
            className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello, my name is Miqueias! I am a full-stack developer with solid experience in technologies such as JavaScript, React, Node.js, PHP, and Laravel. I am currently studying Software Engineering at IESB University. I thrive on challenges and the constant evolution of the tech world.
              I believe that a great programmer is always learning, reinventing themselves, and striving to improve their skills. For me, continuous learning is not just a necessity but a way of life.
              I'm always open to exchanging ideas, sharing knowledge, and expanding my network.
            </p>
            <div className="flex justify-end mt-6">
              <PrimaryButton className="group">
                <span className="flex items-center gap-2">
                  Download CV
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </PrimaryButton>
            </div>
          </motion.section>

          {/* Experiências */}
          <motion.section 
            id="experiences" 
            className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experiences</h2>
            <ExperienceList />
          </motion.section>

          {/* Projetos */}
          <motion.section 
            id="projects" 
            className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</h2>
            <ProjectList />
          </motion.section>

          {/* Contato */}
          <motion.section 
            id="contact" 
            className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">miqueiasbelfort8323@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-3 rounded-full bg-purple-500/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+55 (61) 992254791</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Let's Connect!</h3>
                <p className="text-gray-400 mb-6">Feel free to reach out through my social media channels or send me an email. I'm always open to new opportunities and collaborations.</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700/50 hover:bg-blue-500/20 transition-all duration-300 group"
                  >
                    <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700/50 hover:bg-blue-500/20 transition-all duration-300 group"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://instagram.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700/50 hover:bg-blue-500/20 transition-all duration-300 group"
                  >
                    <FaInstagram className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Container>
  );
}

export default App;
