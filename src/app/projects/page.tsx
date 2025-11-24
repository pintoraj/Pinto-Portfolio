"use client";

import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { Briefcase, Zap, Shield, Github, Code, GraduationCap } from 'lucide-react'; // Added Code, GraduationCap
import { PulseBeams } from '@/components/PulseBeams'; 
import { motion } from 'framer-motion';

// --- Data Structure ---
const projectData = [
  {
    icon: Briefcase,
    title: "Full-stack eCommerce Application",
    type: "Professional Experience (Cognizant)",
    category: "professional", // Added category field
    description: "Developed a Full-stack eCommerce application using React (Vite) for the frontend and Spring Boot for the backend. Implemented RESTful APIs communicating with a MySQL database for optimized product listing, cart management, and order processing. Demonstrated enterprise-level deployment practices.",
    techStack: "React (Vite), Spring Boot, MySQL, RESTful APIs, JUnit, Mockito, Postman",
    link: "https://github.com/pintoraj/ecommerce-app-repo",
  },
  {
    icon: Zap,
    title: "AI System-Inclusive Communication",
    type: "Academic Project (Software Development)",
    category: "academic",
    description: "Developed an ML/MediaPipe based solution that automates NLP and sign language translation. This project enhances communication for individuals with visual, auditory, and speech impairments, focusing on accessibility.",
    techStack: "Machine Learning, MediaPipe, NLP, Python",
    link: "https://github.com/pintoraj/ai-inclusive-comm",
  },
  {
    icon: Shield,
    title: "Ransomware Recovery Tool",
    type: "Academic Project (Cybersecurity)",
    category: "academic",
    description: "Engineered a tool that identifies encrypted files, analyzes encryption patterns, and restores compromised data using cryptographic techniques. This enhances system resilience against modern ransomware attacks and data loss.",
    techStack: "Cryptography, Java/Python, Data Analysis",
    link: "https://github.com/pintoraj/ransomware-recovery",
  },
  {
    icon: Code, // Changed from Briefcase to a more general 'Code' icon for this academic project
    title: "AI-Powered Personalized Health System",
    type: "Academic Project (AI/ML)",
    category: "academic",
    description: "Engineered an intelligent health platform using multiple machine learning models (e.g., classification, regression) to analyze patient data, provide tailored diagnostics, and recommend personalized treatment plans.",
    techStack: "Machine Learning Models, Patient Data Analysis, Python",
    link: "https://github.com/pintoraj/ai-health-system",
  },
];

// Grouping data by category for better organization in the UI
const groupedProjects = projectData.reduce((acc, project) => {
  const category = project.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(project);
  return acc;
}, {} as Record<string, typeof projectData>);


// --- Framer Motion Variants ---
const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.5 }
  },
};

// --- Project Card Component ---
const ProjectCard = ({ project }: { project: typeof projectData[0] }) => {
  const Icon = project.icon;
  const isProfessional = project.category === 'professional';

  // Conditional styling for the professional project card
  const cardClasses = isProfessional
    ? "bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-2xl border border-neutral-500/50 flex flex-col h-full transition duration-300 hover:border-neutral-400/80 hover:shadow-neutral-500/30"
    : "bg-white/5 p-6 rounded-2xl shadow-xl border border-neutral-700/50 flex flex-col h-full transition duration-300 hover:border-neutral-400/50 hover:shadow-neutral-700/30";
  
  const iconBgClass = isProfessional ? "bg-neutral-500/20 text-neutral-300" : "bg-neutral/10 text-neutral-300";

  return (
    <motion.div
        variants={cardVariants}
        className={cardClasses}
    >
      <div className="flex items-start justify-between">
        {/* Icon and Title Block */}
        <div className="flex-grow">
          <div className={`p-3 w-fit rounded-full mb-4 ${iconBgClass}`}>
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-1 leading-snug">{project.title}</h3>
          <p className="text-sm font-medium" style={{ color: isProfessional ? '#fdfeffd1' : '#cdcdd7ff' }}>
            {project.type}
          </p>
        </div>
        
        {/* GitHub Link Icon */}
        <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition duration-300 p-2 ml-4 rounded-full hover:bg-white/10"
            title="View Code"
        >
            <Github className="w-6 h-6" />
        </Link>
      </div>
      
      {/* Description */}
      <p className="mt-6 text-gray-300 leading-relaxed text-sm flex-grow">{project.description}</p>
      
      {/* Tech Stack */}
      <div className="mt-6 pt-4 border-t border-neutral-800">
        <p className="text-xs font-semibold uppercase text-neutral-500 mb-1">Tech Stack</p>
        <p className="text-sm text-gray-200">{project.techStack}</p>
      </div>
    </motion.div>
  );
};

// --- Main Projects Page Component ---
export default function ProjectsPage() {
  return (
    // MAIN CONTAINER
    <div className="relative min-h-screen neutral-900 text-white pt-16">
      <NavBar />
      
      {/* Pulse Beams Background Layer */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {/* Assumes PulseBeams component handles its own positioning */}
        <PulseBeams />
      </div>

      {/* Main Content Layer (z-index 10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white tracking-tight">
            <span className="text-neutral-400 mr-2">02.</span> Signature Projects
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my most impactful work, spanning Full-Stack, AI/ML, and Cybersecurity.
          </p>
        </header>

        {/* --- 1. Professional Experience Section --- */}
        <section className="mb-20">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8 flex items-center justify-center md:justify-start">
                <Briefcase className="w-8 h-8 mr-3" />
                Professional Experience
            </h2>
            <motion.div 
                className="grid grid-cols-1 gap-12" // Single column for high visibility
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {groupedProjects.professional?.map((project, index) => (
                    <ProjectCard key={index} project={project} /> 
                ))}
            </motion.div>
        </section>

        {/* --- 2. Academic & Personal Projects Section --- */}
        <section className="mb-20">
            <h2 className="text-4xl font-bold text-neutral-300 mb-10 flex items-center justify-center md:justify-start">
                <GraduationCap className="w-8 h-8 mr-3" />
                Academic & Key Personal Projects
            </h2>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12" // Two columns for density
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {groupedProjects.academic?.map((project, index) => (
                    <ProjectCard key={index} project={project} /> 
                ))}
            </motion.div>
        </section>


        {/* --- View All Code CTA Section --- */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            View All Code
          </h2>
          <p className="mt-3 text-lg text-gray-400 mb-8">
            Check out my full repository for more contributions and open-source work.
          </p>
          {/* Framer Motion for CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          >
            <Link
                href="https://github.com/pintoraj"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-10 py-3 border-2 border-neutral-500 text-base font-medium rounded-full text-neutral-300 
                            hover:bg-neutral-500/10 hover:border-neutral-400 transition duration-300 transform shadow-lg"
            >
                <Github className="inline-block w-5 h-5 mr-2 -mt-0.5" />
                Visit My GitHub Profile
            </Link>
          </motion.div>
        </section>
        
      </div>
    </div>
  );
}