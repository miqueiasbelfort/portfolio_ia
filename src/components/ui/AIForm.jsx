import { useState } from "react";
import { motion } from "framer-motion";
import { TbMessage2Question } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { getGeminiResponse } from "../../ia/gemini-config";

const AIForm = () => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    try {
      const answer = await getGeminiResponse(question);
      setResponse(answer);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, I encountered an error while processing your question. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <label className="text-gray-400 md:text-lg">What do you want to know about me? <span className="text-xs">(IA will answer)</span></label>
      <textarea
        className="resize-none w-full h-48 bg-gray-800/50 rounded-lg p-4 
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
        border border-gray-700/50
        text-gray-300 placeholder-gray-500
        transition-all duration-300 ease-in-out
        hover:border-gray-600/50
        backdrop-blur-sm
        md:h-64"
        placeholder="Ask me anything about my experience, skills, projects, or interests. I'll do my best to provide an insightful answer!"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsTextareaFocused(true)}
        onBlur={() => setIsTextareaFocused(false)}
      />
      {response && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-gray-800/50 rounded-lg text-gray-300
          max-h-96 overflow-y-auto
          border border-gray-700/50
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800/50
          hover:border-gray-600/50 transition-all duration-300"
        >
          <div className="prose prose-invert max-w-none">
            {response}
          </div>
        </motion.div>
      )}
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 group"
          >
            <FaGithub className="text-xl text-gray-400 group-hover:text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 group"
          >
            <FaLinkedin className="text-xl text-gray-400 group-hover:text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 group"
          >
            <FaInstagram className="text-xl text-gray-400 group-hover:text-white" />
          </a>
        </div>
        <PrimaryButton 
          className="justify-between gap-3 text-xl" 
          animation={isTextareaFocused}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Thinking..." : "Ask AI"} <TbMessage2Question />
        </PrimaryButton>
      </div>
    </motion.div>
  );
};

export default AIForm; 