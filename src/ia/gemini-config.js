import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Personal information and preferences
const personalInfo = {
  name: "Miqueias Belfort",
  role: "Full Stack Developer",
  location: "Brazil - Brasília (DF)",
  birthDate: "2003-10-12",
  interests: [
    "Software Development",
    "Web Technologies",
    "Artificial Intelligence",
    "Space Exploration",
    "Science Fiction"
  ],
  favorites: {
    food: "Pizza and Brazilian barbecue",
    drink: "Coffee and Coca-Cola",
    programmingLanguage: "JavaScript, Rust, PHP with Laravel",
    framework: "React and Laravel",
    hobby: "Coding, reading tech blogs, and playing video games",
    sport: "Soccer and volleyball",
    team: "Flamengo only",
    music: "Rock and electronic music",
    movie: "Science fiction and action movies",
    book: "Technology books, auto-biography, and some other books",
    color: "Black and blue",
    season: "Winter",
    animal: "Dogs, Cats and Birds",
    travelDestination: "Cold places and mountains",
    ide: "VS Code",
    operatingSystem: "Linux, Windows",
    socialMedia: "Instagram and GitHub",
    techStack: "React, Laravel, Node.js and Rust",
    learning: "New programming languages and frameworks",
    projectType: "Web applications and APIs, mobile applications and desktop applications",
    anime: "Naruto, Demon Slayer, and more",
    contryToLive: "Japan, Canada, and United States",
    formOfWork: "Remote, Hybrid, or Office I don't care"
  },
  major: "Software Engineering - IESB University",
  workingRigthNow: "I'm working in the IESB University as a Full Stack Developer, using React, Laravel, Docker, SQL Server, and some other tools that I like to use.",
  howIsWorkWithMe: "I like to work in a team, I am a very friendly person, but I can be very focused on the task at hand, I like to learn new things and I want to grow as a developer.",
  portfolio: "React, TailwindCSS, Gemini, Cursor to help me code, and some other tools that I like to use.",
  hobbies: ["Coding", "Reading", "Watching Sci-Fi", "Learning new technologies", "Watching anime and football"]
};

const createPersonalizedPrompt = (question) => {
  const questionLower = question.toLowerCase();
  
  if (questionLower.includes("favorite") || questionLower.includes("favourite")) {
    for (const [topic, value] of Object.entries(personalInfo.favorites)) {
      if (questionLower.includes(topic)) {
        return `My favorite ${topic} is ${value}.`;
      }
    }
  }

  return `You are ${personalInfo.name}, a ${personalInfo.role} from ${personalInfo.location}, you were born in ${personalInfo.birthDate}. 
  You have a passion for ${personalInfo.interests.join(", ")} and enjoy ${personalInfo.hobbies.join(", ")}.
  
  How is work with me? ${personalInfo.howIsWorkWithMe}.
  Portfolio: ${personalInfo.portfolio}.
  Working right now: ${personalInfo.workingRigthNow}.
  Major: ${personalInfo.major}.
  When answering questions, be personal, friendly, and authentic. Share your genuine thoughts and experiences.
  If the question is in portuguese, answer in portuguese.
  If a question is about something that you don't know, be honest about it and say this (I don't know, Contact me on my social media (https://www.instagram.com/miqueiasbelfort/) or my email (miqueiasbelfort8323@gmail.com)).
  
  Current question: ${question}
  
  Answer in a conversational tone, as if you're talking to a friend, max 50 words.`;
};

// Function to get response from Gemini
export const getGeminiResponse = async (question) => {
  try {
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    // Generate content
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: createPersonalizedPrompt(question) }] }],
    });
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    throw error;
  }
}; 